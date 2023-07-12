
const protected = (req, res, next) => {
    try {
        if(req.session.admin && req.session.isLogin) {
            next()
        }else{
            res.redirect('/auth/login')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {protected}

