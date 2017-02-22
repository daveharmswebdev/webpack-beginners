(function(){
	'use strict';
	let app = angular.module('todo');
	
	function todoCtrl(taskResource, categoryResource){
		let ctrl = this;

	
		ctrl.tasks = taskResource.getTasks();
		
		ctrl.categories = categoryResource.getCategories();
		
		ctrl.newTask = function(){
			if(ctrl.newTaskName === ''){
				return;
			}
			let task = {
				name: ctrl.newTaskName
			};
			
			ctrl.tasks.push(task);
		
			ctrl.newTaskName = '';
		};
	}
	
	app.controller('todoCtrl', todoCtrl);
	
}());