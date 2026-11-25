const test = require("node:test");
const assert = require("node:assert");
const { calculateTip, calculateTotal, splitBill } = require("./calc.js");

test("15% tip on a 100 bill is 15", () => {
  assert.strictEqual(calculateTip(100, 15), 15);
});

test("total for a 50 bill with 20% tip is 60", () => {
  assert.strictEqual(calculateTotal(50, 20), 60);
});

test("a negative bill is rejected", () => {
  assert.throws(() => calculateTip(-10, 15));
});

test("a 90 bill with 20% tip split by 3 is 36 each", () => {
  assert.strictEqual(splitBill(90, 20, 3), 36);
});

test("splitting between 0 people is rejected", () => {
  assert.throws(() => splitBill(90, 20, 0));
});
