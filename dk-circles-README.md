# dkCircles Directive

An AngularJS directive that creates circular graphs using circles.js

### Usage

* Include the `dk-circles.min.js` file in your page (`circles.js` is compiled into `dk-circles.min.js`)
* Include "dkCircles" in your module dependencies `angular.module('foo', ['dkCircles']);`
* In one of your views, include some HTML like this...

`<span dk-circles id="foo" circ-percentage="{{some.value}}" circ-radius="50" circ-width="10" circ-text="{{some.othervalue}}" circ-duration="400" circ-colors="#eee,#04c"></span>`

### Required Attrs

* `dk-circles` - this is the directive!
* `id` - the DOM element that will hold the graph
* `circ-percentage` - the percentage you wish to show

### Optional Attrs

* `circ-radius` - the radius of the circles (default: 50)
* `circ-width` - the width of the ring (default: 10)
* `circ-number` - the number to display at the centre of the graph (default: null (ie, the percentage will show))
* `circ-text` - the text to display after the number (default: null)
* `circ-duration` - value in ms of animation's duration (default: null (no animation))
* `circ-colors` - a comma delimited list of colors (default: '#D3B6C6','#4B253A')

### Compatibility

* The directive was tested using AngularJS 1.1.5 only, it probably works with any version. #ymmv

### Inspirations

Code and ideas borrowed by:

* [Circles](https://github.com/lugolabs/circles) by Artan Sinani
* [Highcharts](http://highcharts.com)
* Wout Fierens's [svg.js](http://svgjs.com)


### Licence

dkCircles is licensed under the terms of the MIT License.


### Changelog

* 0.0.2 - Merged in upstream fixes for [#3](https://github.com/lugolabs/circles/issues/3), uses Circles 0.0.3
* 0.0.1 First release of the directive, which uses Circles 0.0.2