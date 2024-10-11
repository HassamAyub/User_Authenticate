const { getUser } = require("../Controllers/UserCookiesS");

async function handleRestrictToLogin(req,res,next) {
    const token=req.cookies.token;
    if(!token) return res.redirect('/login');
    const user=getUser(token);
    if(!token) return res.redirect('/login');
    req.user=user;
    console.log(`restrict to user value: ${user}`);
    next();
}

async function checkCookies(req,res,next) {
    const token=req.cookies.token;
    const user=getUser(token);
    req.user=user;
    console.log(`check cookies user value: ${user}`);
    next();
}

module.exports={handleRestrictToLogin,checkCookies};