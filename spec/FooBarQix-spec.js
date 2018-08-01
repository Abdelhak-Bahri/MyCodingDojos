var FooBarQix = require('../FooBarQix/FooBarQix');

//count number of occurrences of subStr on longString
let occurences = function(longString, subString){
    
    var regex = new RegExp(subString.replace('*','\\\*'),'g');
    return (longString.match(regex) || []).length;
};


describe("test unchanged numbers", function() {
    var result;
    it("should return one", function() {
        result = FooBarQix.compute(1);
        expect(result).toBe(1);
    });
    it("and should return eleven", function() {
        result = FooBarQix.compute(11);
        expect(result).toBe(11);
    });
});
describe("test weird numbers", function() {
    var result = FooBarQix.compute(7551);
    it("should contain one FOO ", function() {
        expect(occurences(result,"FOO")).toBe(1);
    });
    it("should contain two BAR ", function() {
        expect(occurences(result,"BAR")).toBe(2);
    });
    it("should contain one Qix ", function() {
        expect(occurences(result,"QIX")).toBe(1);
    });

    result = FooBarQix.compute(105);
    it("should contain one FOO ", function() {
        expect(occurences(result,"FOO")).toBe(1);
    });

    it("should contain two BAR ", function() {
        expect(occurences(result,"BAR")).toBe(2);
    });
    it("should contain one Qix ", function() {
        expect(occurences(result,"QIX")).toBe(1);
    });
    it("should contain one * ", function() {
        expect(occurences(result,"*")).toBe(1);
    });
});
describe("test FOO numbers", function() {
    var result;
    it("should return FOO twice", function() {
        result = occurences(FooBarQix.compute(3),"FOO"); 
        expect(result).toBe(2);
    });
    it("should return FOO", function() {
        result = FooBarQix.compute(9);
        expect(result).toBe("FOO");
    });

});

describe("test BAR numbers", function() {
    var result;
    it("should return three of BAR ", function() {
        result = occurences(FooBarQix.compute(55),"BAR"); 
        expect(result).toBe(3);
    });
    it("should return BAR", function() {
        result = occurences(FooBarQix.compute(51),"BAR");
        expect(result).toBe(1);
    });
});

describe("test Qix numbers", function() {
    var result;
    it("should return three of QIX ", function() {
        result = occurences(FooBarQix.compute(707),"QIX"); 
        expect(result).toBe(3);
    });
    it("should return QIX", function() {
        result = occurences(FooBarQix.compute(107),"QIX");
        expect(result).toBe(1);
    });
});