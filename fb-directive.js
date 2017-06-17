angular.module('fb-directive',[])
.directive('fbDirective',['$sce',function ($sce) {
	return {
		scope: {
			src: '@',
			height: '='
		},
		link : function($scope,element,attrs){
			var fb = document.getElementById('fb');
			var width = $("#fb").width();
			makeUrl();
			function makeUrl(){
				$("#fbloading").hide();
				$scope.src= $sce.trustAsResourceUrl($scope.src);
				fb.src = $scope.src+'&width='+Math.round(width)+'&height='+$scope.height;
				fb.height = $scope.height;
				}
		},
		template: '<h1 id="fbloading">Loading</h1><div 	onload="makeUrl" style="text-align:center"><iframe id="fb" style="width:100%" ></iframe><div>'
	};
}])