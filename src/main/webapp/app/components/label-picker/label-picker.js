(function () {

	'use strict';


	angular.module('lavagna.components').component('lvgLabelPicker', {
		templateUrl: 'app/components/label-picker/label-picker.html',
		bindings: {
			model: '=ngModel',
			label: '=',
			board: '=',
			group: '=',
			projectName: '<'
		},
		controller: function (LabelCache, User, $scope, $http) {
			var ctrl = this;
			
			
			ctrl.searchCard = function(text) {
				var params = {term: text.trim()};
				params.projectName = $ctrl.projectName
				
				
				return $http.get('api/search/autocomplete-card', {params: params}).then(function (res) {
					angular.forEach(res.data, function(card) {
						card.label = card.boardShortName + "-" + card.sequence + " " + card.name;
					});
					return res.data;
				});
			};
			
			ctrl.searchUser = function(text) {
				return User.findUsers(text.trim()).then(function (res) { 
					angular.forEach(res, function(user) {
						user.label = User.formatName(user);
					});
					return res;
				});
			};
			
			
			
			$scope.$watch('$ctrl.label', function () {
				ctrl.model = null;
				ctrl.listValues = null;
				if (ctrl.label && ctrl.label.type === 'LIST') {
					LabelCache.findLabelListValues(ctrl.label.id).then(function (res) {
						ctrl.listValues = res;
					});
				}
			});
		}
	});
	
})();



