const express = require('express');
const {getUsers, getUser, updateUser, deleteUser, createUser} = require('../controllers/users');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;