// Email Validation RegEx
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const email = "venkatesh@example.com";

if (emailRegex.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
