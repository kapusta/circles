// Example: <span dk-circles id="foo" circ-percentage="{{some.value}}" circ-radius="50" circ-width="10" circ-text="{{some.value}}"></span>
// FYI, the text value should be a number, not a label since maths are done to it.
(function(angular, Circles, document) {
  "use strict"; // ECMA5 strict mode
  
  angular.module('dkCircles', []).directive("dkCircles", ['$log', function($log){
    return {
      restrict: "A",
      replace: false,
      scope: {
        circPercentage: '@'
      },
      link: function(scope, element, attrs) {
        
        var circleIt = function() {
          Circles.create({
            id:         attrs.id,
            percentage: parseFloat(attrs.circPercentage).toFixed(2),
            radius:     parseInt(attrs.circRadius, 10) || 50,
            width:      parseInt(attrs.circWidth, 10) || 10,
            text:       attrs.circText || null,
            colors:     (attrs.circColors) ? attrs.circColors.split(",") : ['#D3B6C6', '#4B253A'],
            duration:   parseInt(attrs.circDuration, 10) || null
          });
        };
        
        if (scope.circPercentage) {
          circleIt();
        } else {  // If the percentage value isn't here yet (because ajax)
          scope.$watch(
            function() {
              return scope.circPercentage;
            },
            function(new_val, old_val, scope) {
              if (new_val) {
                circleIt();
              }
            }
          );
        }
      }
    };
  }]);

}(window.angular, window.Circles, document));
