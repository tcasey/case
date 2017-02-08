/*!
 * Image Loader Angular v1.1.0
 * (c) 2016 Sepehr Amoor Pour
 * Released under the MIT License.
 */
angular.module('sap.imageloader', [])

.factory('ImageLoader', ['$q', function($q){
	return {
		loadImages: function (images, srcProperty) {
			srcProperty = typeof srcProperty !== "undefined" ? srcProperty : "src";
			try {
				var promises = [];
				if (Array.isArray(images)) {
					for (var i = 0; i < images.length; i++) {
						var image = this.loadImage(images[i], srcProperty);
						promises.push(image);
					}
				}
				else {
					throw new TypeError("No image list provided");
				}
				return $q.all(promises);
			} catch(e) {
				console.error(e);
			};
		},

		loadImage: function(image, srcProperty) {
			srcProperty = typeof srcProperty !== "undefined" ? srcProperty : "src";
			var deferred = $q.defer();
			var imageObject = new Image();

			imageObject.onload = function() {
				if (typeof image === "object") {
					image[srcProperty] = imageObject.src;
				}
				else if (typeof image === "string") {
					image = imageObject.src;
				}
				deferred.resolve(image);
			};

			try {
				if (typeof image === "object") {
					imageObject.src = image[srcProperty];
				}
				else if (typeof image === "string") {
					imageObject.src = image;
				}
				else {
					throw new TypeError("No image provided");
				}
			} catch(e) {
				deferred.reject(e);
				console.error(e);
			};
			return deferred.promise;
		}
	};
}])

.directive('loadedImage', ['ImageLoader', function(ImageLoader) {
	return {
		scope: {
			src: '&src'
		},
		link: function(scope, element, attributes) {
			var imageObject = new Image();
			for (attributeName in attributes) {
				if (attributeName !== 'src') {
					if (attributeName === 'class') {
						imageObject.className = attributes.class;
					}
					else {
						imageObject[attributeName] = attributes[attributeName]
					}
				}
			}
			imageObject.onload = function() {
				element.append(imageObject);
			};

			imageObject.src = scope.src();
		}
	}
}]);

!function(){angular.module("contentful",[])}(),function(){
t.$inject = ["t", "n", "e", "r"];function t(t,n,e,r){var i;n.contentfulEntry&&(i=t.$eval(n.contentfulEntry),r.isQueryString(i)?e.entries(i).then(function(n){var e={};n.data&&n.data.items&&n.data.items.length&&(e=n.data.items[0]),t.$contentfulEntry=e},function(){t.$contentfulEntry={}}):e.entry(i).then(function(n){t.$contentfulEntry=n.data},function(){t.$contentfulEntry={}})),n.hasOwnProperty("contentfulEntries")&&(i=t.$eval(n.contentfulEntries),e.entries(i).then(function(n){t.$contentfulEntries=n.data},function(){t.$contentfulEntries={limit:0,skip:0,total:0,items:[]}}))}t.$inject=["$scope","$attrs","contentful","contentfulHelpers"],angular.module("contentful").controller("ContentfulDirectiveCtrl",t)}(),function(){function t(){return{restrict:"EA",scope:!0,controller:"ContentfulDirectiveCtrl"}}t.$inject=[],angular.module("contentful").directive("contentfulEntries",t)}(),function(){function t(){return{restrict:"EA",scope:!0,controller:"ContentfulDirectiveCtrl"}}t.$inject=[],angular.module("contentful").directive("contentfulEntry",t)}(),function(){function t(){function t(){}return t.prototype.resolveResponse=function(t){var n=this;return n.walkMutate(t,n.isLink,function(e){return n.getLink(t,e)||e}),t.items||[]},t.prototype.isLink=function(t){return t&&t.sys&&t.sys.type&&"Link"===t.sys.type?!0:!1},t.prototype.getLink=function(t,n){var e=this,r=n.sys.linkType,i=n.sys.id,o=function(t){return t&&t.sys&&t.sys.type===r&&t.sys.id===i};return e.findLink(t.items,o)||t.includes&&e.findLink(t.includes[r],o)},t.prototype.findLink=function(t,n){var e,r=null;if(!angular.isArray(t))return r;for(e=0;e<t.length;e++)if(n(t[e])){r=t[e];break}return r},t.prototype.walkMutate=function(t,n,e){var r=this;return n(t)?e(t):angular.isArray(t)||angular.isObject(t)?(angular.forEach(t,function(i,o){t[o]=r.walkMutate(i,n,e)}),t):t},t.prototype.isQueryString=function(t){return t.toString().indexOf("=")>-1?!0:t.toString().indexOf("&")>-1?!0:t.toString().indexOf("?")>-1?!0:!1},new t}angular.module("contentful").factory("contentfulHelpers",t)}(),function(){function t(){
t.$inject = ["t", "n", "e"];function t(t,n,e){return new r(t,n,e,i)}function r(t,n,e,r){if(this._$http=t,this._$q=n,this._contentfulHelpers=e,this.options=r,"function"!=typeof t.get)throw new Error("The contentful service needs a valid http service to work with");if("function"!=typeof n.when)throw new Error("The contentful service needs a valid promise service to work with")}var i={host:"cdn.contentful.com",space:null,accessToken:null,secure:!0};this.setOptions=function(t){return angular.extend(i,t),this},this.$get=t,t.$inject=["$http","$q","contentfulHelpers"],r.prototype.request=function(t,n){var e;return n=n||{},n.headers=n.headers||{},n.params=n.params||{},n.headers["Content-Type"]="application/vnd.contentful.delivery.v1+json",n.params.access_token=this.options.accessToken,e=[this.options.secure?"https":"http","://",this.options.host,":",this.options.secure?"443":"80","/spaces/",this.options.space,t].join(""),this._$http.get(e,n)},r.prototype.asset=function(t){return this.request("/assets/"+t)},r.prototype.assets=function(t){return this.processResponseWithMultipleEntries(this.request("/assets",e(n(t))))},r.prototype.contentType=function(t){return this.request("/content_types/"+t)},r.prototype.contentTypes=function(t){return this.processResponseWithMultipleEntries(this.request("/content_types",e(n(t))))},r.prototype.entry=function(t){return this.request("/entries/"+t)},r.prototype.entries=function(t){return this.processResponseWithMultipleEntries(this.request("/entries",e(n(t))))},r.prototype.space=function(){return this.request("")},r.prototype.processResponseWithMultipleEntries=function(t){var n=this;return t&&t.then&&t.then(function(t){var e={limit:t.data.limit,skip:t.data.skip,total:t.data.total};return e.items=n._contentfulHelpers.resolveResponse(t.data),t.data=e,t},function(t){return t}),t},r.prototype.processResponseWithSingleEntry=function(t){return t&&t.then&&t.then(function(t){return t},function(t){return t}),t}}function n(t){var n={};if(!t)return n;var e=t.toString().split("&");return angular.forEach(e,function(t){var e=t.split("=");e.length>1&&(n[e[0]]=e[1])}),n}function e(t){return angular.isObject(t)||(t={}),{params:t}}angular.module("contentful").provider("contentful",t)}();