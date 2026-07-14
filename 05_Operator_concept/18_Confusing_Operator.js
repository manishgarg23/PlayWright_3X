// Rule of Thumb

// == -> checks for equality of value, but not type. It performs type coercion if the types are different. For example, 5 == '5' would return true because the string '5' is coerced to a number before comparison.
// === -> checks for equality of value and type. It does not perform type coercion. For example, 5 === '5' would return false because the types are different (number vs string).

console.log(""== 0); // true, because the empty string is coerced to 0
console.log(""=== 0); // false, because the types are different (string vs number)





console.log("" == "0"); // false, because the empty string is not equal to the string "0"
console.log("" === "0"); // false, because the values are different (empty string vs "0")
