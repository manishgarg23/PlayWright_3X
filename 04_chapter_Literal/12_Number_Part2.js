// Topic: All Types of Numbers in JavaScript

// ─────────────────────────────────────────────
// 1. INTEGER (Whole Number)
// Type: number
// ─────────────────────────────────────────────
let intNum = 42;
console.log(intNum);        // 42
console.log(typeof intNum); // "number"

// ─────────────────────────────────────────────
// 2. FLOAT (Decimal Number)
// Type: number
// ─────────────────────────────────────────────
let floatNum = 3.14;
console.log(floatNum);        // 3.14
console.log(typeof floatNum); // "number"

// ─────────────────────────────────────────────
// 3. NEGATIVE NUMBER
// Type: number
// ─────────────────────────────────────────────
let negNum = -99;
console.log(negNum);        // -99
console.log(typeof negNum); // "number"

// ─────────────────────────────────────────────
// 4. EXPONENTIAL / SCIENTIFIC NOTATION
// Type: number  (e = "times 10 to the power of")
// ─────────────────────────────────────────────
let expNum = 2.5e4;   // 2.5 × 10^4 = 25000
let expSmall = 1.5e-3; // 1.5 × 10^-3 = 0.0015
console.log(expNum);   // 25000
console.log(expSmall); // 0.0015
console.log(typeof expNum); // "number"

// ─────────────────────────────────────────────
// 5. HEXADECIMAL (Base 16)
// Type: number  (prefix: 0x)
// ─────────────────────────────────────────────
let hexNum = 0xFF;   // 255 in decimal
console.log(hexNum);        // 255
console.log(typeof hexNum); // "number"

// ─────────────────────────────────────────────
// 6. OCTAL (Base 8)
// Type: number  (prefix: 0o  — ES6+)
// ─────────────────────────────────────────────
let octNum = 0o17;   // 15 in decimal
console.log(octNum);        // 15
console.log(typeof octNum); // "number"

// ─────────────────────────────────────────────
// 7. BINARY (Base 2)
// Type: number  (prefix: 0b  — ES6+)
// ─────────────────────────────────────────────
let binNum = 0b1010;  // 10 in decimal
console.log(binNum);        // 10
console.log(typeof binNum); // "number"

// ─────────────────────────────────────────────
// 8. BIGINT (Arbitrarily Large Integers)
// Type: bigint  (suffix: n  — ES2020+)
// Use when number exceeds Number.MAX_SAFE_INTEGER
// ─────────────────────────────────────────────
let bigNum = 9007199254740992n;
console.log(bigNum);        // 9007199254740992n
console.log(typeof bigNum); // "bigint"

// ─────────────────────────────────────────────
// 9. INFINITY
// Type: number  (result of dividing by zero)
// ─────────────────────────────────────────────
let posInf = Infinity;
let negInf = -Infinity;
let divByZero = 1 / 0;
console.log(posInf);        // Infinity
console.log(negInf);        // -Infinity
console.log(divByZero);     // Infinity
console.log(typeof posInf); // "number"

// ─────────────────────────────────────────────
// 10. NaN (Not a Number)
// Type: number  (result of invalid math operations)
// ─────────────────────────────────────────────
let notANum = NaN;
let invalidOp = "hello" * 2;
console.log(notANum);        // NaN
console.log(invalidOp);      // NaN
console.log(typeof notANum); // "number"  ← still "number"!
console.log(isNaN(notANum)); // true

// ─────────────────────────────────────────────
// 11. NUMBER CONSTANTS (Special Built-in Values)
// ─────────────────────────────────────────────
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991  (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log(Number.MAX_VALUE);         // 1.7976931348623157e+308 (largest possible)
console.log(Number.MIN_VALUE);         // 5e-324 (smallest positive, closest to 0)
console.log(Number.EPSILON);           // 2.220446049250313e-16 (smallest difference between two numbers)
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);               // NaN

// ─────────────────────────────────────────────
// ⚠️  DEPRECATED / LEGACY (Avoid in Modern JS)
// ─────────────────────────────────────────────

// DEPRECATED: Octal with leading zero (no 0o prefix)
// Works in non-strict mode, THROWS in strict mode ("use strict")
// let oldOctal = 017;  // ⚠️ DEPRECATED — SyntaxError in strict mode, equals 15 in non-strict
// console.log(oldOctal); // 15 (non-strict only)
// In strict mode: SyntaxError: Octal literals are not allowed in strict mode

// DEPRECATED: parseInt() without radix
// Without radix, behavior can be unpredictable (e.g., "010" → 8 in old engines)
let parsed = parseInt("010");     // ⚠️ Avoid — could return 8 or 10 depending on engine
let parsedSafe = parseInt("010", 10); // ✅ Always pass radix (10 for decimal)
console.log(parsed);     // 10 (modern engines) but was 8 in older engines
console.log(parsedSafe); // 10 (always safe)

/*
=======================================================
SUMMARY TABLE
=======================================================

| Type              | Example           | typeof     | Notes                          |
|-------------------|-------------------|------------|--------------------------------|
| Integer           | 42                | "number"   | Whole number                   |
| Float             | 3.14              | "number"   | Decimal number                 |
| Negative          | -99               | "number"   | Negative value                 |
| Exponential       | 2.5e4             | "number"   | Scientific notation            |
| Hexadecimal       | 0xFF              | "number"   | Base 16, prefix 0x             |
| Octal (ES6)       | 0o17              | "number"   | Base 8, prefix 0o              |
| Binary            | 0b1010            | "number"   | Base 2, prefix 0b              |
| BigInt            | 9007199254740992n | "bigint"   | Very large integers (ES2020)   |
| Infinity          | Infinity / 1/0    | "number"   | Overflow result                |
| NaN               | NaN / "a" * 2     | "number"   | Invalid math result            |
| ⚠️ Old Octal      | 017               | "number"   | DEPRECATED — strict mode error |
| ⚠️ parseInt no radix | parseInt("010") | "number" | DEPRECATED — always use radix  |

=======================================================
*/
