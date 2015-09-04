require(["taskStorage", "jquery"], function(taskStorage, $){
        $(init);
        function init(){
            $("#btnAddTask").click(onBtnAddTaskClick);
            $("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
            $("#olTaskList").on("click","li",onTaskItemClick);
            taskStorage.getAll().forEach(addTaskToList);
        }
        function onBtnRemoveCompletedClick(){
            $("#olTaskList > li.completed").each(function(index, element){
                var $taskItem = $(element);
                var taskID = $taskItem.attr("data-task-id");
                taskStorage.remove(taskID);
                $taskItem.remove();
            });
        }
        function onTaskItemClick(){
            $(this).toggleClass("completed");
            taskStorage.toggle($(this).attr("data-task-id"));
        }
        function onBtnAddTaskClick(){
            var taskName = $("#txtTask").val();
            var newTask = taskStorage.add(taskName);
            addTaskToList(newTask);
        }
        function addTaskToList(task){
            $("<li></li>")
                .attr("data-task-id", task.id)
                .html(task.name)
                .addClass(task.isCompleted ? "completed" : "")
                .appendTo("#olTaskList");
        }

});
