// Topic : null vs undefined values

/*
SIMPLE DEFINITION:
- null is a value that represents the intentional absence of any object value.
- undefined is a value that represents the absence of a value.

*/

let a; // undefined no value assigned
console.log(a); // Output: undefined



/*
=======================================================
KEY DIFFERENCES: null vs undefined
=======================================================

| Feature                  | null                          | undefined                        |
|--------------------------|-------------------------------|----------------------------------|
| Meaning                  | Intentional absence of value  | Variable declared but not assigned |
| Assigned by              | Developer (manually set)      | JavaScript engine (automatically) |
| Type (typeof)            | "object" (historical quirk)   | "undefined"                      |
| Equality (==)            | null == undefined → true      | undefined == null → true         |
| Strict Equality (===)    | null === undefined → false    | undefined === null → false       |
| Default function param   | Must be set explicitly        | Default when no argument passed  |
| JSON.stringify           | Kept as null                  | Property is removed              |
| Arithmetic               | 0 (null converts to 0)        | NaN (undefined converts to NaN)  |
| Use case                 | To reset/clear a variable     | Uninitialized or missing value   |
| Falsy                    | Yes                           | Yes                              |

EXAMPLES:
  typeof null        // "object"
  typeof undefined   // "undefined"

  null == undefined  // true
  null === undefined // false

  null + 1           // 1   (null → 0)
  undefined + 1      // NaN (undefined → NaN)

  JSON.stringify({ a: null })      // '{"a":null}'
  JSON.stringify({ a: undefined }) // '{}'
=======================================================
*/



