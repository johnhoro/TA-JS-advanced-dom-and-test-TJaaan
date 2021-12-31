function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
function isPalindrome(val) {
  let revVal = val.split(``).reverse().join(``);
  return val === revVal;
}
function getCircumFrence(radius) {
  return `The circumference is ${2 * 3.14 * radius}`;
}

function getArea(r) {
  return `The area is ${3.14 * r * r}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumFrence,
  getArea,
};
