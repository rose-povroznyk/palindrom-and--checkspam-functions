// Функція, яка перевіряє, чи є переданий їй рядок паліндромом

function isPalindrome(str) {
  let removeExtraChar = str.replaceAll(" ", "").toLowerCase();
  let reversedStr = Array.from(removeExtraChar).reverse().join("");

  return removeExtraChar === reversedStr;
}

console.log(isPalindrome("noon"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("Was it a car or a cat i saw"));

// Функція, яка перевіряє і повертає true, якщо переданий рядок містить вказані слова

function checkSpam(str) {
  let removeExtraChar = str.replaceAll(" ", "").toLowerCase();
  return removeExtraChar.includes("viagra") || removeExtraChar.includes("xxx");
}
console.log(checkSpam("buy VIAgra now"));
console.log(checkSpam("free xxxxxxxx"));
console.log(checkSpam("innocent rabbit"));
