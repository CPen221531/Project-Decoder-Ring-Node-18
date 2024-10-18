// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {


  function caesar(input, shift, encode = true) {
  
    if (!shift || shift < -25 || shift > 25 || shift === 0) return false;


    if (!encode) shift = -shift;

  
    return input.toLowerCase().split('').map((char) => {

      if (char.match(/[a-z]/)) {

        let charCode = char.charCodeAt(0) + shift;
'a'
        if (charCode > 122) charCode = 96 + (charCode - 122);
        if (charCode < 97) charCode = 123 - (97 - charCode);
        return String.fromCharCode(charCode);
      }
   
      return char;
    }).join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };