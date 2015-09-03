describe("A Calculator", function(){
    it("Should be able to add two numbers", function(){
        //Arrange
        var n1 = 100,
            n2 = 200,
            expectedResult = 300;
        
        //Act
        var result = add(n1,n2);
        
        //Assert
        expect(result).toBe(expectedResult);
    })
})