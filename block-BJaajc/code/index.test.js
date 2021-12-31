const fn = require(`./index`);

// test for function getFullName

test(`get full name to be John Horo`, () => {
  expect(fn.getFullName(`John`, `Horo`)).toBe(`John Horo`);
});

test(`get full name to be Sunil Ray`, () => {
  expect(fn.getFullName(`Sunil`, `Ray`)).toBe(`Sunil Ray`);
});

test(`get full name to be Kushal Dave`, () => {
  expect(fn.getFullName(`Kushal`, `Dave`)).toBe(`Kushal Dave`);
});

test(`get full name not to be Aman Ray`, () => {
  expect(fn.getFullName(`Aman`, `Pal`)).not.toBe(`Aman Ray`);
});

test(`get full name not to be Suman Jay`, () => {
  expect(fn.getFullName(`Suman`, `Heve`)).not.toBe(`Suman Jay`);
});

test(`get full name not to be Bran Day`, () => {
  expect(fn.getFullName(`Bran`, `Stark`)).not.toBe(`Bran Day`);
});

// test for function ispalindrome

test("Jalaj is a Palindrome", () => {
  expect(fn.isPalindrome("jalaj")).toBe(true);
});

test("Naman is a Palindrome", () => {
  expect(fns.isPalindrome("naman")).toBe(true);
});

test("reviver is a Palindrome", () => {
  expect(fn.isPalindrome("reviver")).toBe(true);
});

test("JavaScript is not a Palindrome", () => {
  expect(fn.isPalindrome("javascript")).not.toBe(true);
});

test("receiver is not a Palindrome", () => {
  expect(fn.isPalindrome("receiver")).not.toBe(true);
});

test("html is not a Palindrome", () => {
  expect(fn.isPalindrome("html")).not.toBe(true);
});

//   test for function getCircumference

test("Circumfrence of circle with radius 7 is 43", () => {
  expect(fn.getCircumference(7)).toBe("The circumference is 43");
});

test("Circumfrence of circle with radius 7 is 43", () => {
  expect(fn.getCircumference(7)).toBe("The circumference is 43");
});
test("Circumfrence of circle with radius 5 is 31", () => {
  expect(fn.getCircumference(5)).toBe("The circumference is 31");
});

test("Circumfrence of circle with radius 10 is 62", () => {
  expect(fn.getCircumference(10)).toBe("The circumference is 62");
});

test("Area of circle with radius 10 is 314", () => {
  expect(fn.getAreaOfCircle(10)).toBe("The area is 314");
});

test("Area of circle with radius 7 is 153", () => {
  expect(fn.getAreaOfCircle(7)).toBe("The area is 153");
});

test("Area of circle with radius 5 is 78", () => {
  expect(fn.getAreaOfCircle(5)).toBe("The area is 78");
});
