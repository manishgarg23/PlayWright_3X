// ===============================================
// Naming conventions for identifiers in JavaScript
// ================================================

// Valid identifiers in Camel Case (First letter of the first word is lowercase, and the first letter of each subsequent word is capitalized)

let userName = "JohnDoe";
console.log(userName);
let totalPrice = 99.99;
let isLoggedIn = true;
function getUserInfo() {
  // Function body
  console.log("Fetching user info...");
}

//2 Valid identifiers in Pascal case (First letter of each word is capitalized)
let UserName = "JaneDoe";
console.log(UserName);
let TotalPrice = 199.99;
let IsLoggedIn = false;

//3 Valid identifiers in Snake case ( Underscrore separated)
let user_name = "Alice";
console.log(user_name);
let total_price = 49.99;
let is_logged_in = true;

//4 Screaming Snake case (All letters are uppercase, and words are separated by underscores)
let USER_NAME = "Bob";
console.log(USER_NAME);
let TOTAL_PRICE = 149.99;
let IS_LOGGED_IN = false;

//5 Hungarian notation (Prefixing the variable name with a lowercase letter indicating its type)
let strUserName = "Charlie";
console.log(strUserName);
let numTotalPrice = 79.99;
let boolIsLoggedIn = true;

//6 Kebab case (Words are separated by hyphens, commonly used in CSS class names)
// Note: Kebab case is not valid for JavaScript variable names, but it is commonly used in CSS class names.
let user-name = "David"; // Invalid identifier, cannot use hyphens in variable names
console.log(user-name);