import { expect } from "chai";
import Fibonacci from "../source/fibonacci";

describe("Fibonacci", () =>{
  it("shall exist", () =>{
    let fibonacci = new Fibonacci();
    expect(fibonacci).to.be.defined;
  });

  it("shall have the ability to return an array of fibonacci numbers based on input n", () => {
    let fibonacci = new Fibonacci();
    let n = 10;
    let expectedOutput = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fibonacci.getFibonacci(n)).to.deep.equal(expectedOutput);
  });
});
