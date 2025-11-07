# JavaScript Type Conversions

JavaScript allows converting values from one data type to another. Type conversion is mainly of two types:

- **Explicit Conversion (Manual)**
- **Implicit Conversion (Automatic)**

Below are the four important type conversions in JavaScript:

---

## ✅ 1. String Conversion

String conversion means converting any value into a string format.

### **How it happens**
- Using functions like `String(value)` or `value.toString()`.
- Automatically when a value is joined with a string (concatenation).

### **Examples of results**
- Number → `"100"`
- Boolean → `"true"` or `"false"`
- `50 + " apples"` → `"50 apples"`

---

## ✅ 2. Number Conversion

Number conversion converts different data types into numeric values.

### **How it happens**
- Using `Number(value)`, `parseInt()`, or `parseFloat()`.
- Strings containing numbers convert to actual numeric values.
- Boolean values convert to numbers as:
  - `true → 1`
  - `false → 0`

### **Examples of results**
- `"50"` → `50`
- `"10.5"` → `10.5`
- `"Hello"` → `NaN` (Not a Number)

---

## ✅ 3. Boolean Conversion

Boolean conversion turns values into `true` or `false`.

### **Truthy values (become true)**
- Any non-zero number
- Any non-empty string
- Objects (`{}`)
- Arrays (`[]`)

### **Falsy values (become false)**
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

---

## ✅ 4. Implicit (Automatic) Conversion

JavaScript automatically converts data types during operations.

### **Examples of automatic conversion**
- Number + String → String
  - `5 + "5"` becomes `"55"`
- String converted to number in math operations
  - `"10" - 2` becomes `8`
- Boolean converted to number
  - `true + 1` becomes `2`

---

### ✅ Summary Table

| Conversion Type        | Converts To | Triggered By |
|------------------------|-------------|---------------|
| String Conversion      | String      | `String()`, `toString()`, concatenation |
| Number Conversion      | Number      | `Number()`, `parseInt()`, math ops |
| Boolean Conversion     | Boolean     | `Boolean()` or conditional checks |
| Implicit Conversion    | Auto        | `+`, `-`, `*`, `/`, logical operations |

---

This file covers the main type conversions in JavaScript in simple and clear points. Perfect for quick learning and revision.
