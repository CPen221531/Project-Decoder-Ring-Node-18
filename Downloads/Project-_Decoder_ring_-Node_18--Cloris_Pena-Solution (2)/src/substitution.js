// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function hasUniqueCharacters(str) {
    return new Set(str).size === str.length;
  }

  function substitution(input, alphabet, encode = true) {

    if (!alphabet || alphabet.length !== 26 || !hasUniqueCharacters(alphabet)) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerInput = input.toLowerCase();
    let result = "";


    const encodeMap = {};
    const decodeMap = {};
    for (let i = 0; i < 26; i++) {
      encodeMap[standardAlphabet[i]] = alphabet[i];
      decodeMap[alphabet[i]] = standardAlphabet[i];
    }


    for (let char of lowerInput) {
      if (char === " ") {
        result += char;
      } else {
        result += encode
          ? encodeMap[char] || ""
          : decodeMap[char] || "";
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };