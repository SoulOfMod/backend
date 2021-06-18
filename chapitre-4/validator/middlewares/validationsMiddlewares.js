const expressValidator = require("express-validator");

const validationUsers = [
    expressValidator.body("username").exists().isLength({ min: 4 }).trim(),
    expressValidator.body("email").exists().isEmail().normalizeEmail(),
    expressValidator.body("age").exists().isNumeric().isLength({ min: 2 }),
    expressValidator.body("city").isIn(['Paris', 'Tokyo', 'Los Angeles'])
]

module.exports = {
    validationUsers
}