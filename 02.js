function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  const dividedParts = email.split("@");

  if (dividedParts.length !== 2) {
    return "Invalid Email";
  }

  const userName = parts[0];
  const domainName = parts[1];

  return `${userName} sent you an email from ${domainName}`;
}








// Test cases
console.log(sendNotification("zihad@gmail.com"));

// console.log(sendNotification("farhan34@yahoo.com"));

// console.log(sendNotification("nadim.naem5@outlook.com"));

// console.log(sendNotification("fahim234.hotmail.com"));

// console.log(sendNotification("sadia8icloud.com"));

/**
 * ### Step-by-Step Explanation of the Code:

Let's break down each part of the code with detailed explanations and alternative examples for better understanding:

### 1. **Check if the email contains '@'**

```javascript
if (email.indexOf('@') === -1) {
    return "Invalid Email";
}
```

#### Explanation:
- `email.indexOf('@')`: This checks if the character `'@'` exists in the given email string.
  - `indexOf()` is a method that returns the position of the first occurrence of the specified value (`'@'` in this case).
  - If the `'@'` character is not found, `indexOf()` returns `-1`.
- `=== -1`: If the result of `indexOf()` is `-1`, it means the `'@'` symbol is missing in the email, so the function returns `"Invalid Email"`.

#### Example:
```javascript
email = "useremail.com"; // No '@' symbol
console.log(email.indexOf('@')); // Output: -1

// Since '@' is missing, the function will return:
"Invalid Email"
```

#### Another Example:
```javascript
email = "user@email.com"; // '@' is present
console.log(email.indexOf('@')); // Output: 4 (position of '@')

// This will not trigger the error, and the function will continue.
```

### 2. **Splitting the email into `username` and `domain`**

```javascript
const parts = email.split('@');
```

#### Explanation:
- `split('@')`: The `split()` method divides a string into an array based on the specified delimiter, which is `'@'` here.
- The email address will be divided into two parts:
  1. `username`: The part before `'@'`.
  2. `domain`: The part after `'@'`.
- The result is stored in the `parts` array.

#### Example:
```javascript
email = "user@example.com";
const parts = email.split('@');
console.log(parts); // Output: ["user", "example.com"]
```

#### Another Example:
```javascript
email = "john.doe@gmail.com";
const parts = email.split('@');
console.log(parts); // Output: ["john.doe", "gmail.com"]
```

### 3. **Check if there are exactly two parts**

```javascript
if (parts.length !== 2) {
    return "Invalid Email";
}
```

#### Explanation:
- After splitting the email, there should be exactly **two parts** (i.e., the `username` and the `domain`).
  - If the number of parts is **not 2**, it indicates that the email is not valid (possibly due to multiple or missing `'@'` symbols).
  - For example, an email like `"user@@domain.com"` will result in more than two parts.
- If the length of the `parts` array is not 2, the function returns `"Invalid Email"`.

#### Example:
```javascript
email = "user@@example.com"; // Invalid email with two '@' symbols
const parts = email.split('@');
console.log(parts); // Output: ["user", "", "example.com"] (3 parts)

// Since parts.length is 3, the function will return:
"Invalid Email"
```

#### Another Example:
```javascript
email = "valid.email@example.com";
const parts = email.split('@');
console.log(parts); // Output: ["valid.email", "example.com"]

// parts.length is 2, so the function continues.
```

### 4. **Extract the `username` and `domain`**

```javascript
const username = parts[0];
const domain = parts[1];
```

#### Explanation:
- `parts[0]`: This retrieves the first part (the `username`) from the array.
- `parts[1]`: This retrieves the second part (the `domain`) from the array.

#### Example:
```javascript
const parts = ["john.doe", "gmail.com"];
const username = parts[0]; // "john.doe"
const domain = parts[1];   // "gmail.com"
```

#### Another Example:
```javascript
const parts = ["alice", "yahoo.com"];
const username = parts[0]; // "alice"
const domain = parts[1];   // "yahoo.com"
```

### 5. **Generate and Return the Notification Message**

```javascript
return `${username} sent you an email from ${domain}`;
```

#### Explanation:
- This line uses **template literals** (backticks: \```\``) to dynamically create a string by inserting the `username` and `domain` into the message.
- The result is a complete notification message in the format: `"username sent you an email from domain"`.

#### Example:
```javascript
const username = "john.doe";
const domain = "gmail.com";
console.log(`${username} sent you an email from ${domain}`);
// Output: "john.doe sent you an email from gmail.com"
```

#### Another Example:
```javascript
const username = "alice";
const domain = "yahoo.com";
console.log(`${username} sent you an email from ${domain}`);
// Output: "alice sent you an email from yahoo.com"
```

### Full Example Walkthrough

1. Input email: `"user@example.com"`
   - Check for `'@'`: Exists at index 4, so it passes.
   - Split into parts: `["user", "example.com"]`.
   - Check length: `parts.length` is 2, so it passes.
   - Extract username and domain: `username = "user"`, `domain = "example.com"`.
   - Return the message: `"user sent you an email from example.com"`.

2. Input email: `"invalidemail.com"`
   - Check for `'@'`: Not found, `indexOf('@')` returns `-1`.
   - The function immediately returns: `"Invalid Email"`.

3. Input email: `"user@@example.com"`
   - Check for `'@'`: Multiple `'@'` characters.
   - Split into parts: `["user", "", "example.com"]` (3 parts).
   - Since `parts.length` is not 2, the function returns: `"Invalid Email"`.

---

This detailed breakdown, along with alternative examples, should give you a better understanding of how each part of the function works and how to handle different cases of valid and invalid emails.
 */





