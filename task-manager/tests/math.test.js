const { calculateTip } = require("../src/math");
test("Hello world!", () => {});

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
  //   if (total !== 13) {
  //     throw new Error("Total tip should be 13. Got " + total);
  //   }
});
