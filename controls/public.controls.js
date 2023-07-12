
const Admins = require('../models/admins.model')
const Children = require('../models/children.model')
const Groups = require('../models/groups.model')
const Orders = require('../models/orders.model')
const Workers = require('../models/workers.model')

const getDashboard = async (req, res) => {
    try {
        const groups = await Groups.find().lean().populate('workers')
        const workers = await Workers.find().lean().populate('groups')
        const children = await Children.find().lean()

        workersLength = workers.length
        childrenLength = children.length

        let amountTushum = 0
        let amountChiqim = 0

        children.forEach(element => {
            amountTushum += element.amount
        });

        workers.forEach(element => {
            amountChiqim += element.amount
        })

        const data = {workersLength, childrenLength, amountTushum, amountChiqim}

        res.render('dashboard', { 
            title: 'Home Page',
            groups,
            workers,
            isPublic: true,
            data
        })
    } catch (error) {
        console.log(error)
    }
}
const getOrders = async (req, res) => {
    try {
        const orders = await Orders.find().lean()
        const groups = await Groups.find().lean()
        
        res.render('orders', { 
            title: 'Workers Page',
            orders,
            groups,
            isPublic: true
        })
    } catch (error) {   
        console.log(error)
    }
}

const getCreateOrders = async (req, res) => {
    try {
        res.render('createOrders', { 
            title: 'Workers Page',
            isPublic: true
        })
    } catch (error) {   
        console.log(error)
    }
}
const createOrder = async (req, res) => {
    try {
        await Orders.create(req.body)
        res.redirect('/orders')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getDashboard,
    getOrders,
    getCreateOrders,
    createOrder
};

