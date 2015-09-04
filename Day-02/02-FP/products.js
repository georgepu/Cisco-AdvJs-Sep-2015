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
        var sort = function sort(list, attrName){
            for(var i=0; i<list.length-1; i++)
                for(var j = i+1; j<list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        describe("products by cost", function(){
            sort(products, "cost");
            console.table(products);
        });
        describe("products by units", function(){
            sort(products, "units");
            console.table(products);
        })
    });
    describe("any list by any logic", function(){
        var sort = function sort(list, comparerFn){
            for(var i=0; i<list.length-1; i++)
                for(var j = i+1; j<list.length; j++)
                    if (comparerFn(list[i], list[j]) > 0){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        describe("products by value [ units * cost ]", function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.units * p1.cost,
                    p2Value = p2.units * p2.cost;
                if (p1Value < p2Value) return -1;
                if (p1Value > p2Value) return 1;
                return 0;
            }
            sort(products, productComparerByValue);
            console.table(products);
        });
    });
});

describe("Filter", function(){
    describe("Specific", function(){
        describe("by category [1]", function(){
            function filter(){
                var result = [];
                for(var i=0; i<products.length; i++)
                    if (products[i].category === 1)
                        result.push(products[i]);
                return result;
            }
            var category1Products = filter();
            console.table(category1Products);
        })
        describe("by cost [> 50]", function(){
            function filter(){
                var result = [];
                for(var i=0; i<products.length; i++)
                    if (products[i].cost > 50)
                        result.push(products[i]);
                return result;
            }
            var costlyProducts = filter();
            console.table(costlyProducts);
        })
    })
    describe("Generic", function(){
        var filter = function filter(list, criteriaFn){
            var result = [];
            for(var i=0; i<list.length; i++)
                if (criteriaFn(list[i]))
                    result.push(list[i]);
            return result;
        }
        describe("Category 1 products", function(){
            var category1Criteria = function(product){
                return product.category === 1;
            };
            var category1Products= filter(products, category1Criteria);
            console.table(category1Products);
        })
        var costlyProductCriteria = function(product){
                return product.cost > 50;
            };
        describe("Costly products [ cost > 50]", function(){

            var costlyProducts= filter(products, costlyProductCriteria);
            console.table(costlyProducts);
        });
        function inverse(criteriaFn){
            return function(){
                return !criteriaFn.apply(this, arguments);
            }
        };
        describe("affordable products", function(){
            var affordableProductCriteria = inverse(costlyProductCriteria);
            var affordableProducts = filter(products, affordableProductCriteria);
            console.table(affordableProducts);
        });
    })
})
