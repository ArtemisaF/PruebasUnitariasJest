const { TestScheduler } = require("jest");

const cal= require('./calculator');


describe('add operation',()=>{

    test('adds 1 + 1 to equeals 2',()=>{
        var value = cal.add(1,1);
        expect(value).toBe(2);
    });
    
    test('adds 5 + 1 to equeals 6',()=>{
        var value = cal.add(5,1);
        expect(value).toBe(6);
    });
    test('adds 14.5 + 39.9 to equuals 54.4',()=>{
        var value = cal.add(14.5,39.9);
        expect(value).toBe(54.4);
    });
});

describe('sub',()=>{
    test('sub 1 + 1 to equeals 0',()=>{
        var value = cal.subtract(1,1);
        expect(value).toBe(0);
    });
    test('sub 10 + 1 to equeals 0',()=>{
        var value = cal.subtract(10,1);
        expect(value).toBe(9);
    });
});

describe('divide operation',()=>{
    test('divide 12 by 2 and it equals 6',()=>{
        var value =cal.divide(12,2);
        expect(value).toBe(6);
    });
    test('divide 29 by 2 and it equals 14.5',()=>{
        var value = cal.divide(29,2);
        expect(value).toBe(14.5);
    });
});