'use strict';

(function () {
	var app = angular.module('todo', ['ngRoute']);

	app.config(["$routeProvider", "$locationProvider", "$httpProvider", function ($routeProvider, $locationProvider, $httpProvider) {
		console.log('hi');
		$routeProvider.when('/tasks', {
			templateUrl: 'templates/todo.html',
			controller: 'todoCtrl as ctrl'
		}).when('/categories', {
			templateUrl: 'templates/categories.html',
			controller: 'categoryCtrl as ctrl'
		}).otherwise('/tasks');
	}]);
})();
'use strict';

(function () {
	'use strict';

	categoryCtrl.$inject = ["categoryResource"];
	var app = angular.module('todo');

	function categoryCtrl(categoryResource) {
		var ctrl = this;

		ctrl.categories = categoryResource.getCategories();

		ctrl.newCategory = function () {
			if (ctrl.newCategoryName === '') {
				return;
			}

			ctrl.categories.push(ctrl.newCategoryName);

			ctrl.newCategoryName = '';
		};
	}

	app.controller('categoryCtrl', categoryCtrl);
})();
'use strict';

(function () {
	'use strict';

	todoCtrl.$inject = ["taskResource", "categoryResource"];
	var app = angular.module('todo');

	function todoCtrl(taskResource, categoryResource) {
		var ctrl = this;

		ctrl.tasks = taskResource.getTasks();

		ctrl.categories = categoryResource.getCategories();

		ctrl.newTask = function () {
			if (ctrl.newTaskName === '') {
				return;
			}
			var task = {
				name: ctrl.newTaskName
			};

			ctrl.tasks.push(task);

			ctrl.newTaskName = '';
		};
	}

	app.controller('todoCtrl', todoCtrl);
})();
'use strict';

(function () {
	'use strict';

	var app = angular.module('todo');

	app.directive('onEnter', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if (event.which === 13) {
					scope.$apply(function () {
						scope.$eval(attrs.onEnter);
					});

					event.preventDefault();
				}
			});
		};
	});
})();
'use strict';

(function () {
	'use strict';

	var app = angular.module('todo');

	function categoryResource() {

		var categories = ['Pluralsight', 'Consulting', 'Scouts', 'Home'];
		function getCategories() {
			return categories;
		}

		return { getCategories: getCategories };
	}

	app.service('categoryResource', categoryResource);
})();
'use strict';

(function () {
	'use strict';

	var app = angular.module('todo');

	function taskResource() {

		var tasks = [{ name: 'Task 1' }, { name: 'Task 2' }, { name: 'Task 3' }, { name: 'Task 4' }];
		function getTasks() {
			return tasks;
		}

		return {
			getTasks: getTasks
		};
	}

	app.service('taskResource', taskResource);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2NhdGVnb3J5X2NvbnRyb2xsZXIuanMiLCJjb250cm9sbGVycy90YXNrX2NvbnRyb2xsZXIuanMiLCJkaXJlY3RpdmVzL2V2ZW50X2hhbmRsZXIuanMiLCJyZXNvdXJjZXMvY2F0ZWdvcnlfcmVzb3VyY2UuanMiLCJyZXNvdXJjZXMvdGFza19yZXNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndG9kbycsIFsnbmdSb3V0ZSddKTtcblxuXHRhcHAuY29uZmlnKFtcIiRyb3V0ZVByb3ZpZGVyXCIsIFwiJGxvY2F0aW9uUHJvdmlkZXJcIiwgXCIkaHR0cFByb3ZpZGVyXCIsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICRodHRwUHJvdmlkZXIpIHtcblx0XHRjb25zb2xlLmxvZygnaGknKTtcblx0XHQkcm91dGVQcm92aWRlci53aGVuKCcvdGFza3MnLCB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy90b2RvLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3RvZG9DdHJsIGFzIGN0cmwnXG5cdFx0fSkud2hlbignL2NhdGVnb3JpZXMnLCB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jYXRlZ29yaWVzLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ2NhdGVnb3J5Q3RybCBhcyBjdHJsJ1xuXHRcdH0pLm90aGVyd2lzZSgnL3Rhc2tzJyk7XG5cdH1dKTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0Y2F0ZWdvcnlDdHJsLiRpbmplY3QgPSBbXCJjYXRlZ29yeVJlc291cmNlXCJdO1xuXHR2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3RvZG8nKTtcblxuXHRmdW5jdGlvbiBjYXRlZ29yeUN0cmwoY2F0ZWdvcnlSZXNvdXJjZSkge1xuXHRcdHZhciBjdHJsID0gdGhpcztcblxuXHRcdGN0cmwuY2F0ZWdvcmllcyA9IGNhdGVnb3J5UmVzb3VyY2UuZ2V0Q2F0ZWdvcmllcygpO1xuXG5cdFx0Y3RybC5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChjdHJsLm5ld0NhdGVnb3J5TmFtZSA9PT0gJycpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHJsLmNhdGVnb3JpZXMucHVzaChjdHJsLm5ld0NhdGVnb3J5TmFtZSk7XG5cblx0XHRcdGN0cmwubmV3Q2F0ZWdvcnlOYW1lID0gJyc7XG5cdFx0fTtcblx0fVxuXG5cdGFwcC5jb250cm9sbGVyKCdjYXRlZ29yeUN0cmwnLCBjYXRlZ29yeUN0cmwpO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR0b2RvQ3RybC4kaW5qZWN0ID0gW1widGFza1Jlc291cmNlXCIsIFwiY2F0ZWdvcnlSZXNvdXJjZVwiXTtcblx0dmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0b2RvJyk7XG5cblx0ZnVuY3Rpb24gdG9kb0N0cmwodGFza1Jlc291cmNlLCBjYXRlZ29yeVJlc291cmNlKSB7XG5cdFx0dmFyIGN0cmwgPSB0aGlzO1xuXG5cdFx0Y3RybC50YXNrcyA9IHRhc2tSZXNvdXJjZS5nZXRUYXNrcygpO1xuXG5cdFx0Y3RybC5jYXRlZ29yaWVzID0gY2F0ZWdvcnlSZXNvdXJjZS5nZXRDYXRlZ29yaWVzKCk7XG5cblx0XHRjdHJsLm5ld1Rhc2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoY3RybC5uZXdUYXNrTmFtZSA9PT0gJycpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRhc2sgPSB7XG5cdFx0XHRcdG5hbWU6IGN0cmwubmV3VGFza05hbWVcblx0XHRcdH07XG5cblx0XHRcdGN0cmwudGFza3MucHVzaCh0YXNrKTtcblxuXHRcdFx0Y3RybC5uZXdUYXNrTmFtZSA9ICcnO1xuXHRcdH07XG5cdH1cblxuXHRhcHAuY29udHJvbGxlcigndG9kb0N0cmwnLCB0b2RvQ3RybCk7XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndG9kbycpO1xuXG5cdGFwcC5kaXJlY3RpdmUoJ29uRW50ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdGVsZW1lbnQuYmluZChcImtleWRvd24ga2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcblx0XHRcdFx0XHRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0c2NvcGUuJGV2YWwoYXR0cnMub25FbnRlcik7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9KTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0b2RvJyk7XG5cblx0ZnVuY3Rpb24gY2F0ZWdvcnlSZXNvdXJjZSgpIHtcblxuXHRcdHZhciBjYXRlZ29yaWVzID0gWydQbHVyYWxzaWdodCcsICdDb25zdWx0aW5nJywgJ1Njb3V0cycsICdIb21lJ107XG5cdFx0ZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpIHtcblx0XHRcdHJldHVybiBjYXRlZ29yaWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiB7IGdldENhdGVnb3JpZXM6IGdldENhdGVnb3JpZXMgfTtcblx0fVxuXG5cdGFwcC5zZXJ2aWNlKCdjYXRlZ29yeVJlc291cmNlJywgY2F0ZWdvcnlSZXNvdXJjZSk7XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndG9kbycpO1xuXG5cdGZ1bmN0aW9uIHRhc2tSZXNvdXJjZSgpIHtcblxuXHRcdHZhciB0YXNrcyA9IFt7IG5hbWU6ICdUYXNrIDEnIH0sIHsgbmFtZTogJ1Rhc2sgMicgfSwgeyBuYW1lOiAnVGFzayAzJyB9LCB7IG5hbWU6ICdUYXNrIDQnIH1dO1xuXHRcdGZ1bmN0aW9uIGdldFRhc2tzKCkge1xuXHRcdFx0cmV0dXJuIHRhc2tzO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRUYXNrczogZ2V0VGFza3Ncblx0XHR9O1xuXHR9XG5cblx0YXBwLnNlcnZpY2UoJ3Rhc2tSZXNvdXJjZScsIHRhc2tSZXNvdXJjZSk7XG59KSgpOyJdfQ==
