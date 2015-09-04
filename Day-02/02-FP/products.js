var products = [
    {id : 3, name : "Pen", cost : 10, units : 40, category : 1},
    {id : 7, name : "Hen", cost : 70, units : 80, category : 2},
    {id : 8, name : "Ten", cost : 40, units : 70, category : 1},
    {id : 5, name : "Den", cost : 60, units : 20, category : 2},
    {id : 6, name : "Zen", cost : 80, units : 90, category : 1}
]

/*
sort
filter
min
max
sum
all
any
groupBy
transform
each
*/

function describe(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}
describe("Default list", function(){
    console.table(products);
});


describe("Sort", function(){
    describe("by default", function(){
        var sort = function sort(){
            for(var i=0; i<products.length-1; i++)
                for(var j = i+1; j<products.length; j++)
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
        }
        sort();
        console.table(products);
    });
    describe("any list by any attribute", function(){

    });
});
