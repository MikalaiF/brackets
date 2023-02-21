module.exports = function check(str, bracketsConfig) {
   const openBrackets = ['7', '8', '|', '(', '[', '{', '1', '3', '5']
   const closeBrackets = ['7', '8', '|']
   const brackets = {
      ')': '(',
      ']': '[',
      '}': '{',
      '2': '1',
      '4': '3',
      '6': '5',
   }

   let arr = [];
   let index;
   let current = 0;
   for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      if (currentSymbol === '7') {
         current++;
         index = 0;
      }
      if (currentSymbol === '8') {
         current++;
         index = 1
      }
      if (currentSymbol === '|') {
         current++;
         index = 2
      }
      if ((openBrackets.includes(currentSymbol)) && (current <= 1)) {
         arr.push(currentSymbol)
      } else {
         if (arr.length === 0) {
            return false
         }
      }

      let element = arr[arr.length - 1];

      if (brackets[currentSymbol] === element) {
         arr.pop();
      }
      if (closeBrackets[index] === element && current > 1) {
         arr.pop();
         current = 0;
      }

   }
   return arr.length === 0
}

