const express = require('express'),
    router = express.Router();

const UserController = require('./UsersController');
/* GET home page. */
router.get('/', (req, res) => {
    UserController.listUsers(req)(res);
});
router.get('/:_id', (req, res) => {
    UserController.findUser(req)(res);
});
router.post('/register', (req, res) => {
    UserController.register(req)(res);
});
router.put('/:_id', (req, res) => {
    UserController.updateUser(req)(res);
});
router.delete('/:_id', (req, res) => {
    UserController.deleteUser(req)(res);
});
router.delete('/', (req, res) => {
    UserController.deleteAllUsers(req)(res);
});
module.exports = router;