import { expect } from "chai";

describe("FizzBuzz", ()=>{
    //TODO boundary value analysis for 1 to 100
    // check 1
    it("should return value of type string '1' when 1 is passed in",() =>{
        expect(fizzBuzz(1)).eql("1");
    });

    //check 100
    it("should return value of type string '100' when 100 is passed in",() =>{
        expect(fizzBuzz(100)).eql("100");
    });
})

function fizzBuzz(value: number) {
    return "1";
}