/*Create an object and assign it to the variable "spinner" */

/*
var spinner = ...

The object is expected to exhibit the following behavior

spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

Important Note:
The variable used to track the count should not be accessible to the outside world

*/

function getSpinner(){
    var count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        up : increment,
        down : decrement
    }
}
