const test = require("node:test");
const assert = require("node:assert");
const { calculateTip, calculateTotal } = require("./calc.js");

test("15% tip on a 100 bill is 15", () => {
  assert.strictEqual(calculateTip(100, 15), 15);
});

test("total for a 50 bill with 20% tip is 60", () => {
  assert.strictEqual(calculateTotal(50, 20), 60);
});

test("a negative bill is rejected", () => {
  assert.throws(() => calculateTip(-10, 15));
});
