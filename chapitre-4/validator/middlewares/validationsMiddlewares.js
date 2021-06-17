const expressValidator = require("express-validator");

const validationUsers = [
    expressValidator.body("username").exists().isLength({ min: 4 }),
    expressValidator.body("email").exists().isEmail(),
    expressValidator.body("age").exists().isNumeric().isLength({ min: 2 }),
    expressValidator.body("city").isIn(['Paris', 'Tokyo', 'Los Angeles'])
]

module.exports = {
    validationUsers
}