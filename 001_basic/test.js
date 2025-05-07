const validator = require("validator")

var k = validator.isEmail("abc@gmail.com")

console.log(k);
