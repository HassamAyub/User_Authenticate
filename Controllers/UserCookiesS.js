const jwt=require('jsonwebtoken');
const sceretKey='aTtack/on/Isr@e@l-and-$'

function setUser(user) {
   const payload={
    _id:user._id,
    email:user.email
   }
   return jwt.sign(payload,sceretKey)
}

function getUser(token) {
    try {
        return jwt.verify(token,sceretKey)
    } catch (error) {
        return null
    }
}

module.exports={
    setUser,
    getUser,
}