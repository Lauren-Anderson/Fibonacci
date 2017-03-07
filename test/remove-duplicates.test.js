import {expect} from "chai";
import RemoveDuplicates from "../source/remove-duplicates.js";

describe("RemoveDuplicates", () => {
    it("shall exist", () => {
        let removeDuplicates = new RemoveDuplicates();
        expect(removeDuplicates).to.be.defined;
    });

    it("shall have the ability to remove duplicates", () => {
        let rd = new RemoveDuplicates();
        let inputArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 5];
        let expectedOutput = [0, 1, 2, 3, 4, 5];

        expect(rd.remove(inputArray)).to.deep.equal(expectedOutput);
    })

});
