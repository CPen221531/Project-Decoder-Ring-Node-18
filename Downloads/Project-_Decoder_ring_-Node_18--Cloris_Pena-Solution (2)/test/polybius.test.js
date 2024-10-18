const { polybius } = require("../src/polybius");
const assert = require('assert');

describe("polybius", () => {
  it("should encode a message into its corresponding number pairs", () => {
    const actual = polybius("thinkful");
    const expected = "4432423352125413";
    assert.strictEqual(actual, expected);
  });

  it("should maintain spaces while encoding", () => {
    const actual = polybius("hello world");
    const expected = "3251131343 2543241341";
    assert.strictEqual(actual, expected);
  });

  it("should decode a message back to letters", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    assert.strictEqual(actual, expected);
  });

  it("should decode a message with 'i/j' being represented as (i/j)", () => {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    assert.strictEqual(actual, expected);
  });

  it("should return false when decoding if the number of characters excluding spaces is odd", () => {
    const actual = polybius("44324233521254134", false);
    assert.strictEqual(actual, false);
  });

  it("should ignore capital letters when encoding", () => {
    const actual = polybius("HELLO world");
    const expected = "3251131343 2543241341";
    assert.strictEqual(actual, expected);
  });

  it("should maintain spaces while decoding", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    assert.strictEqual(actual, expected);
  });

  it("should return a string when encoding", () => {
    const actual = typeof polybius("thinkful");
    const expected = "string";
    assert.strictEqual(actual, expected);
  });
});