

const createUser=(req,res)=>{
    res.status(200).json({message:'User create Successfully'})
}

const readUser=(req,res)=>{
  res.status(200).json({message:'User read Succesfully'})
}
 const updateUser=(req,res)=>{
 res.status(201).json({message:'User update Successfully'})
 }

const deleteUser=(req,res)=>{
    res.status(200).json({message:'User deleted Successfully'})
 }

const getAllUsers=(req,res)=>{
     res.status(200).json({message:'All users fetched successfully'})
}
const getUserById=(req,res)=>{
    res.status(200).json({message:'User fetched by ID'})
}
const loginUser=(req,res)=>{
    res.status(200).json({message:'User login successfully'})
}
const logoutUser=(req,res)=>{
    res.status(200).json({message:' User logout successful'})
}
const changePassword=(req,res)=>{
    res.status(200).json({message:'Password changed successfully'})
}
const updateProfile=(req,res)=>{
    res.status(200).json({message:'User profile updated successfully'})
}
const makeAdmin=(req,res)=>{
    res.status(200).json({message:'User made admin successfully'})
}
const removeAdmin=(req,res)=>{
    res.status(200).json({message:'Admin removed successfully'})
}

const searchUsers=(req,res)=>{
    res.status(200).json({message:'User search completed successfully'})
}
const filterUsers=(req,res)=>{
    res.status(200).json({message:'User filter completed successfully'})
}
const blockUser=(req,res)=>{
    res.status(200).json({message:'User blocked successfully'})
}
const unblockUser=(req,res)=>{
    res.status(200).json({message:'User unblocked successfully'})
}
const verifyEmail=(req,res)=>{
     res.status(200).json({message:'Email verified successfully'})
}
const resendVerification=(req,res)=>{
    res.status(200).json({message:'Verification email resent'})
}
const uploadProfilePicture=(req,res)=>{
    res.status(200).json({message:'Profile picture uploaded successfully'})
}
const deleteAccount=(req,res)=>{
    res.status(200).json({message:'Account deleted successfully'})
}

module.exports={createUser,readUser,updateUser,deleteUser,getAllUsers,getUserById,loginUser,logoutUser,changePassword,makeAdmin,removeAdmin,searchUsers,
    filterUsers,blockUser,unblockUser,verifyEmail,resendVerification,updateProfile,deleteAccount,uploadProfilePicture
}