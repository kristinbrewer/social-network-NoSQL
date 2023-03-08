const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateSingleUser,
    deleteSingeUser,
    addFriend,
    deleteFriend,
    //bonus remove a user's associated thoughts
} = require('../../controllers/userController.js');

//api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteSingeUser);


  // /api/users/:userId/friends/ :friendId
router
    .route('/userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;