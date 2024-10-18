// Write your tests here!
const { substitution } = require("../src/substitution");
const assert = require('assert');

describe("substitution", () => {
  it("should encode a message with the given substitution alphabet", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    assert.strictEqual(actual, expected);
  });

  it("should encode a message while maintaining spaces", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    assert.strictEqual(actual, expected);
  });

  it("should decode a message with the given substitution alphabet", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "thinkful";
    assert.strictEqual(actual, expected);
  });

  it("should return false if the alphabet is not exactly 26 characters long", () => {
    const actual = substitution("thinkful", "short");
    assert.strictEqual(actual, false);
  });

  it("should return false if the substitution alphabet does not have unique characters", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    assert.strictEqual(actual, false);
  });

  it("should encode a message with special characters in the substitution alphabet", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    assert.strictEqual(actual, expected);
  });

  it("should decode a message with special characters in the substitution alphabet", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    assert.strictEqual(actual, expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    assert.strictEqual(actual, expected);
  });

  it("should return an encoded string when valid input and alphabet are provided", () => {
    const actual = typeof substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "string";
    assert.strictEqual(actual, expected);
  });

  it("should return false if the alphabet is missing", () => {
    const actual = substitution("thinkful");
    assert.strictEqual(actual, false);
  });
});