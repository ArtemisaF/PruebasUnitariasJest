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