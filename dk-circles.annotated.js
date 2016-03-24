/* 
Example usage...
<span dk-circles id="foo" circ-value="{{your.model}}" circ-max-value="100" circ-radius="100" circ-width="20" circ-duration="400" circ-colors="#eee,#04c"></span>
*/
(function(angular, Circles) {
  "use strict"; // ECMA5 strict mode
  
  angular.module('dk.circles', []).directive("dkCircles", ['$log', function($log){
    return {
      restrict: "A",
      replace: false,
      scope: {
        circValue: '@'
      },
      link: function(scope, element, attrs) {
        scope.$watch(
          function() {
            return scope.circValue;
          },
          function(new_val, old_val, scope) {
            if (new_val) {
              scope.circleIt();
            }
          }
        );
      },
      controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
        if (!$attrs.id) {
          $log.log("No id was provided in the dkCircles directive declaration, please provide one.");
        } else {
          $scope.circleIt = function() {
            var conf = {
              id:         $attrs.id,
              radius:     ($attrs.circRadius) ? parseInt($attrs.circRadius, 10) : 50,
              value:      ($attrs.circValue) ? $attrs.circValue : null,
              maxValue:   ($attrs.circMaxValue) ? $attrs.circMaxValue : 100,
              width:      ($attrs.circWidth) ? parseInt($attrs.circWidth, 10) : 10,
              text:       typeof($attrs.circText) !== "undefined" ? $attrs.circText : function(value){return value + " ";},
              colors:     ($attrs.circColors) ? $attrs.circColors.split(",") : ['#D3B6C6', '#4B253A'],
              duration:   ($attrs.circDuration) ? parseInt($attrs.circDuration, 10) : null,
              wrpClass:   'circles-wrp',
              textClass:  'circles-text',
              styleWrapper: true,
              styleText:    true
            };
            Circles.create(conf);
          };
        }
      }]
    };
  }]);

}(window.angular, window.Circles));
