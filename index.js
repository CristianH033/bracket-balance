/** Opcional - para probar con node */
// const fs = require("fs");
// const text = fs.readFileSync("test.txt", "utf8");

const text = "({[]})";

const bracketBalance = (string) => {
  const stack = [];
  const openBrackets = ["(", "[", "{"];
  const closeBrackets = [")", "]", "}"];

  for (let i = 0; i < string.length; i++) {
    if (openBrackets.includes(string[i])) {
      stack.push(string[i]);
    } else if (closeBrackets.includes(string[i])) {
      const lastBracket = stack.pop();
      if (openBrackets.indexOf(lastBracket) !== closeBrackets.indexOf(string[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
};


console.log(bracketBalance(text));