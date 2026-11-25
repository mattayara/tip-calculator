// calc.js - the "brain" of the app. Pure functions = easy to test.

function round2(n) {
  return Math.round(n * 100) / 100;
}

function calculateTip(bill, tipPercent) {
  if (bill < 0 || tipPercent < 0) {
    throw new Error("Bill and tip must be positive numbers");
  }
  return round2((bill * tipPercent) / 100);
}

function calculateTotal(bill, tipPercent) {
  return round2(bill + calculateTip(bill, tipPercent));
}

// Lets the test file (Node.js) use these functions. The browser ignores this.
if (typeof module !== "undefined") {
  module.exports = { calculateTip, calculateTotal };
}
