function Employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

/*
Create a class SalaryCalculator that can be initialized with the following

    basic
    hra
    da
    tax (%)
    salary = 0

the class should exhibit a "calculate()" method which when invoked will populate the "salary" attribute with the calculated salary ( basic + hra + da - tax )

*/

function SalaryCalculator(defaults){
    this.basic = defaults.basic;
    this.hra = defaults.hra;
    this.da = defaults.da;
    this.tax = defaults.tax;
    this.salary = 0;
}
SalaryCalculator.prototype.calculate = function(){
        var gross = this.basic + this.hra + this.da;
        this.salary = gross * ((100-this.tax)/100);
    }
