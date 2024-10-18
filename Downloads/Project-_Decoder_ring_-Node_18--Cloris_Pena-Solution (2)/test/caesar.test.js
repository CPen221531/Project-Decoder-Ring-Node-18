const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should encode the input by shifting letters to the right with a positive shift", () => {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    require('assert').strictEqual(actual, expected);
  });

  it("should encode the input by shifting letters to the left with a negative shift", () => {
    const actual = caesar("thinkful", -3);
    const expected = "qefkhcri";
    require('assert').strictEqual(actual, expected);
  });

  it("should decode the input by reversing the shift with a positive shift", () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    require('assert').strictEqual(actual, expected);
  });

  it("should maintain spaces and non-alphabetic symbols when encoding", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    require('assert').strictEqual(actual, expected);
  });

  it("should maintain spaces and non-alphabetic symbols when decoding", () => {
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    require('assert').strictEqual(actual, expected);
  });

  it("should return false if shift is not provided", () => {
    const actual = caesar("thinkful");
    require('assert').strictEqual(actual, false);
  });

  it("should return false if shift is equal to 0", () => {
    const actual = caesar("thinkful", 0);
    require('assert').strictEqual(actual, false);
  });

  it("should return false if shift is greater than 25", () => {
    const actual = caesar("thinkful", 99);
    require('assert').strictEqual(actual, false);
  });

  it("should return false if shift is less than -25", () => {
    const actual = caesar("thinkful", -26);
    require('assert').strictEqual(actual, false);
  });

  it("should ignore capital letters", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    require('assert').strictEqual(actual, expected);
  });

  it("should wrap letters around the alphabet when shifted off", () => {
    const actual = caesar("zebra", 3);
    const expected = "cheud";
    require('assert').strictEqual(actual, expected);
  });
});