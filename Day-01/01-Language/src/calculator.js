function add(){
    function parseArg(n){
        if (n instanceof Array) return add.apply(this,n);
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n,10);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
}

//this
/*
6 invocation patterns

As a method of an object
    - this -> object

As a function
    - this -> global scope -> window

using the "call()" method of the function

using the "apply()" method of the function

*/
