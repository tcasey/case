angular.module('myApp', ['ui.router', 'sap.imageloader'])

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
 .state('nerd',{
    url: '/projects/nerd',
    templateUrl: 'html/templates/hex/hex14Content.html',
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
      scope: {},
      restrict: 'E',
      templateUrl: 'html/templates/footer.html'
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
  .controller('mainCtrl', ['$scope', 'ImageLoader', function($scope, ImageLoader) {
    
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

    // hex 1 images
  var bike_img_1 = 'web-img/portfolio/road-bike-junkie/about.png';
      ImageLoader.loadImage(bike_img_1).then(function(loadedSrc) {
      $scope.bike1 = loadedSrc;
    });
  var bike_img_2 = 'web-img/portfolio/road-bike-junkie/general.png';
      ImageLoader.loadImage(bike_img_2).then(function(loadedSrc) {
      $scope.bike2 = loadedSrc;
    });
    // hex 2 images
  var hc_img_1 = 'web-img/portfolio/h+c/how-to.png';
      ImageLoader.loadImage(hc_img_1).then(function(loadedSrc) {
      $scope.hc1 = loadedSrc;
    });
  var hc_img_2 = 'web-img/portfolio/h+c/game.png';
      ImageLoader.loadImage(hc_img_2).then(function(loadedSrc) {
      $scope.hc2 = loadedSrc;
    });
    // hex 3 images
  var ncaa_img_1 = 'web-img/portfolio/ncaa/landing.png';
      ImageLoader.loadImage(ncaa_img_1).then(function(loadedSrc) {
      $scope.ncaa1 = loadedSrc;
    });
  var ncaa_img_2 = 'web-img/portfolio/ncaa/questions.png';
      ImageLoader.loadImage(ncaa_img_2).then(function(loadedSrc) {
      $scope.ncaa2 = loadedSrc;
    });
  var ncaa_img_3 = 'web-img/portfolio/ncaa/feedback.png';
      ImageLoader.loadImage(ncaa_img_3).then(function(loadedSrc) {
      $scope.ncaa3 = loadedSrc;
    });
  var ncaa_img_4 = 'web-img/portfolio/ncaa/score.png';
      ImageLoader.loadImage(ncaa_img_4).then(function(loadedSrc) {
      $scope.ncaa4 = loadedSrc;
    });
    // hex 4 images
  var karma_img_1 = 'web-img/portfolio/karma/CTA.png';
      ImageLoader.loadImage(karma_img_1).then(function(loadedSrc) {
      $scope.karma1 = loadedSrc;
    });
  var karma_img_2 = 'web-img/portfolio/karma/simplicity.png';
      ImageLoader.loadImage(karma_img_2).then(function(loadedSrc) {
      $scope.karma2 = loadedSrc;
    });
    // hex 5 images
  var junior_img_1 = 'web-img/portfolio/junior/CTA.png';
      ImageLoader.loadImage(junior_img_1).then(function(loadedSrc) {
      $scope.junior1 = loadedSrc;
    });
  var junior_img_2 = 'web-img/portfolio/junior/about.png';
      ImageLoader.loadImage(junior_img_2).then(function(loadedSrc) {
      $scope.junior2 = loadedSrc;
    });
  var junior_img_3 = 'web-img/portfolio/junior/skills.png';
      ImageLoader.loadImage(junior_img_3).then(function(loadedSrc) {
      $scope.junior3 = loadedSrc;
    });
  var junior_img_4 = 'web-img/portfolio/junior/work.png';
      ImageLoader.loadImage(junior_img_4).then(function(loadedSrc) {
      $scope.junior4 = loadedSrc;
    });
    // hex 6 images
  var todo_img_1 = 'web-img/portfolio/todo/app.png';
      ImageLoader.loadImage(todo_img_1).then(function(loadedSrc) {
      $scope.todo1 = loadedSrc;
    });
    // hex 7 images
  var shopper_img_1 = 'web-img/portfolio/smart-shopper/shopper.png';
      ImageLoader.loadImage(shopper_img_1).then(function(loadedSrc) {
      $scope.shopper1 = loadedSrc;
    });
    // hex 8 images
  var twitter_img_1 = 'web-img/portfolio/twitter-clone/app.png';
      ImageLoader.loadImage(twitter_img_1).then(function(loadedSrc) {
      $scope.twitter1 = loadedSrc;
    });
    // hex 9 images
  var ryu_img_1 = 'web-img/portfolio/street-fighter/street.png';
      ImageLoader.loadImage(ryu_img_1).then(function(loadedSrc) {
      $scope.ryu1 = loadedSrc;
    });
  var ryu_img_2 = 'web-img/portfolio/street-fighter/pose.png';
      ImageLoader.loadImage(ryu_img_2).then(function(loadedSrc) {
      $scope.ryu2 = loadedSrc;
    });
  var ryu_img_3 = 'web-img/portfolio/street-fighter/hadouken.png';
      ImageLoader.loadImage(ryu_img_3).then(function(loadedSrc) {
      $scope.ryu3 = loadedSrc;
    });
    // hex 10 images
    var golf_img_1 = 'web-img/portfolio/golf/home.png';
        ImageLoader.loadImage(golf_img_1).then(function(loadedSrc) {
        $scope.golf1 = loadedSrc;
      });
    var golf_img_2 = 'web-img/portfolio/golf/bio.png';
        ImageLoader.loadImage(golf_img_2).then(function(loadedSrc) {
        $scope.golf2 = loadedSrc;
      });
    // hex 11 images
    var fizz_buzz_img = 'web-img/portfolio/fizz-buzz/app.png';
        ImageLoader.loadImage(fizz_buzz_img).then(function(loadedSrc) {
        $scope.imageSrc = loadedSrc;
      });
    // hex 12 images
    var dot_img = 'web-img/portfolio/dots/app.png';
        ImageLoader.loadImage(dot_img).then(function(loadedSrc) {
        $scope.dotsSrc = loadedSrc;
      });
      // hex 13 images
    var memory_img_1 = 'web-img/portfolio/memory-game/general.png';
        ImageLoader.loadImage(memory_img_1).then(function(loadedSrc) {
        $scope.memory1 = loadedSrc;
      });
    var memory_img_2 = 'web-img/portfolio/memory-game/select.png';
        ImageLoader.loadImage(memory_img_2).then(function(loadedSrc) {
        $scope.memory2 = loadedSrc;
      });
    var memory_img_3 = 'web-img/portfolio/memory-game/selected.png';
        ImageLoader.loadImage(memory_img_3).then(function(loadedSrc) {
        $scope.memory3 = loadedSrc;
      });
    var memory_img_4 = 'web-img/portfolio/memory-game/finished-game.png';
        ImageLoader.loadImage(memory_img_4).then(function(loadedSrc) {
        $scope.memory4 = loadedSrc;
      });
    // hex 14 images
    var pre_img_1 = 'web-img/portfolio/pre-course/login.png';
        ImageLoader.loadImage(pre_img_1).then(function(loadedSrc) {
        $scope.pre1 = loadedSrc;
      });
    var pre_img_2 = 'web-img/portfolio/pre-course/test.png';
        ImageLoader.loadImage(pre_img_2).then(function(loadedSrc) {
        $scope.pre2 = loadedSrc;
      });
    var pre_img_3 = 'web-img/portfolio/pre-course/assessment.png';
        ImageLoader.loadImage(pre_img_3).then(function(loadedSrc) {
        $scope.pre3 = loadedSrc;
      });
    var pre_img_4 = 'web-img/portfolio/pre-course/radar.png';
        ImageLoader.loadImage(pre_img_4).then(function(loadedSrc) {
        $scope.pre4 = loadedSrc;
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

angular.module('myApp')
  .directive('svgBike', function() {
    return {
      restrict: 'E',
      template: '<svg width="81px" height="46px" viewBox="0 0 131 76" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g transform="translate(-135.000000, -162.000000)" fill="#4B4841"><path d="M240.839587,233.308318 C229.423358,233.308318 220.133174,223.984445 220.133174,212.524128 C220.133174,203.95543 225.327505,196.584636 232.719991,193.408318 L238.47678,214.282985 C238.739982,215.229969 239.594486,215.850033 240.52711,215.850033 C240.715798,215.850033 240.90689,215.824699 241.09678,215.772826 C242.23011,215.457969 242.894725,214.280572 242.579844,213.142985 L236.788202,192.144065 C238.099404,191.882287 239.45267,191.739938 240.839587,191.739938 C252.257018,191.739938 261.546,201.063811 261.546,212.524128 C261.546,223.984445 252.257018,233.308318 240.839587,233.308318 L240.839587,233.308318 Z M200.602156,206.802414 C199.375083,205.996572 197.91245,205.52489 196.34045,205.52489 C196.261128,205.52489 196.185413,205.534541 196.106092,205.536953 L187.34111,179.946668 L225.216936,179.65835 L200.602156,206.802414 Z M159.963312,233.308318 C148.545881,233.308318 139.256899,223.984445 139.256899,212.524128 C139.256899,201.063811 148.545881,191.739938 159.963312,191.739938 C163.627706,191.739938 167.067358,192.709842 170.057523,194.393906 L158.486257,212.375747 C158.066817,213.027176 158.031963,213.855938 158.396119,214.539938 C158.760275,215.225144 159.46455,215.658223 160.23733,215.670287 L180.353642,216.014096 C178.692706,225.814477 170.19333,233.308318 159.963312,233.308318 L159.963312,233.308318 Z M180.630064,211.744826 L164.139688,211.464953 L173.535633,196.864509 C177.713211,200.517334 180.410128,205.813207 180.630064,211.744826 L180.630064,211.744826 Z M196.34045,216.935747 C195.562862,216.935747 194.850174,216.676382 194.264881,216.251747 C193.370716,215.602731 192.78422,214.554414 192.78422,213.36616 C192.78422,212.865525 192.88878,212.390223 193.075064,211.95835 C193.195248,211.678477 193.358697,211.42635 193.542578,211.189906 C194.192771,210.347874 195.198706,209.796572 196.34045,209.796572 C196.804358,209.796572 197.245431,209.89308 197.651651,210.055938 C197.652853,210.055938 197.654055,210.057144 197.655257,210.057144 C198.965257,210.584318 199.895477,211.865461 199.895477,213.36616 C199.895477,213.583303 199.869037,213.793207 199.830578,213.999493 C199.531321,215.664255 198.084312,216.935747 196.34045,216.935747 L196.34045,216.935747 Z M183.389477,181.548699 L192.046294,206.821715 C190.321661,207.965334 189.075358,209.774858 188.671541,211.88235 L184.908596,211.818414 C184.701881,204.352318 181.230982,197.689652 175.872,193.230985 L183.389477,181.548699 Z M240.839587,187.467049 C239.060872,187.467049 237.32422,187.658858 235.650064,188.014731 L229.769486,166.699747 C240.047578,165.686414 243.471606,166.703366 244.604936,167.439239 C245.250321,167.859049 245.711826,168.797588 245.869266,170.017207 C246.098817,171.795366 245.606064,173.421525 245.162587,173.911303 C244.276835,174.888445 241.969312,175.456636 239.280807,175.350477 C238.090991,175.317906 237.116303,176.223874 237.071835,177.402477 C237.026165,178.582287 237.943165,179.573906 239.117358,179.619747 C241.510211,179.712636 245.88489,179.465334 248.312596,176.786033 C249.737972,175.210541 250.453064,172.269461 250.088908,169.465906 C249.765615,166.963938 248.638294,164.971049 246.918468,163.852763 C243.810523,161.834541 237.417963,161.476255 226.802156,162.72362 C226.185615,162.796001 225.631569,163.136191 225.284239,163.652509 C224.936908,164.170033 224.83355,164.814223 224.998202,165.414985 L227.743193,175.36616 L185.882083,175.684636 L184.00722,170.212636 L192.641202,170.212636 C193.816596,170.212636 194.769651,169.256001 194.769651,168.076191 C194.769651,166.896382 193.816596,165.939747 192.641202,165.939747 L173.486358,165.939747 C172.310963,165.939747 171.357908,166.896382 171.357908,168.076191 C171.357908,169.256001 172.310963,170.212636 173.486358,170.212636 L179.506349,170.212636 L181.644413,176.454287 C181.579514,176.52908 181.508606,176.597842 181.453321,176.682287 L172.372257,190.796572 C168.713872,188.683049 164.478606,187.467049 159.963312,187.467049 C146.198697,187.467049 135,198.707811 135,212.524128 C135,226.340445 146.198697,237.581207 159.963312,237.581207 C172.522486,237.581207 182.939991,228.221144 184.669431,216.087684 L189.050119,216.162477 C190.175037,219.107176 193.014972,221.20743 196.34045,221.20743 C200.647826,221.20743 204.152376,217.689715 204.152376,213.36616 C204.152376,212.181525 203.880761,211.060826 203.410844,210.053525 L229.404128,181.387049 L231.577046,189.263303 C222.386615,192.964382 215.876275,201.992699 215.876275,212.524128 C215.876275,226.340445 227.074972,237.581207 240.839587,237.581207 C254.604202,237.581207 265.802899,226.340445 265.802899,212.524128 C265.802899,198.707811 254.604202,187.467049 240.839587,187.467049 L240.839587,187.467049z"id="bicycle"></path></g></g></svg>'
    };
  });

angular.module('myApp')
  .directive('svgDot', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="870px" height="399px" viewBox="0 0 870 399" style="enable-background:new 0 0 870 399;"xml:space="preserve"><style type="text/css">.style12-0 {fill: #6CFFC6;}.style12-1 {fill: #FF5539;}.style12-2 {fill: #226EFF;}.style12-3 {fill: #D06E00;}.style12-4 {fill: #7312B2;}.style12-5 {fill: #4D4B45;}</style><defs></defs><circle class="style12-0" cx="762" cy="135" r="75" /><ellipse class="style12-1" cx="405.5" cy="296.5" rx="82.5" ry="82.5" /><circle class="style12-2" cx="612" cy="185" r="75" /><circle class="style12-3" cx="267" cy="135" r="75" /><circle class="style12-4" cx="426" cy="75" r="75" /><ellipse class="style12-1" cx="487.8" cy="214.3" rx="29.2" ry="29.7" /><ellipse class="style12-2" cx="55.7" cy="240.5" rx="55.7" ry="55.5" /><circle class="style12-0" cx="186" cy="323" r="75" /><ellipse class="style12-5" cx="778.7" cy="310.6" rx="91.3" ry="88.4" /><circle class="style12-5" cx="236" cy="244" r="75" /><circle class="style12-3" cx="625.5" cy="270.5" r="37.5" /></svg>'
    };
  });

angular.module('myApp')
  .directive('svgFizzBuzz', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="466.4px" height="457.4px" viewBox="0 0 466.4 457.4" style="enable-background:new 0 0 466.4 457.4;"xml:space="preserve"><style type="text/css">.style11 {opacity: 0.5;fill: orange;}</style><defs></defs><g class="style11" transform="translate(0.000000,458.000000) scale(0.100000,-0.100000)"><path d="M2667.7,4560.5c-12-22,0-55,22-63c39-13,74,37,48,68C2719.7,4586.5,2680.7,4584.5,2667.7,4560.5z" /><path d="M2062.7,4499.5c-20-18-43-45-51-61c-14-28-14-30,16-58c34-32,94-49,119-33c46,29,53,131,11,165C2125.7,4538.5,2103.7,4534.5,2062.7,4499.5z" /><path d="M1717.7,4487.5c-14-7-31-25-38-40c-36-74,54-125,117-66C1852.7,4433.5,1786.7,4521.5,1717.7,4487.5z" /><path d="M3299.7,4278.5c-18-18-15-42,7-62c34-31,83,13,61,55C3355.7,4292.5,3317.7,4296.5,3299.7,4278.5z" /><path d="M1569.7,4268.5c-5-7-15-32-22-56c-9-37-9-48,5-68c19-29,35-30,63-4c27,25,29,71,5,111C1601.7,4282.5,1586.7,4287.5,1569.7,4268.5z" /><path d="M3102.7,4199.5c-11-17,4-58,26-70c40-21,55,39,17,65C3119.7,4213.5,3110.7,4214.5,3102.7,4199.5z" /><path d="M3487.7,4157.5c-50-25-29-77,32-77c32,0,70,33,62,54c-4,11-55,38-68,36C3512.7,4170.5,3501.7,4164.5,3487.7,4157.5z" /><path d="M3267.7,4100.5c-24-24-27-86-5-117c8-12,29-24,46-28c83-19,141,72,88,139C3369.7,4128.5,3298.7,4131.5,3267.7,4100.5z" /><path d="M2583.7,4065.5c-19-51,2-105,42-105c32,0,102,45,102,65c0,16-56,43-106,52C2598.7,4081.5,2588.7,4078.5,2583.7,4065.5z" /><path d="M883.7,4024.5c-9-8-16-20-16-25c0-12,37-49,49-49c16,0,41,30,41,49C957.7,4037.5,912.7,4053.5,883.7,4024.5z" /><path d="M1839.7,3993.5c-17-6-40-55-35-70c14-41,78,12,66,55C1865.7,4001.5,1861.7,4002.5,1839.7,3993.5z" /><path d="M4076.7,3930.5c-25-24-28-33-19-49c26-49,81-46,100,5c13,34,13,40-6,58C4128.7,3967.5,4109.7,3964.5,4076.7,3930.5z" /><path d="M1914.7,3883.5c-15-25,47-93,84-93c29,0,23,26-16,65C1948.7,3888.5,1923.7,3899.5,1914.7,3883.5z" /><path d="M3127.7,3860.5c-42-42-33-111,17-131c23-9,40-7,90,11c35,12,79,20,100,18c52-4,56,22,10,66C3285.7,3879.5,3166.7,3899.5,3127.7,3860.5z" /><path d="M2755.7,3824.5c-5-4-8-20-8-36c0-27-3-29-27-24c-248,50-605,24-877-65c-329-108-667-364-846-641c-28-42-40-54-51-47c-23,15-65,10-90-10c-38-29-64-33-125-17c-32,8-60,13-63,11c-18-19,132-185,167-185c12,0,22-2,22-6c0-3-15-51-34-108c-19-56-44-154-56-217s-29-126-38-141c-13-22-14-30-4-40c19-19,16-144-3-152c-21-8-45-67-45-111c0-41,11-44,38-10c22,28,32,23,32-16c0-20-9-32-35-48c-40-23-49-56-13-48c13,2,30,8,39,11c14,6,19-4,29-61c16-85,60-236,99-336c16-42,25-77,21-77c-5,0-22-12-39-26c-22-18-51-29-99-36c-94-14-108-22-122-62c-16-48,3-111,45-153c40-40,70-42,102-7c21,22,30,26,63,21c59-8,65,6,63,142l-2,116l30-60c46-89,108-171,193-255c42-41,76-77,76-81s-13-9-28-12c-29-6-52-40-52-76c0-32-23-42-83-35c-49,6-56,4-66-14c-25-46-5-137,39-177l22-19l62,67l62,67l60-3c52-2,66,2,101,26c24,17,51,27,65,25c29-4,26-22-4-26c-35-6-41-17-24-50c22-42,65-71,154-101c89-31,102-45,83-96c-7-20-10-39-7-42c2-3,24,10,48,30c60,48,101,67,146,67c33,0,45-6,70-35c56-63,56-157,0-234c-28-39-33-53-31-96c2-42-2-57-28-93c-17-24-28-49-25-58c5-13,10-13,42,1c72,30,244,185,244,220c0,8-20,40-45,70c-24,30-50,73-56,96c-12,37-11,43,6,55c24,18,116,18,140,0c18-13,19-18,7-76c-7-34-11-64-9-66s15,13,28,34c13,20,42,46,64,57c44,21,134,31,189,21c47-9,92-48,100-86c8-40,26-29,26,16c0,63,28,75,243,100c51,6,56,5,86-25c24-24,38-30,54-25c51,15,89,38,115,70c80,100,96,114,185,160c119,61,215,124,285,189c103,94,138,106,168,59c15-22,16-33,5-92c-15-84-2-132,34-132c55,0,71,90,35,193c-26,73-27,188-2,236c21,43,34,48,47,19c6-13,25-28,45-34c41-14,162-23,158-13c-2,5-108,92-177,145c-2,2,25,51,59,109c75,127,108,205,121,288c13,78,46,141,77,145c13,2,37-7,57-22c18-14,38-26,44-26c16,0,14,124-3,185c-17,63-48,124-80,153c-30,28-43,92-26,133c10,24,18,29,39,27c22-3,27-9,31-43l5-40l59,62c76,81,104,118,128,172c18,38,18,45,5,58s-20,11-60-20c-24-19-66-39-92-46c-80-20-99,2-194,241c-82,206-85,236-30,259c60,24,219,201,219,243c0,37-45,9-99-61c-18-24-40-43-48-43c-23,0-100,81-108,113c-11,43,2,73,55,132c47,52,70,98,56,112c-4,4-20-8-36-26c-27-28-35-32-75-29l-46,3l-2-110c-4-184-38-202-122-65c-40,65-85,110-112,110c-26,0-63,32-63,55s-44,28-115,14c-68-13-79-11-70,14c7,17,41,32,95,42c76,15,165,90,140,120c-17,20-96,35-133,24c-16-5-41-19-54-31c-21-19-27-21-56-11c-17,6-52,14-77,18s-73,14-107,22c-52,13-63,19-63,36c0,36-40,66-146,107C2847.7,3821.5,2768.7,3838.5,2755.7,3824.5z M1660.7,3218.5c-17-30-24-33-78-38l-60-5l-3-117l-3-118h61c59,0,61-1,54-22c-11-38-23-47-67-50l-42-3l-5-155l-5-155l-32-3l-33-3v344c0,189,3,347,7,350c3,4,55,7,116,7h109L1660.7,3218.5z M2105.7,2897.5l2-348l-32,3l-33,3l-3,348l-2,348l32-3l33-3L2105.7,2897.5z M2672.7,2943.5c-58-169-105-310-105-315c0-4,47-9,105-10l105-3l-20-32l-20-33h-140c-77,0-140,1-140,3s45,137,100,302c55,164,100,304,100,311c0,10-16,14-60,14c-56,0-60,2-75,30c-8,16-15,31-15,35c0,3,61,5,135,5h135L2672.7,2943.5z M3272.7,2943.5c-58-169-105-310-105-315c0-4,47-9,105-10l105-3l-20-32l-20-33h-140c-77,0-140,1-140,3s45,137,100,302c55,164,100,304,100,311c0,10-16,14-60,14c-56,0-60,2-75,30c-8,16-15,31-15,35c0,3,61,5,135,5h135L3272.7,2943.5z M1538.7,1851.5l29-29v-131c0-104-3-133-16-145c-14-14-14-18,0-38c12-17,16-50,16-146c0-123,0-124-29-153c-28-27-34-29-110-29h-81v350v350h81C1504.7,1880.5,1510.7,1878.5,1538.7,1851.5zM2019.7,1569.5c3-284,5-313,21-323c12-8,22-8,35,0c15,10,17,39,20,323l2,311h35h35v-322c-1-340-1-342-47-366c-49-26-152-6-167,33c-3,9-6,160-6,336v319h35h35L2019.7,1569.5z M2702.7,1573.5c-58-169-105-310-105-315c0-4,47-9,105-10l105-3l-20-32l-20-33h-140c-77,0-140,1-140,3s45,137,100,302c55,164,100,304,100,311c0,10-16,14-60,14c-56,0-60,2-75,30c-8,16-15,31-15,35c0,3,61,5,135,5h135L2702.7,1573.5z M3302.7,1573.5c-58-169-105-310-105-315c0-4,47-9,105-10l105-3l-20-32l-20-33h-140c-77,0-140,1-140,3s45,137,100,302c55,164,100,304,100,311c0,10-16,14-60,14c-56,0-60,2-75,30c-8,16-15,31-15,35c0,3,61,5,135,5h135L3302.7,1573.5zM1065.7,858.5c15-15,16-55,0-64c-14-9-48,31-48,57C1017.7,873.5,1046.7,877.5,1065.7,858.5z"/><path d="M1417.7,1685.5v-125h28c46,0,52,15,52,125s-6,125-52,125h-28V1685.5z" /><path d="M1417.7,1375.5v-125h28c45,0,52,15,52,121s-10,129-56,129h-24V1375.5z" /><path d="M3507.7,3764.5c25-34,54-54,78-54c46,0-4,52-63,66C3494.7,3783.5,3493.7,3782.5,3507.7,3764.5z" /><path d="M3843.7,3734.5c-9-8-16-21-16-28c0-15,32-46,48-46c15,0,42,29,42,45c0,7-7,21-16,29c-8,9-22,16-29,16S3851.7,3743.5,3843.7,3734.5z" /><path d="M1252.7,3732.5c-72-24-96-87-52-138c43-49,148-29,163,32c9,35-19,92-52,104C1283.7,3741.5,1281.7,3741.5,1252.7,3732.5z" /><path d="M3697.7,3660.5c-23-46-19-80,10-80c26,0,42,33,38,77C3741.7,3708.5,3722.7,3709.5,3697.7,3660.5z" /><path d="M4122.7,3597.5c-31-27-45-100-25-136c25-48,133-68,170-31c54,54-17,190-99,190C4157.7,3620.5,4136.7,3610.5,4122.7,3597.5z" /><path d="M843.7,3518.5c-26-37-18-88,14-88c21,0,60,45,60,69C917.7,3541.5,867.7,3553.5,843.7,3518.5z" /><path d="M381.7,3439.5c-20-22-13-43,19-63c39-25,78,44,41,71C416.7,3465.5,403.7,3463.5,381.7,3439.5z" /><path d="M3988.7,3304.5c-35-44-21-71,27-53c17,6,22,16,22,44C4037.7,3338.5,4017.7,3341.5,3988.7,3304.5z" /><path d="M627.7,3190.5c0-37,4-50,13-47c7,2,12,21,12,47s-5,45-12,48C631.7,3240.5,627.7,3227.5,627.7,3190.5z" /><path d="M284.7,3085.5c-20-43-22-81-4-88c31-12,58,36,50,91C323.7,3130.5,305.7,3129.5,284.7,3085.5z" /><path d="M3975.7,2949.5c-22-12-24-55-4-62c17-7,66,29,66,48c0,7-7,16-16,19C4000.7,2962.5,3995.7,2961.5,3975.7,2949.5z" /><path d="M4475.7,2949.5c-23-13-24-71-1-109c38-65,101-64,95,1C4564.7,2906.5,4509.7,2969.5,4475.7,2949.5z" /><path d="M446.7,2831.5c-11-19-33-34-65-46c-27-9-62-22-77-27c-41-16-51-41-37-99c13-52,4-79-27-79c-20,0-26-25-13-49c16-31,38-26,90,23c34,31,54,43,68,40c20-6,32,17,32,64c0,39,29,81,66,97c32,13,35,18,29,42c-6,27-32,63-44,63C465.7,2860.5,455.7,2847.5,446.7,2831.5z"/><path d="M4585.7,2515.5c-9-21-8-28,7-45c10-11,23-20,30-20s20,9,30,20c25,28,7,70-30,70C4605.7,2540.5,4593.7,2532.5,4585.7,2515.5z" /><path d="M4309.7,2447.5c-8-10-6-21,8-45c18-30,50-44,50-23c0,5,3,16,6,24c5,15-27,57-45,57C4323.7,2460.5,4315.7,2454.5,4309.7,2447.5z" /><path d="M287.7,2425.5c0-28,29-73,51-80c40-13,47,37,11,78C330.7,2445.5,287.7,2446.5,287.7,2425.5z" /><path d="M4257.7,2322.5c0-16,66-71,104-87c45-19,65-9,45,23C4381.7,2298.5,4257.7,2351.5,4257.7,2322.5z" /><path d="M4549.7,2278.5c-18-18-15-42,7-62c34-31,83,13,61,55C4605.7,2292.5,4567.7,2296.5,4549.7,2278.5z" /><path d="M13.7,2251.5c-39-43,12-106,70-86c43,16,52,39,28,72C85.7,2272.5,38.7,2279.5,13.7,2251.5z" /><path d="M521.7,2174.5c-21-7-47-23-57-35c-17-21-17-23-1-32c20-12,115,15,134,38C623.7,2177.5,579.7,2194.5,521.7,2174.5z" /><path d="M369.7,2128.5c-9-33-9-33-65-30c-52,3-57,2-57-16c0-28,46-62,85-62c54,0,101,72,75,119C392.7,2169.5,379.7,2165.5,369.7,2128.5z" /><path d="M4373.7,1894.5c-9-24-8-31,10-48c19-20,50-21,57-2c7,17-29,66-48,66C4385.7,1910.5,4376.7,1903.5,4373.7,1894.5z" /><path d="M505.7,1813.5c-41-11-8-63,40-63c25,0,59,37,46,50C579.7,1812.5,528.7,1820.5,505.7,1813.5z" /><path d="M4568.7,1764.5c-26-33-26-36-3-65c35-43,75,5,53,64C4605.7,1797.5,4594.7,1797.5,4568.7,1764.5z" /><path d="M4407.7,1748.5c-11-18-20-35-20-38s-4-22-9-42c-7-28-6-38,3-38c16,0,66,90,66,118C4447.7,1783.5,4428.7,1783.5,4407.7,1748.5z" /><path d="M372.7,1658.5c-81-65-115-101-115-121c0-30,17-53,50-67c28-11,34-11,58,7c16,11,34,40,44,70c21,61,34,153,22,152C426.7,1699.5,400.7,1681.5,372.7,1658.5z" /><path d="M646.7,1583.5c-57-62-73-83-61-83c17,0,122,90,122,106C707.7,1631.5,682.7,1621.5,646.7,1583.5z" /><path d="M4041.7,1585.5c-11-27,16-45,67-45c60,0,70,14,27,40C4096.7,1604.5,4049.7,1606.5,4041.7,1585.5z" /><path d="M4403.7,1558.5c-32-46-9-81,33-51c15,10,21,23,19,41C4451.7,1582.5,4424.7,1588.5,4403.7,1558.5z" /><path d="M4188.7,1454.5c-26-33-27-60-3-73c25-13,62,6,82,42c14,26,14,29-4,43C4234.7,1487.5,4211.7,1483.5,4188.7,1454.5z" /><path d="M3856.7,975.5c-25-57-18-68,21-29c35,35,42,67,17,72C3881.7,1021.5,3871.7,1009.5,3856.7,975.5z" /><path d="M4050.7,913.5c-21-8-15-22,20-43c38-24,77-26,77-5C4147.7,890.5,4078.7,924.5,4050.7,913.5z" /><path d="M549.7,778.5c-18-18-15-42,7-62c34-31,83,13,61,55C605.7,792.5,567.7,796.5,549.7,778.5z" /><path d="M790.7,768.5c-49-55-56-106-18-143c31-31,66-32,102-1c22,19,28,32,28,65C902.7,768.5,834.7,816.5,790.7,768.5z" /><path d="M1174.7,715.5c-40-27-46-45-22-65c21-18,51-3,69,34C1251.7,747.5,1236.7,757.5,1174.7,715.5z" /><path d="M3508.7,653.5c-53-59-64-81-33-64c33,18,102,88,102,104C3577.7,722.5,3560.7,712.5,3508.7,653.5z" /><path d="M3230.7,638.5c7-52,37-93,68-93c16,0,25,7,29,25c14,53-27,110-79,110C3226.7,680.5,3225.7,677.5,3230.7,638.5z" /><path d="M1452.7,561.5c-68-24-105-44-137-75c-52-47-26-91,35-60c79,41,182,128,171,145C1514.7,583.5,1510.7,582.5,1452.7,561.5z" /><path d="M1728.7,571.5c-11-7-10-11,7-20c28-15,67-14,81,3c9,11,8,15-5,20C1788.7,583.5,1744.7,581.5,1728.7,571.5z" /><path d="M1016.7,404.5c-10-12-8-20,8-42c26-35,49-39,56-11C1092.7,395.5,1042.7,435.5,1016.7,404.5z" /><path d="M2321.7,405.5c-4-8,2-27,11-42c25-38,96-113,107-113s38,62,38,88c0,15-6,18-29,14c-21-3-34,2-48,18c-10,12-30,28-46,36C2330.7,419.5,2326.7,419.5,2321.7,405.5z" /><path d="M1580.7,394.5c-10-27,14-64,42-64c20,0,25,5,25,23C1647.7,395.5,1593.7,428.5,1580.7,394.5z" /><path d="M2747.7,342.5c0-32,16-52,42-52s33,26,14,55C2780.7,380.5,2747.7,378.5,2747.7,342.5z" /><path d="M3432.7,351.5c-16-50,53-105,82-66c17,24,17,28-8,59C3482.7,375.5,3441.7,379.5,3432.7,351.5z" /><path d="M1193.7,344.5c-22-22-20-41,9-69c26-27,54-32,73-13c18,18,15,33-14,67C1232.7,364.5,1216.7,367.5,1193.7,344.5z" /><path d="M3022.7,281.5c-19-8-19-8,2-19c26-15,63-15,83-2C3140.7,282.5,3069.7,299.5,3022.7,281.5z" /><path d="M2359.7,200.5c-12-5-25-16-28-24c-8-22,14-56,37-56c19,0,20-5,17-57c-3-56-2-58,22-58c35,0,52,37,47,109c-3,47-8,63-26,77C2402.7,212.5,2393.7,213.5,2359.7,200.5z" /><path d="M2099.7,154.5c-26-18-29-49-6-58c18-7,44,5,64,30c12,14,12,18-5,30C2128.7,173.5,2126.7,173.5,2099.7,154.5z" /><path d="M3558.7,154.5c-37-26-21-74,26-74c29,0,48,33,34,59C3603.7,166.5,3583.7,171.5,3558.7,154.5z" /><path d="M3047.7,105.5c-16-19-9-49,12-53s72,44,63,58C3113.7,125.5,3061.7,122.5,3047.7,105.5z" /></g></svg>'
    };
  });

angular.module('myApp')
  .directive('svgHc', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="3095.7px" height="1076.5px" viewBox="0 0 3095.7 1076.5" style="enable-background:new 0 0 3095.7 1076.5;"xml:space="preserve"><style type="text/css">.style2C {fill: #0A1E60;}.style2H {fill: #FF2222;}.style2 fill: #4B4841;}</style><defs></defs><g transform="translate(0.000000,1685.000000) scale(0.100000,-0.100000)"><path class="style2C" d="M28045,16839.4c-1033-68-1975-370-2753-882c-494-326-928-747-1283-1245c-261-366-509-854-668-1314c-312-907-403-2021-250-3063c150-1028,529-1904,1127-2602c115-136,375-394,507-504c760-637,1703-1008,2855-1126c251-25,1003-25,1310,0c728,61,1347,188,1821,372c113,44,213,88,227,100c3,2-226,889-264,1023l-15,52l-48-25c-138-70-436-171-686-234c-880-220-1868-235-2655-41c-310,77-577,176-844,313c-354,182-611,371-881,649c-643,658-1005,1555-1085,2688c-22,312-11,787,26,1115c98,882,395,1647,870,2240c120,149,372,400,526,523c564,448,1247,716,2060,807c318,36,808,38,1138,5c543-55,1032-176,1440-359l110-49l20,67c11,36,85,283,164,549l143,483l-59,30c-369,186-1001,343-1628,403C28914,16849.4,28362,16860.4,28045,16839.4z" /><path class="style2H" d="M0,11455.4v-5225h675h675v2450v2450h2525h2525v-2450v-2450h685h685v5225v5225h-685h-685v-2185v-2185H3875H1350v2185v2185H675H0V11455.4z" /><path class="style2" d="M15000,13430.4v-1450h500h500v1450v1450h-500h-500V13430.4z" /><path class="style2" d="M11810,11160.4v-500h1450h1450v500v500h-1450h-1450V11160.4z" /><path class="style2" d="M15007,11653.4c-4-3-7-228-7-500v-493h500h500v500v500h-493C15235,11660.4,15010,11657.4,15007,11653.4z" /><path class="style2" d="M16357,11653.4c-4-3-7-228-7-500v-493h1455h1455l-2,498l-3,497l-1446,3C17014,11659.4,16360,11657.4,16357,11653.4z" /><path class="style2" d="M15005,10268.4c-3-7-4-661-3-1453l3-1440l498-3l497-2v1455v1455h-495C15118,10280.4,15008,10277.4,15005,10268.4z" /></g></svg>'
    };
  });

angular.module('myApp')
  .directive('svgImac', function() {
    return {
      restrict: 'E',
      template: '<svg id="Layer_1" x="0px" y="0px" viewBox="0 0 620 338" enable-background="new 0 0 620 338" xml:space="preserve"><g><g id="screen-outside"><g><path fill="#313742" d="M458.2 80.5H181.8c-6.5 0-11.8 5.3-11.8 11.8V251h300V92.3C470 85.8 464.7 80.5 458.2 80.5z"></path></g></g><g id="camera"><g><circle fill="#464B54" cx="320" cy="87.2" r="2.8"></circle></g></g><g id="screen-main"><g><rect x="183" y="93.1" fill="#444" width="274" height="144.1"></rect></g></g><g id=""><g id="screen-background"><rect x="183" y="105.1" fill="#FFFFFF" width="274" height="132.1"></rect><image x="130" y="93.1" width="274" height="144.2" transform="scale(1.2,1)" /><!--  xlink:href="../../web-img/golf.jpg"--></g></g><g id="screen-bottom"><g><path fill="#DCDFE2" d="M170 245.4V266c0 6.5 5.3 11.8 11.8 11.8h276.3c6.5 0 11.8-5.3 11.8-11.8v-20.5H170z"></path></g></g><g id="stand"><g><path fill="#DCDFE2" d="M355.3 303.4c-0.7-3.7-4-34.2-4-34.2h-62.7c0 0-3.3 30.5-4 34.2c-1.6 8.6-4.6 9.6-4.6 9.6h79.7 C359.9 312.9 356.9 312 355.3 303.4z"></path></g></g><g id="bottom-button"><g><circle fill="#313742" cx="320" cy="263.2" r="5.8"></circle></g></g><g id="stand-bottom"><g><rect x="267.9" y="311" fill="#D1D6DA" width="105" height="5.1"></rect></g></g></g><g></g></svg>'
    };
  });

angular.module('myApp')
  .directive('svgJunior', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="160.9px" height="411px" viewBox="0 0 160.9 411" style="enable-background:new 0 0 160.9 411;"xml:space="preserve"><style type="text/css">.style5 {fill: #4B4841;}</style><defs></defs><path transform="translate(0.000000,701.000000) scale(0.100000,-0.100000)" class="style5" d="M850,7006.7c-143-14-404-102-534-181c-180-110-291-287-311-496c-8-78,5-179,36-287l20-68l62,60c95,90,190,145,290,166c25,6,27,4,27-24v-31l31,23c28,21,42,23,172,24c155,2,224,17,339,75c74,37,177,134,230,215c22,35,43,64,45,64c13,0,145-109,179-148c46-53,84-121,84-152c0-11,4-20,9-20c16,0,36,126,35,225c-1,162-54,264-183,349c-65,44-71,50-71,82c0,19,7,50,15,69c14,34,13,35-6,25c-11-6-25-20-32-30c-16-27-22-25-57,13l-30,32l6-32c8-39,5-40-39-10C1096,6997.7,982,7018.7,850,7006.7z M215,5980.7c-32-8-147-33-182-39c-32-6-33-9-33-54c0-36,6-54,28-81c17-21,43-83,67-155c32-101,44-126,77-157c48-47,118-68,225-69c115,0,156,13,219,73c53,50,124,170,124,208c0,15,10,18,69,18h69l21-57c63-174,174-249,356-239c59,3,94,11,126,27c88,45,113,84,155,235c17,63,35,104,51,120c20,20,24,33,21,72l-3,48l-90,23c-54,14-134,26-200,30c-95,5-130,2-252-22l-142-28l-18,21c-20,24-26,25-105,23c-44-1-62-6-77-22l-19-21l-103,22C500,5977.7,264,5992.7,215,5980.7z M875,5940.7c10-10,14-26,11-43c-3-14-8-50-11-79c-7-57-23-72-72-72c-45,0-52,12-63,95c-12,93-7,103,58,108c26,2,50,4,54,5S866,5949.7,875,5940.7z M491,5937.7c105-18,142-32,181-71c46-45,47-67,13-165c-54-152-135-223-265-233c-150-10-231,39-270,165c-12,37-24,100-27,138c-5,66-4,73,21,103c30,35,72,50,176,62C414,5947.7,429,5947.7,491,5937.7z M1375,5924.7c46-9,68-19,94-45c34-34,34-34,28-106c-11-145-58-245-133-283c-30-15-60-19-134-19c-108,0-149,16-213,81c-47,49-100,172-101,237c-1,44,3,52,36,82C1025,5938.7,1187,5958.7,1375,5924.7z M648,4527.7c-40-4-64-13-80-28l-22-22l31-43c47-67,103-173,103-195c0-31-15.3-47.1-31-79c-8.5-17.4-15.7-36.5-31.1-145.5c-6.7-47.5-4.7-1.8-20.8-172.6c-8.2-87.2-8-106.5-11-149c-1.5-21.1-2.9-36.6-4.8-56.6c-5.9-64.5-8.9-96.8-10.6-112.7c-7.9-75.3-10-66.5-19.4-151c-7.4-65.9-11-98.8-13-122.3c-2-24.1-2.5-37.9-6.5-57.4c-1.8-8.6-3.8-16.3-4.6-28.7c-0.8-11.9,0.4-14.8-1.5-24.7c-1.8-9.6-3.9-12.1-3.1-17.9c1.2-8.5,7.4-14.3,11.1-17.6c19.5-17.6,29.3-26.4,43.6-36.9c16.9-12.5,15.8-14.6,37.9-33.5c20.6-17.7,36.4-27.7,66.7-49.1c47.6-33.7,87.8-60.3,99.1-70.4c3.6-3.2,6.1-4.9,11.1-8.3c9-6.1,11.4-6.4,12.7-6.4c4.8-0.1,7.5,3.1,14.2,8.3c8.5,6.6,11.5,7.2,18.5,12c36.7,25.3,197.7,176.5,212.1,188.9c0.3,0.3,5.2,4.6,10.5,11.4c4.2,5.6,6.4,8.4,7.1,12.7c0.9,5.1-1.1,6.7-1.9,15.7c-0.5,6.1-0.1,10.4,0,12c2.1,42-20.3,100.5-20.3,100.5c-17.9,46.7-14.3,131.6-25,235c-6,58-24,220-41,360c-29,245-32,257-65,316c-19,33-34,72-34,86s25,74,56,133l57,109l-23,18c-19,15-40,18-144,17C760,4534.7,679,4530.7,648,4527.7z"/></svg>'
    };
  });

angular.module('myApp')
  .directive('svgKarma', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="144px" height="216px" viewBox="0 0 144 216" style="enable-background:new 0 0 144 216;"xml:space="preserve"><style type="text/css">.style4 {fill: #f15a29;}</style><defs></defs><path class="style4" d="M126.1,212.9c4.1,4.1,10.7,4.1,14.8,0c4.1-4.1,4.1-10.7,0-14.8l-28.6-28.6l18.1-18.1c8.4-8.4,13.6-20,13.6-32.9C144,92.8,123.2,72,97.5,72S51,92.8,51,118.5c0,12.8,5.2,24.5,13.6,32.9l0,0l18.1,18.1l-18.1,18.1c-4.6,4.6-11,7.5-18.1,7.5c-14.1,0-25.6-11.5-25.6-25.6v-159C20.9,4.7,16.2,0,10.5,0C4.7,0,0,4.7,0,10.5v159C0,195.2,20.8,216,46.5,216c12.8,0,24.5-5.2,32.9-13.6l18.1-18.1L126.1,212.9z M79.4,136.6c-4.6-4.6-7.5-11-7.5-18.1c0-14.1,11.5-25.6,25.6-25.6s25.6,11.5,25.6,25.6c0,7.1-2.9,13.5-7.5,18.1l0,0l-18.1,18.1L79.4,136.6z"/></svg>'
    };
  });

angular.module('myApp')
  .directive('svgMemory', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="132px" height="124.6px" viewBox="0 0 132 124.6" style="enable-background:new 0 0 132 124.6;"xml:space="preserve"><style type="text/css">.style13B3, .style13B2 {fill: #87A9B2;}.style13 {fill: #DDDDDD;}</style><defs></defs><path id="banana_3_" class="style13B3" d="M41.6,81.2L37,77.7c-0.7-0.6-1.9-0.6-2.6,0c-0.7,0.6-0.7,1.5,0,2l4.1,3.1V84c0,2.6-0.7,5.2-2,7.6c-1.3,2.4-3.2,4.6-5.6,6.4c-2.4,1.9-5.3,3.3-8.4,4.3c-3.2,1-6.5,1.5-9.9,1.5c-3.4,0-6.8-0.5-9.9-1.5c-0.7-0.2-1.6-0.1-2.1,0.4c-0.5,0.4-0.6,1.1-0.3,1.6l2.9,4c0.1,0.1,0.2,0.2,0.3,0.3c1.2,0.9,2.5,1.7,3.9,2.4l1.2,1.9c0,0,0,0,0,0.1l2.3,3.5c0.1,0.1,0.2,0.3,0.3,0.4c3.4,2.6,7,4,10.6,4c3.9,0,7.8-0.6,11.4-1.7c3.6-1.1,6.9-2.8,9.6-4.9c2.8-2.1,4.9-4.6,6.4-7.4c1.5-2.8,2.3-5.7,2.3-8.7c0-3-0.8-5.9-2.3-8.7C47.7,86.8,43.2,82.2,41.6,81.2z M5.7,106.1c2.2,0.4,4.5,0.6,6.8,0.6c3.9,0,7.8-0.6,11.4-1.7c3.6-1.1,6.9-2.8,9.6-4.9c1.1-0.8,2-1.7,2.9-2.6c0,0,0,0.1-0.1,0.1c-1.4,2.6-3.5,5-6.1,7c-2.6,2-5.7,3.6-9.2,4.7c-1.8,0.6-3.8,1-5.7,1.3c-1.1-0.2-2.1-0.4-3.1-0.7c-2.2-0.7-4.2-1.7-6-3L5.7,106.1z M47.8,98.2c0,2.6-0.7,5.2-2,7.6c-1.3,2.4-3.2,4.6-5.6,6.4c-2.4,1.9-5.3,3.3-8.4,4.3c-3.2,1-6.5,1.5-9.9,1.5c-2.5,0-5.1-1-7.8-3l-0.9-1.4c0.7-0.1,1.5-0.1,2.2-0.2c0,0,0,0,0,0c0.2,0,0.4,0,0.6-0.1c2.2-0.3,4.4-0.8,6.5-1.5c3.9-1.2,7.4-3,10.4-5.3c3-2.3,5.3-5,6.9-7.9c1.6-3,2.4-6.1,2.4-9.4v-3.2c1.4,1.5,2.9,3.2,3.6,4.5C47.1,93,47.8,95.6,47.8,98.2z" /><path id="lemon_1_" class="style13" d="M53.5,16.6c-0.9-2-2.1-3.8-3.7-5.4c-1.6-1.6-3.6-2.9-5.7-3.8c-2.1-0.9-4.4-1.3-6.7-1.3s-4.6,0.4-6.7,1.3c-2.1,0.9-4.1,2.2-5.7,3.8c-1.6,1.6-2.8,3.4-3.7,5.4L21,16.8l-8.5-8.5c-0.6-0.6-1.5-0.6-2,0c-3.2,3.2-5,7.5-5,12.1c0,4.6,1.8,8.9,5,12.1c2.8,2.8,6.5,4.5,10.4,4.9c0.1,0,0.2,0,0.3,0c0,0,0,0,0.1,0c0.4,0,0.9,0.1,1.3,0.1c0,0,0,0,0,0c2.6,0,5.1-0.6,7.3-1.6c0.2,0.1,0.5,0.2,0.7,0.3c2.1,0.9,4.4,1.3,6.7,1.3s4.6-0.4,6.7-1.3c2.1-0.9,4.1-2.2,5.7-3.8c1.6-1.6,2.8-3.4,3.7-5.4l4.5-4.2c0.3-0.3,0.5-0.7,0.5-1c0-0.4-0.2-0.8-0.5-1L53.5,16.6z M8.6,23.2h3.7c0.8,0,1.4-0.6,1.4-1.4s-0.6-1.4-1.4-1.4H8.3c0-3.3,1.1-6.5,3.2-9l8.4,8.4c0,0,0,0,0,0l11.7,11.7l0,0c-0.2,0.1-0.4,0.3-0.6,0.4c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.3,0.2-0.5,0.3c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.3,0.2-0.5,0.3c0,0,0,0-0.1,0c-0.2,0.1-0.4,0.2-0.6,0.3c0,0,0,0,0,0c-2,1.1-4.3,1.6-6.6,1.6v-3.9c0-0.8-0.6-1.4-1.4-1.4c-0.8,0-1.4,0.6-1.4,1.4v3.6c-2.3-0.5-4.4-1.5-6.2-2.9l3.3-3.3c0.6-0.6,0.6-1.5,0-2c-0.6-0.6-1.5-0.6-2,0l-3.3,3.3C10.1,27.6,9.1,25.5,8.6,23.2z M51.3,25.1c-0.2,0.1-0.3,0.3-0.4,0.5c-0.7,1.8-1.8,3.4-3.2,4.8c-1.4,1.4-3,2.4-4.8,3.2c-1.8,0.7-3.7,1.1-5.6,1.1c-1.5,0-2.9-0.2-4.3-0.6c0,0,0.1-0.1,0.1-0.1c0.2-0.2,0.4-0.3,0.7-0.5c0.1-0.1,0.1-0.1,0.2-0.2c0.3-0.2,0.5-0.5,0.8-0.7c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.2-0.4,0.2-0.7l0,0l0,0c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0,0,0,0c-0.1-0.3-0.2-0.5-0.4-0.7L23.1,18.8l0.4-0.3c0.2-0.1,0.3-0.3,0.4-0.5c0.7-1.8,1.8-3.4,3.2-4.8c1.4-1.4,3-2.4,4.8-3.2c1.8-0.7,3.7-1.1,5.6-1.1s3.8,0.4,5.6,1.1c1.8,0.7,3.4,1.8,4.8,3.2c1.4,1.4,2.5,3,3.2,4.8c0.1,0.2,0.2,0.4,0.4,0.5l3.6,3.3L51.3,25.1z" /><path id="grape_1_" class="style13" d="M86.9,99.6c0,3.9,3,7.1,6.9,7.9c0,0.2,0,0.4,0,0.6c0,3.9,3,7.1,6.9,7.9c0,0.2,0,0.4,0,0.6c0,4.4,3.9,8,8.7,8c4.8,0,8.7-3.6,8.7-8c0-0.2,0-0.4,0-0.6c3.9-0.8,6.9-4,6.9-7.9c0-0.2,0-0.4,0-0.6c3.9-0.8,6.9-4,6.9-7.9c0-3.9-3-7.1-6.9-7.9c0-0.2,0-0.4,0-0.6c0-4.4-3.9-8-8.7-8c-1.9,0-3.6,0.6-5.1,1.5v-6.2c0-0.6,0.1-1.2,0.4-1.8c0.3-0.6,0.6-1.1,1.1-1.5c0.5-0.4,1-0.8,1.6-1c1.2-0.5,2.6-0.5,3.9,0c0.6,0.2,1.2,0.6,1.6,1c0.4,0.3,0.7,0.7,0.9,1.2c-0.2,0.4-0.6,0.8-0.9,1.2c-0.5,0.4-1,0.8-1.6,1c-0.9,0.4-1.4,1.3-1,2.2c0.4,0.9,1.5,1.3,2.4,0.9c1.1-0.4,2-1,2.8-1.7c0.8-0.8,1.5-1.6,1.9-2.6c0.1-0.2,0.1-0.4,0.1-0.6l0-0.6c0-0.2,0-0.4-0.1-0.7c-0.4-1-1.1-1.9-1.9-2.6c-0.8-0.8-1.8-1.3-2.8-1.7c-2.1-0.8-4.6-0.8-6.7,0c-1.1,0.4-2,1-2.8,1.7c-0.8,0.8-1.5,1.6-1.9,2.6c-0.4,1-0.7,2-0.7,3.1v6.2c-1.4-0.9-3.2-1.5-5.1-1.5c-4.8,0-8.7,3.6-8.7,8c0,0.2,0,0.4,0,0.6C89.8,92.5,86.9,95.8,86.9,99.6z M97.4,108.1c0-0.2,0-0.4,0-0.6c0.7-0.1,1.4-0.4,2-0.7c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.2-0.3c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0.1,0.2,0.1c0.6,0.3,1.3,0.5,2,0.7c0,0.2,0,0.4,0,0.6c0,0.5-0.1,1.1-0.3,1.6c0,0,0,0,0,0c-0.1,0.3-0.3,0.6-0.5,0.9c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0-0.1,0.1c-0.8,0.5-1.7,0.8-2.7,0.9c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0C99.7,112.7,97.4,110.6,97.4,108.1z M106.5,98.3c0.1-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.2-0.3c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0.1,0.2,0.1c0.6,0.3,1.3,0.5,2,0.7c0,0.2,0,0.4,0,0.6c0,0.5-0.1,1.1-0.3,1.6c0,0,0,0,0,0c-0.1,0.3-0.3,0.6-0.5,0.9c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0-0.1,0.1c-0.8,0.5-1.7,0.8-2.7,0.9c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c-1-0.1-1.9-0.4-2.7-0.9c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0,0c-0.2-0.3-0.4-0.6-0.5-0.9c0,0,0,0,0,0c-0.2-0.5-0.3-1-0.3-1.6c0-0.2,0-0.4,0-0.6c0.7-0.1,1.4-0.4,2-0.7C106.4,98.3,106.5,98.3,106.5,98.3z M109.4,121.2c-2.8,0-5.1-2.1-5.1-4.7c0-0.2,0-0.4,0-0.6c0.7-0.1,1.4-0.4,2-0.7c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.2-0.3c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0.1,0.2,0.1c0.6,0.3,1.3,0.5,2,0.7c0,0.2,0,0.4,0,0.6C114.4,119.1,112.1,121.2,109.4,121.2z M116.2,112.7c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c-1-0.1-1.9-0.4-2.7-0.9c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0,0c-0.2-0.3-0.4-0.6-0.5-0.9c0,0,0,0,0,0c-0.2-0.5-0.3-1-0.3-1.6c0-0.2,0-0.4,0-0.6c0.7-0.1,1.4-0.4,2-0.7c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.2-0.3c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0.1,0.2,0.1c0.6,0.3,1.3,0.5,2,0.7c0,0.2,0,0.4,0,0.6C121.3,110.6,119,112.7,116.2,112.7z M128.2,99.6c0,2.6-2.3,4.7-5.1,4.7c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c-1-0.1-1.9-0.4-2.7-0.9c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0,0c-0.2-0.3-0.4-0.6-0.5-0.9c0,0,0,0,0,0c-0.2-0.5-0.3-1-0.3-1.6c0-0.2,0-0.4,0-0.6c0.3-0.1,0.6-0.1,0.9-0.2c0,0,0,0,0.1,0c0.3-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1-0.1,0.2-0.1c0.2-0.1,0.4-0.2,0.6-0.3c0.1,0,0.2-0.1,0.2-0.1c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.3-0.2,0.4-0.4c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.2,0.3-0.3,0.4-0.5c0-0.1,0.1-0.1,0.1-0.2c0.2-0.2,0.3-0.5,0.5-0.7C126.3,95.4,128.2,97.3,128.2,99.6z M116.2,86.5c2.8,0,5.1,2.1,5.1,4.7c0,0.5-0.1,1.1-0.3,1.6c0,0,0,0,0,0c-0.1,0.3-0.3,0.6-0.5,0.9c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0-0.1,0.1c-0.8,0.5-1.7,0.8-2.7,0.9c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c-1-0.1-1.9-0.4-2.7-0.9c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0,0c-0.2-0.3-0.4-0.6-0.5-0.9c0,0,0,0,0,0c-0.2-0.5-0.3-1-0.3-1.6C111.2,88.6,113.5,86.5,116.2,86.5z M102.5,86.5c2.8,0,5.1,2.1,5.1,4.7c0,0.5-0.1,1.1-0.3,1.6c0,0,0,0,0,0c-0.1,0.3-0.3,0.6-0.5,0.9c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0-0.1,0.1c-0.8,0.5-1.7,0.8-2.7,0.9c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c-1-0.1-1.9-0.4-2.7-0.9c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0,0c-0.2-0.3-0.4-0.6-0.5-0.9c0,0,0,0,0,0c-0.2-0.5-0.3-1-0.3-1.6C97.4,88.6,99.7,86.5,102.5,86.5z M94.8,95c0.1,0.2,0.3,0.5,0.5,0.7c0,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.3,0.3,0.4,0.5c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0.2,0.4,0.4c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0,0.2,0.1,0.2,0.1c0.2,0.1,0.4,0.2,0.6,0.3c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.5,0.2,0.8,0.3c0,0,0,0,0.1,0c0.3,0.1,0.6,0.2,0.9,0.2c0,0.2,0,0.4,0,0.6c0,0.5-0.1,1.1-0.3,1.6c0,0,0,0,0,0c-0.1,0.3-0.3,0.6-0.5,0.9c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0-0.1,0.1c-0.8,0.5-1.7,0.8-2.7,0.9c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c-2.8,0-5.1-2.1-5.1-4.7C90.5,97.3,92.4,95.4,94.8,95z" /><path id="banana_2_" class="style13B2" d="M122.2,3.9l-4.6-3.5c-0.7-0.6-1.9-0.6-2.6,0c-0.7,0.6-0.7,1.5,0,2l4.1,3.1v1.2c0,2.6-0.7,5.2-2,7.6c-1.3,2.4-3.2,4.6-5.6,6.4c-2.4,1.9-5.3,3.3-8.4,4.3c-3.2,1-6.5,1.5-9.9,1.5c-3.4,0-6.8-0.5-9.9-1.5c-0.7-0.2-1.6-0.1-2.1,0.4c-0.5,0.4-0.6,1.1-0.3,1.6l2.9,4c0.1,0.1,0.2,0.2,0.3,0.3c1.2,0.9,2.5,1.7,3.9,2.4l1.2,1.9c0,0,0,0,0,0.1l2.3,3.5c0.1,0.1,0.2,0.3,0.3,0.4c3.4,2.6,7,4,10.6,4c3.9,0,7.8-0.6,11.4-1.7c3.6-1.1,6.9-2.8,9.6-4.9c2.8-2.1,4.9-4.6,6.4-7.4c1.5-2.8,2.3-5.7,2.3-8.7c0-3-0.8-5.9-2.3-8.7C128.3,9.5,123.7,4.9,122.2,3.9z M86.3,28.8c2.2,0.4,4.5,0.6,6.8,0.6c3.9,0,7.8-0.6,11.4-1.7c3.6-1.1,6.9-2.8,9.6-4.9c1.1-0.8,2-1.7,2.9-2.6c0,0,0,0.1-0.1,0.1c-1.4,2.6-3.5,5-6.1,7c-2.6,2-5.7,3.6-9.2,4.7c-1.8,0.6-3.8,1-5.7,1.3c-1.1-0.2-2.1-0.4-3.1-0.7c-2.2-0.7-4.2-1.7-6-3L86.3,28.8z M128.3,20.9c0,2.6-0.7,5.2-2,7.6c-1.3,2.4-3.2,4.6-5.6,6.4c-2.4,1.9-5.3,3.3-8.4,4.3c-3.2,1-6.5,1.5-9.9,1.5c-2.5,0-5.1-1-7.8-3l-0.9-1.4c0.7-0.1,1.5-0.1,2.2-0.2c0,0,0,0,0,0c0.2,0,0.4,0,0.6-0.1c2.2-0.3,4.4-0.8,6.5-1.5c3.9-1.2,7.4-3,10.4-5.3c3-2.3,5.3-5,6.9-7.9c1.6-3,2.4-6.1,2.4-9.4V8.8c1.4,1.5,2.9,3.2,3.6,4.5C127.7,15.7,128.3,18.3,128.3,20.9z" /></svg>'
    };
  });

angular.module('myApp')
  .directive('svgNcaa', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="849.8px" height="228.8px" viewBox="0 0 849.8 228.8" style="enable-background:new 0 0 849.8 228.8;"xml:space="preserve"><style type="text/css">.style3 {fill: #095ba5;}</style><defs></defs><path transform="translate(0.000000,977.000000) scale(0.100000,-0.100000)" class="style3" d="M7728.5,9068c-67-75-444-650-444-677c0-14,67-20,299-27l224-7l-7,69c-3,38-10,108-15,155s-13,166-16,265c-4,98-10,194-14,212l-6,33L7728.5,9068z M5703.5,8948c-102-137-331-477-369-550c-13-26-21-50-17-55c5-4,123-9,264-11l256-4l-7,333c-6,334-11,409-27,409C5799.5,9070,5754.5,9015,5703.5,8948z M8497.5,7677.7c-14.6-28.9-29.2-58.6-43.8-89c-17.1-35.9-33.4-71.3-48.8-106c-9.2-0.3-18.7-0.4-28.6-0.2c-4.3,0.1-7.7,0.1-10.6,0.2c-14.8,0.4-22.3,0.6-41.7,1.7c-17.8,1-41.9,1.5-87.9,2.6c-84.1,1.9-207,2.9-215.7,3H7797l-12.4,88c-6.2,48-16.5,122-22.7,165l-11.3,77l-484.9-2l-483.9-3l-93.7-162l-93.7-163h-828.8v330l-475.7-2l-475.7-3l-108.1-164l-108.1-164l-660,6c-673.3,6-806.2,12-940,47c-97.8,26-155.5,55-257.4,130c-139,101-216.2,217-254.3,380c-13.4,60-31.9,306-36,478c-1,82-43.2-43-216.2-643c-57.7-198-106-368-109.1-378c-6.2-18-18.5-19-259.5-13c-140,4-301.7,9-359.3,12l-104,6l-110.2,261c-225.5,536-335.6,787-355.2,810c-11.3,13-145.2-443-309.9-1055l-10.3-38H308.9c-243,0-308.9,3-308.9,13c0,14,55.6,215,296.5,1072c95.8,341,177.1,632,181.2,646c5.1,24,2.1,27-25.7,33c-17.5,3-56.6,6-85.5,6c-99.9,0-99.9-2-32.9,221c31.9,107,63.8,214,72.1,239l13.4,45l386.1,3c301.7,2,389.2-1,397.4-10c5.1-7,91.6-200,192.5-428c245-558,375.8-840,390.2-840c9.3,0,233.7,742,226.5,749c-2.1,2-48.4,8-104,13s-103,11-104,13c-2.1,2,27.8,115,66.9,252l72.1,248l419,3l420.1,2l-7.2-27c-3.1-16-46.3-161-94.7-323c-90.6-306-129.7-460-117.4-460c4.1,0,26.8,35,50.4,78c98.8,182,268.7,366,449.9,491c115.3,79,296.5,165,402.6,191c105,27,383,39,860.7,40c357.3,0,409.8-4,409.8-35c0-13-130.8-478-191.5-682l-15.4-53h-293.4c-160.6,0-292.4,1-292.4,3c0,1,7.2,40,15.4,87c8.2,47,15.4,104,15.4,127c0,37-3.1,43-26.8,49c-71,18-225.5-19-331.5-78c-131.8-73-298.6-262-372.7-423c-63.8-137-85.5-228-86.5-355c0-130,15.4-183,82.4-272c39.1-51,136.9-120,197.7-140c25.7-8,159.6-13,424.2-15l386.1-4l47.4,73c26.8,40,173,260,325.3,488c326.4,488,456.1,689,456.1,706c0,11-23.7,17-112.2,26c-51.5,6-50.4,23,20.6,270l66.9,233h1296.2l17.5-300c52.5-931,75.2-1207,99.9-1204c3.1,0,37.1,50,74.1,112c37.1,62,178.1,280,312,485c133.8,205,240.9,377,238.9,381c-3.1,5-43.2,14-88.5,21c-63.8,10-82.4,16-82.4,29c1,9,29.9,120,65.9,246l64.9,230l184.3-3c101.9-1,389.2-5,639.4-8l456.1-6l4.1-32c7.8-107.4,35.2-488.5,42.2-586c45.6-634.9,66.5-931.4,110.6-1347.6C8491,7737.3,8495,7700.5,8497.5,7677.7z"/></svg>'
    };
  });

angular.module('myApp')
  .directive('svgNerd', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="41.8px" height="56.1px" viewBox="0 0 521.8 536.1" style="enable-background:new 0 0 521.8 536.1;" xml:space="preserve"><style type="text/css">.mtn0 {fill: #406BB2;}.mtn1 {fill: #203659;}.mtn2 {fill: #D9E1F0;}.mtn3 {fill: none;stroke: #406BB2;stroke-width: 0.25;stroke-miterlimit: 10;}</style><defs></defs><g><g id="XMLID_2_"><g><path class="mtn0" d="M304,115.9c72.5,139.6,145,279.1,217.6,418.7c-89,0.6-178.1,1-267.1,1.2h0v-0.5c-2.3-116.5-4.6-232.9-6.9-349.4c0-1.4-0.1-2.8-0.1-4.1L304,115.9z"></path><path class="mtn1" d="M247.5,181.6L247.5,181.6c0,1.4,0.1,2.8,0.1,4.2c2.3,116.5,4.6,233,6.9,349.4v0.5c-84.7,0.2-169.5,0.2-254.2,0c63.7-140,127.4-279.9,191.1-419.9L247.5,181.6z"></path><path class="mtn2" d="M247.5,181.6l-56.2-65.8c17.5-38.5,35.1-77.1,52.6-115.6c0.3,15.6,0.6,31.2,0.9,46.8c0.8,42.6,1.7,85.1,2.5,127.7c0,1.8,0.1,3.6,0.1,5.3C247.5,180.6,247.5,181.1,247.5,181.6z"></path></g><g><path class="mtn3" d="M247.6,185.8c2.3,116.5,4.6,233,6.9,349.4z"></path><path class="mtn3" d="M247.5,181.7c0,1.4,0.1,2.8,0.1,4.1"></path></g></g></g></svg>'
    };
  });

angular.module('myApp')
  .directive('svgStreetFighter', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="210.5px" height="189.4px" viewBox="0 0 210.5 189.4" style="enable-background:new 0 0 210.5 189.4;"xml:space="preserve"><style type="text/css">.style9 {opacity: 0.5;fill: red;}</style><defs></defs><path class="style9" d="M104.6,69.3c0,0,11.4,9.3,11.4,24.5c0,23.2-22.6,41.7-22.6,41.7c-2.2,5.3-7.5,10-12.2,14.9l18.5-10.7c3.1,19.2,9.8,33.5,18.5,45.2c-2-5.7-6-14.5-4.3-16.7c0.8-1,12,16.8,12,16.8c-0.7-3.7-1.7-7-3.5-10.7c4,4.7,7.6,9.8,10.8,15c-3.4-21.6-8-43.8-4.5-61.9c10.9-2.5,21.1-3.8,31.5-5.2c1.5-19.1,16-27.7,30-36.7c-17.6,3.2-35.2,6.6-54.3,14.3c3-9.6,6.9-17.6,9.7-24.5c22.1-10.4,43.6-15.1,65.1-20.1c-29.1,0.5-40.5,0.1-45-3.5c-2.5-1.9,3.5-8.3,3.5-8.3c-3,0.2-5.7,1.6-8.3,3.9c2.6-4.4,6.5-6.6,10.4-8.9C150.3,43,128.4,52.3,104.6,69.3L104.6,69.3z M0,141.2c16.3-6.1,69.2-25.2,69.2-46.6c0-13-30.3-14.6-30.3-37.9c0-34.1,68.5-51.7,92.9-56.8c-5.8,2.5-11.5,5.8-17.3,9.2c7.2-2.5,13.7-4.4,18.8-5.1c-1.8,0.8-3.2,1.8-4.6,2.8c11.2-2.7,18-2.6,25.2-2.8c-17.8,3.8-77.5,24.7-77.5,45.8s33,12.7,33,47.3c0,40.2-67.5,64.8-67.5,64.8s9.2-9.3,8-12.1c-1.7-3.8-19.5-1.7-28.2-1c11.1-3.5,22.4-6.9,31-13.2C34.1,141.1,16.5,142.5,0,141.2z"/></svg>'
    };
  });

angular.module('myApp')
  .directive('svgDoIt', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="255.4px" height="185.3px" viewBox="0 0 255.4 185.3" style="enable-background:new 0 0 255.4 185.3;"xml:space="preserve"><style type="text/css">.style6T {fill: #008cba;}.style6D {fill: #3bd57d;}.style6 {fill: #4B4841;stroke-width: 10;stroke-miterlimit: 10;}</style><defs></defs><g class="style6T" transform="translate(0.000000,315.000000) scale(0.100000,-0.100000)"><path d="M104.7,3132c-22-7-53-27-69-43c-57-57-44-165,26-216c26-20,46-21,275-26l247-5l5-710c5-694,5-711,26-745c68-117,240-117,308,0c21,34,21,51,26,745l5,710l245,5c159,3,252,9,265,17c48,27,69,62,72,121c5,70-16,109-73,138c-37,18-70,19-679,21C253.7,3146,136.7,3144,104.7,3132z" /><path class="style6D" d="M1638.7,3107c30-58,31-158,3-222l-21-45l112-6c172-8,255-46,335-154c74-100,111-248,111-448c0-267-68-456-202-560c-92-72-184-84-613-85h-290l-2-80c-2-71-10-103-48-193c-8-18,8-19,436-14c413,4,450,6,526,25c214,56,371,185,468,387c134,279,134,741,0,1021c-61,127-179,256-290,317c-102,57-223,84-424,94l-123,6L1638.7,3107z" /></g><path class="style6" d="M144.1,121.5L144.1,121.5c-2.7-1.7-3.6-5.3-2-8L176.8,56c1.7-2.7,5.3-3.6,8-2l0,0c2.7,1.7,3.6,5.3,2,8l-34.7,57.5C150.4,122.3,146.8,123.1,144.1,121.5z" /><path class="style6" d="M151.4,119.9L151.4,119.9c-2,2.5-5.7,3-8.2,1L113,97.2c-2.5-2-3-5.7-1-8.2l0,0c2-2.5,5.7-3,8.2-1l30.2,23.7C152.9,113.7,153.3,117.4,151.4,119.9z" /></svg>'
    };
  });

angular.module('myApp')
  .directive('svgTwitter', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="28.2px" height="12.4px" viewBox="0 0 28.2 12.4" style="enable-background:new 0 0 28.2 12.4;"xml:space="preserve"><style type="text/css">.style8 {fill: #5ea9dd;}</style><defs></defs><g class="style8"><path d="M0,1.5C0.5,1.7,1.1,1.9,1.7,2C1.1,1.6,0.6,1,0.4,0.2C0.9,0.6,1.6,0.8,2.2,1c0.5-0.6,1.3-1,2.1-1c1.6,0,2.9,1.4,2.9,3.1c0,0.2,0,0.5-0.1,0.7c2.4-0.1,4.5-1.4,6-3.3c0.2,0.5,0.4,1,0.4,1.6c0,1.1-0.5,2-1.3,2.6c0.5,0,0.9-0.2,1.3-0.4c0,0,0,0,0,0c0,1.5-1,2.8-2.3,3.1c0.2,0.1,0.5,0.1,0.8,0.1c0.2,0,0.4,0,0.5-0.1c-0.4,1.2-1.4,2.1-2.7,2.2c1,0.8,2.2,1.3,3.6,1.3c0.2,0,0.5,0,0.7,0c-1.3,0.9-2.8,1.4-4.4,1.4c-5.3,0-8.2-4.8-8.2-8.9c0-0.1,0-0.3,0-0.4C0.9,2.6,0.4,2.1,0,1.5z"/></g><g class="style8"><path d="M26.7,3.1c0,0.1,0,0.3,0,0.4c0,4.1-2.9,8.9-8.2,8.9c-1.6,0-3.1-0.5-4.4-1.4c0.2,0,0.5,0,0.7,0c1.4,0,2.6-0.5,3.6-1.3c-1.3,0-2.3-0.9-2.7-2.2c0.2,0,0.4,0.1,0.5,0.1c0.3,0,0.5,0,0.8-0.1c-1.3-0.3-2.3-1.6-2.3-3.1c0,0,0,0,0,0C15,4.6,15.5,4.7,16,4.8c-0.8-0.6-1.3-1.5-1.3-2.6c0-0.6,0.1-1.1,0.4-1.6c1.4,1.9,3.6,3.1,6,3.3c0-0.2-0.1-0.5-0.1-0.7c0-1.7,1.3-3.1,2.9-3.1c0.8,0,1.6,0.4,2.1,1c0.7-0.1,1.3-0.4,1.8-0.8C27.5,1,27.1,1.6,26.5,2c0.6-0.1,1.1-0.2,1.7-0.5C27.8,2.1,27.3,2.6,26.7,3.1z"/></g></svg>'
    };
  });
