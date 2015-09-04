define(["Task"], function getTaskStorage(Task){
        var storage = window.localStorage;
        var maxTaskId = 0;

        return {
            getAll : function(){
                var result = [];
                for(var i=0; i<window.localStorage.length;i++){
                    var key = parseInt(localStorage.key(i));
                    maxTaskId = maxTaskId > key ? maxTaskId : key;
                    var taskData = JSON.parse(storage.getItem(key));
                    var task = new Task(taskData);
                    result.push(task);
                }
                return result;
            },
            add : function(taskName){
                var newTask = new Task({ id : ++maxTaskId, name :taskName});
                storage.setItem(newTask.id, JSON.stringify(newTask));
                return newTask;
            },
            remove : function(taskId){
                storage.removeItem(taskId);
            },
            toggle : function(taskId){
                var taskData = JSON.parse(storage.getItem(taskId));
                var task = new Task(taskData);
                task.toggle();
                storage.setItem(task.id, JSON.stringify(task));
            }
        }
});
