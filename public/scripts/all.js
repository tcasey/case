angular.module('myApp', ['ui.router', 'ngAnimate', 'ngTouch'])

.config(["$urlRouterProvider", "$stateProvider", "$locationProvider", function($urlRouterProvider, $stateProvider, $locationProvider){

 $urlRouterProvider
  .otherwise('home');

 $stateProvider

 .state('home', {
		 url: '/home',
		 templateUrl: 'html/templates/home.html',
 })
 .state('bio',{
		 url: '/bio',
		 templateUrl: 'html/templates/bio.html',
 })
 .state('projects',{
		 url: '/projects',
		 templateUrl: 'html/templates/projects.html',
 })
 .state('skills',{
		 url: '/skills',
		 templateUrl: 'html/templates/skillset.html',
 })

 .state('bike',{
    url: '/projects/road-bike-junkie',
    templateUrl: 'html/templates/hex/hex1Content.html',
 })
 .state('h+c',{
    url: '/projects/h+c',
    templateUrl: 'html/templates/hex/hex2Content.html',
 })
 .state('ncaa',{
    url: '/projects/ncaa',
    templateUrl: 'html/templates/hex/hex3Content.html',
 })
 .state('karma',{
    url: '/projects/karma',
    templateUrl: 'html/templates/hex/hex4Content.html',
 })
 .state('junior',{
    url: '/projects/junior',
    templateUrl: 'html/templates/hex/hex5Content.html',
 })
 .state('do-it',{
    url: '/projects/do-it',
    templateUrl: 'html/templates/hex/hex6Content.html',
 })
 .state('smart-shopper',{
    url: '/projects/smart-shopper',
    templateUrl: 'html/templates/hex/hex7Content.html',
 })
 .state('twitter-clone',{
    url: '/projects/twitter-clone',
    templateUrl: 'html/templates/hex/hex8Content.html',
 })
 .state('hadouken',{
    url: '/projects/hadouken',
    templateUrl: 'html/templates/hex/hex9Content.html',
 })
 .state('golf',{
    url: '/projects/golf',
    templateUrl: 'html/templates/hex/hex10Content.html',
 })
 .state('fizz-buzz',{
    url: '/projects/fizz-buzz',
    templateUrl: 'html/templates/hex/hex11Content.html',
 })
 .state('dots',{
    url: '/projects/dots',
    templateUrl: 'html/templates/hex/hex12Content.html',
 })
 .state('memory',{
    url: '/projects/memory',
    templateUrl: 'html/templates/hex/hex13Content.html',
 })

 .state('waka',{
		 url: '/waka',
		 templateUrl: 'html/templates/waka.html',
		 controller: 'wakaCtrl',
 });
	//  $locationProvider.html5Mode(true);
}]);

angular.module('myApp')
  .directive('tcFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/footer.html',
      scope: {
        text: "@"
      }

    };
  });

angular.module('myApp')
  .directive('tcHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/header.html',
      scope: {
        text: "@"
      }

    };
  });

angular.module('myApp')
  .controller('mainCtrl', ["$scope", function($scope) {

    $('#icon-wrap-2').click(function() {
      if ($('#icon-wrap-2').hasClass('toClose')) {
        $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
      } else {
        $('#icon-wrap-2').removeClass('toOpen').addClass('toClose');
      }
    });

    $('.menu-nav').click(function() {
      $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
    });

    $('#menu-wrapper').click(function() {
      $('menu-nav').show();
    });
    $('#menu-wrapper').on('click', function() {
      $('.menu-nav').slideToggle(500);
    });

  }]);

angular.module('myApp')
  .directive('tcMenu', function() {
    return {
      restrict: 'E',
      controller: 'mainCtrl',
      templateUrl: 'html/templates/menu.html',
      scope: {
        info: '=',
        text: "@",
        whatever: "@"
      }
    }
  })

angular.module('myApp')

   .directive('bars', function () {
      return {
         controller: 'wakaCtrl',
         restrict: 'EA',
         replace: true,
         template: '<div id="main"></div>',
         scope: {
           data: '='
         },
         link: function (scope, element, attrs) {
           console.log('scope pre info', scope);
           var info = scope;
          //  console.log(info.hasOwnProperty('data'));s
     /////////////////////////////////////////////////////////
     /////////////// The Radar Chart Function ////////////////
     /////////////////////////////////////////////////////////
     var color = d3.scale.ordinal()
       .range(["#EDC951"]);

     var radarChartOptions = {
       w: width,
       h: height,
       margin: margin,
       maxValue: 0.5,
       levels: 4,
       roundStrokes: true,
       color: color
     };

     var margin = {top: 100, right: 100, bottom: 100, left: 100},
       width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
       height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
     var data = [
           [// JS Unit Lesson Tests
           {axis:"Angular",value:0.80},
           {axis:"JavaScript",value:0.76},
           {axis:"CSS3",value:1},
           {axis:"D3",value:0.68},
           {axis:"HTML5",value:0.91},
           {axis:"Node",value:0.51},
           {axis:"jQuery",value:0.80},
           {axis:"React",value:0.50}
           ]
         ];
     function RadarChart(id, data, options) {
     	var chart = {
     	 w: 230,				//Width of the circle
     	 h: 230,				//Height of the circle
     	 margin: {top: 100, right: 100, bottom: 100, left: 100}, //The margins of the SVG
     	 levels: 3,				//How many levels or inner circles should there be drawn
     	 maxValue: 100, 			//What is the value that the biggest circle will represent
     	 labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
     	 wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
     	 opacityArea: 0.35, 	//The opacity of the area of the blob
     	 dotRadius: 3, 			//The size of the colored circles of each blog
     	 opacityCircles: 0.1, 	//The opacity of the circles of each blob
     	 strokeWidth: 2, 		//The width of the stroke around each blob
     	 roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
     	 color: d3.scale.category10()	//Color function
     	};


     	//Put all of the options into a variable called chart
     	if('undefined' !== typeof options){
     	  for(var i in options){
     		if('undefined' !== typeof options[i]){ chart[i] = options[i]; }
     	  }//for i
     	}//if

     	//If the supplied maxValue is smaller than the actual one, replace by the max in the data
     	var maxValue = Math.max(chart.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));

     	var allAxis = (data[0].map(function(i, j){return i.axis})),	//Names of each axis
     		total = allAxis.length,					//The number of different axes
     		radius = Math.min(chart.w/2, chart.h/2), 	//Radius of the outermost circle
     		Format = d3.format('%'),			 	//Percentage formatting
     		angleSlice = Math.PI * 2 / total;		//The width in radians of each "slice"

     	//Scale for the radius
     	var rScale = d3.scale.linear()
     		.range([0, radius])
     		.domain([0, maxValue]);

     	/////////////////////////////////////////////////////////
     	//////////// Create the container SVG and g /////////////
     	/////////////////////////////////////////////////////////

     	//Remove whatever chart with the same id/class was present before
     	d3.select(id).select("svg").remove();

     	//Initiate the radar chart SVG
     	var svg = d3.select(id).append("svg")
     			.attr("width",  chart.w + chart.margin.left + chart.margin.right)
     			.attr("height", chart.h + chart.margin.top + chart.margin.bottom)
     			.attr("class", "radar"+id);
     	//Append a g element
     	var g = svg.append("g")
     			.attr("transform", "translate(" + (chart.w/2 + chart.margin.left) + "," + (chart.h/2 + chart.margin.top) + ")");

     	/////////////////////////////////////////////////////////
     	////////// Glow filter for some extra pizzazz ///////////
     	/////////////////////////////////////////////////////////

     	//Filter for the outside glow
     	var filter = g.append('defs').append('filter').attr('id','glow'),
     		feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
     		feMerge = filter.append('feMerge'),
     		feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
     		feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

     	/////////////////////////////////////////////////////////
     	/////////////// Draw the Circular grid //////////////////
     	/////////////////////////////////////////////////////////







     	//Wrapper for the grid & axes
     	var axisGrid = g.append("g").attr("class", "axisWrapper");

     	//Draw the background circles
     	axisGrid.selectAll(".levels")
     	   .data(d3.range(1,(chart.levels+1)).reverse())
     	   .enter()
     		.append("circle")
     		.attr("class", "gridCircle")
     		.attr("r", function(d, i){return radius/chart.levels*d;})
     		.style("fill", "#CDCDCD")
     		.style("stroke", "#CDCDCD")
     		.style("fill-opacity", chart.opacityCircles)
     		.style("filter" , "url(#glow)");

     	//Text indicating at what % each level is
     	axisGrid.selectAll(".axisLabel")
     	   .data(d3.range(1,(chart.levels+1)).reverse())
     	   .enter().append("text")
     	   .attr("class", "axisLabel")
     	   .attr("x", 4)
     	   .attr("y", function(d){return -d*radius/chart.levels;})
     	   .attr("dy", "0.4em")
     	   .style("font-size", "10px")
     	   .attr("fill", "#737373")
     	   .text(function(d,i) { return Format(maxValue * d/chart.levels); });

     	/////////////////////////////////////////////////////////
     	//////////////////// Draw the axes //////////////////////
     	/////////////////////////////////////////////////////////

     	//Create the straight lines radiating outward from the center
     	var axis = axisGrid.selectAll(".axis")
     		.data(allAxis)
     		.enter()
     		.append("g")
     		.attr("class", "axis");
     	//Append the lines
     	axis.append("line")
     		.attr("x1", 0)
     		.attr("y1", 0)
     		.attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
     		.attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
     		.attr("class", "line")
     		.style("stroke", "white")
     		.style("stroke-width", "2px");

     	//Append the labels at each axis
     	axis.append("text")
     		.attr("class", "legend")
     		.style("font-size", "11px")
     		.attr("text-anchor", "middle")
     		.attr("dy", "0.35em")
     		.attr("x", function(d, i){ return rScale(maxValue * chart.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
     		.attr("y", function(d, i){ return rScale(maxValue * chart.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
     		.text(function(d){return d})
     		.call(wrap, chart.wrapWidth);

     	/////////////////////////////////////////////////////////
     	///////////// Draw the radar chart blobs ////////////////
     	/////////////////////////////////////////////////////////

     	//The radial line function
     	var radarLine = d3.svg.line.radial()
     		.interpolate("linear-closed")
     		.radius(function(d) { return rScale(d.value); })
     		.angle(function(d,i) {	return i*angleSlice; });

     	if(chart.roundStrokes) {
     		radarLine.interpolate("cardinal-closed");
     	}

     	//Create a wrapper for the blobs
     	var blobWrapper = g.selectAll(".radarWrapper")
     		.data(data)
     		.enter().append("g")
     		.attr("class", "radarWrapper");

     	//Append the backgrounds
     	blobWrapper
     		.append("path")
     		.attr("class", "radarArea")
     		.attr("d", function(d,i) { return radarLine(d); })
     		.style("fill", function(d,i) { return chart.color(i); })
     		.style("fill-opacity", chart.opacityArea)
     		.on('mouseover', function (d,i){
     			//Dim all blobs
     			d3.selectAll(".radarArea")
     				.transition().duration(200)
     				.style("fill-opacity", 0.1);
     			//Bring back the hovered over blob
     			d3.select(this)
     				.transition().duration(200)
     				.style("fill-opacity", 0.6);
     		})
     		.on('mouseout', function(){
     			//Bring back all blobs
     			d3.selectAll(".radarArea")
     				.transition().duration(200)
     				.style("fill-opacity", chart.opacityArea);
     		});

     	//Create the outlines
     	blobWrapper.append("path")
     		.attr("class", "radarStroke")
     		.attr("d", function(d,i) { return radarLine(d); })
     		.style("stroke-width", chart.strokeWidth + "px")
     		.style("stroke", function(d,i) { return chart.color(i); })
     		.style("fill", "none")
     		.style("filter" , "url(#glow)");

     	//Append the circles
     	blobWrapper.selectAll(".radarCircle")
     		.data(function(d,i) { return d; })
     		.enter().append("circle")
     		.attr("class", "radarCircle")
     		.attr("r", chart.dotRadius)
     		.attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
     		.attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
     		.style("fill", function(d,i,j) { return chart.color(j); })
     		.style("fill-opacity", 0.8);

     	/////////////////////////////////////////////////////////
     	//////// Append invisible circles for tooltip ///////////
     	/////////////////////////////////////////////////////////

     	//Wrapper for the invisible circles on top
     	var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
     		.data(data)
     		.enter().append("g")
     		.attr("class", "radarCircleWrapper");

     	//Append a set of invisible circles on top for the mouseover pop-up
     	// blobCircleWrapper.selectAll(".radarInvisibleCircle")
     	// 	.data(function(d,i) { return d; })
     	// 	.enter().append("circle")
     	// 	.attr("class", "radarInvisibleCircle")
     	// 	.attr("r", chart.dotRadius*1.5)
     	// 	.attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
     	// 	.attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
     	// 	.style("fill", "none")
     	// 	.style("pointer-events", "all")
     	// 	.on("mouseover", function(d,i) {
     	// 		newX =  parseFloat(d3.select(this).attr('cx')) - 10;
     	// 		newY =  parseFloat(d3.select(this).attr('cy')) - 10;
       //
     	// 		tooltip
     	// 			.attr('x', newX)
     	// 			.attr('y', newY)
     	// 			.text(Format(d.value))
     	// 			.transition().duration(200)
     	// 			.style('opacity', 1);
     	// 	})
     	// 	.on("mouseout", function(){
     	// 		tooltip.transition().duration(200)
     	// 			.style("opacity", 0);
     	// 	});

     	//Set up the small tooltip for when you hover over a circle
     	// var tooltip = g.append("text")
     	// 	.attr("class", "tooltip")
     	// 	.style("opacity", 0);

     	/////////////////////////////////////////////////////////
     	/////////////////// Helper Function /////////////////////
     	/////////////////////////////////////////////////////////

     	//Taken from http://bl.ocks.org/mbostock/7555321
     	//Wraps SVG text
     	function wrap(text, width) {
     	  text.each(function() {
     		var text = d3.select(this),
     			words = text.text().split(/\s+/).reverse(),
     			word,
     			line = [],
     			lineNumber = 0,
     			lineHeight = 1.4, // ems Not sure if it's really needed
     			y = text.attr("y"),
     			x = text.attr("x"),
     			dy = parseFloat(text.attr("dy")),
     			tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

     		while (word = words.pop()) {
     		  line.push(word);
     		  tspan.text(line.join(" "));
     		  if (tspan.node().getComputedTextLength() > width) {
     			line.pop();
     			tspan.text(line.join(" "));
     			line = [word];
     			tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
     		  }
     		}
     	  });
     	}//wrap

     }//RadarChart
     RadarChart(".radarChart", data, radarChartOptions);

      // dont touch
         }
      };
   });

angular.module('myApp')
  .directive('tcTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/title.html',
      scope: {
        text: "@"
      },

      // link: function(scope, element, attrs) {
      //   $('.menu-nav').mouseenter(function() {
      //
      //   })
      //
      //
      // }

    };
  });

angular.module('myApp')
  .controller('wakaCtrl', ["$scope", "wakaService", function($scope, wakaService) {

    wakaService.getWaka().then( function(waka) {
      $scope.waka = waka;
    });


  }]);

angular.module('myApp')
  .service('wakaService', ["$http", function($http){

  var baseUrl = 'https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=1183f7db-a10f-465e-863c-ac6518941a6f';

    this.getWaka = function() {
      return $http({
        method: 'GET',
        url: baseUrl,

      })
      .then(function (response) {
        console.log(response);
        return response.data;
      });
    };

  }]);
