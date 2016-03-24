# dkCircles Directive

An AngularJS directive that creates circular graphs using circles.js

### Usage

* Include the `dk-circles.min.js` file in your page (`circles.js` is compiled into `dk-circles.min.js`)
* Include "dk.circles" in your module dependencies `angular.module('foo', ['dk.circles']);`
* In one of your views, include some HTML like this...

`<span dk-circles id="foo" circ-value="{{some.value}}" circ-radius="50" circ-width="10" circ-text="{{some.othervalue}}" circ-duration="400" circ-colors="#eee,#04c"></span>`

### Required Attrs

* `dk-circles` - this is the directive!
* `id` - the DOM element that will hold the graph
* `circ-value` - the value/percentage you wish to show

### Optional Attrs

* `circ-radius` - the radius of the circles (default: 50)
* `circ-width` - the width of the ring (default: 10)
* `circ-value` - the number to display at the centre of the graph (default: null (ie, the value will show))
* `circ-max-value` - the max value (defaults to 100)
* `circ-text` - the text to display (default: circ-value)
* `circ-colors` - a comma delimited list of colors (default: '#D3B6C6','#4B253A')
* `circ-duration` - value in ms of animation's duration (default: null (no animation))

### CSS

You may need to provide some extra css to get the text to align correcly. Here's an example of moving the text inside the circle to the left...

    .circles-text {
      left: -2px !important;
    }

### Compatibility

* The directive was tested using AngularJS 1.3.11 only, it probably works with any version. #ymmv

### Inspirations

Code and ideas borrowed by:

* [Circles](https://github.com/lugolabs/circles) by Artan Sinani
* [Highcharts](http://highcharts.com)
* Wout Fierens's [svg.js](http://svgjs.com)


### Licence

dk.circles is licensed under the terms of the MIT License.


### Changelog

* 1.0.0 - incorporates changes up to Circle version 0.0.6, renamed the module to "dk.circles"
* 0.0.2 - Merged in upstream fixes for [#3](https://github.com/lugolabs/circles/issues/3), uses Circles 0.0.3
* 0.0.1 First release of the directive, which uses Circles 0.0.2