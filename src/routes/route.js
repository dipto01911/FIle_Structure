
const router=require('express').Router()

const {createUser,readUser,updateUser,deleteUser,getAllUsers,
    getUserById,loginUser,logoutUser,changePassword,updateProfile,makeAdmin,
    removeAdmin,searchUsers,filterUsers,blockUser,unblockUser,verifyEmail,resendVerification,
    deleteAccount,uploadProfilePicture}=require('../controller/controller')


router.get('/create-user',createUser)
router.get('/read-user',readUser)
router.put('/update-user',updateUser)
router.delete('/delete-user',deleteUser)
router.get('/all-users',getAllUsers)
router.get('/user/:id',getUserById)
router.post('/login',loginUser)
router.post('/logout',logoutUser)
router.put('/change-password',changePassword)
router.put('/update-profile',updateProfile)
router.put('/make-admin/:id',makeAdmin)
router.put("/remove-admin/:id", removeAdmin);
router.get('/search',searchUsers)
router.get('/filter',filterUsers)
router.patch('/block-user/:id',blockUser)
router.patch('/unblock-user/:id',unblockUser)
router.post('/verify-email',verifyEmail)
router.post('/resend-verification',resendVerification)
router.post('/upload-profile-picture',uploadProfilePicture)
router.delete('/delete-account',deleteAccount)


module.exports=router;