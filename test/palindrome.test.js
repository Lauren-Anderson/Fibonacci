import { expect } from "chai";
import Palindrome from "../source/palindrome";

describe("Palindrome", () =>{
  it("shall exist", () =>{
    let palindrome = new Palindrome();
    expect(palindrome).to.be.defined;
  });
  it("shall return true if input is Palindrome", () =>{
    let palindrome = new Palindrome();
    let string = 'Abba';
    expect(palindrome.isPalindrome(string)).to.be.true;
  })
});
