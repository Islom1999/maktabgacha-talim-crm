const Admins = require('../models/admins.model') 

const getLogin = async(req, res) => {
    try {
        res.render('login', {
            title: 'Login Page',
            isLogin: true
        })
    } catch (error) {
        console.log(error)
    }
}

const loginAdmin = async(req, res) => {
    try {
        const { username, password } = req.body

        const admin = await Admins.findOne({ username })

        if (!admin) {
            return res.render('login', {
                title: 'Login Page',
                isLogin: true,
                errorMessage: 'Bu foydalanuvchi mavjud emas'
            })
        }

        if(admin.password !== password) {
            return res.render('login', {
                title: 'Login Page',
                isLogin: true,
                errorMessage: 'Parol yoki Username Xato'
            })
        }

        req.session.admin = admin
        req.session.isLogin = true
        req.session.save()

        res.redirect('/admin')

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getLogin,
    loginAdmin
}