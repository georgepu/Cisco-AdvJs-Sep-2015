define([], function(){
    function Task(defaults){
        this.id = defaults.id || -1;
        this.name = defaults.name || '';
        this.isCompleted = defaults.isCompleted || false;
    }
    Task.prototype.toggle = function(){
        this.isCompleted = !this.isCompleted;
    }
    return Task;
});
