
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

        res.render('admin/dashboard', { 
            title: 'Home Page',
            groups,
            workers,
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
        
        res.render('admin/orders', { 
            title: 'Workers Page',
            orders,
            groups
        })
    } catch (error) {   
        console.log(error)
    }
}
const getWorkers = async (req, res) => {
    try {
        const workers = await Workers.find().lean().populate('groups')
        const groups = await Groups.find().lean()

        res.render('admin/workers', { 
            title: 'Workers Page',
            workers,
            groups
        })
    } catch (error) {
        console.log(error)
    }
}
const getGroups = async (req, res) => {
    try {
        const children = await Children.find().lean().populate('groups')
        const groups = await Groups.find().lean().populate('children')

        res.render('admin/groups', { 
            title: 'Groups Page',
            children,
            groups
        })
    } catch (error) {
        console.log(error)
    }
}
const getSettings = async (req, res) => {
    try {

        const groups = await Groups.find().lean().populate('workers')
        const workers = await Workers.find({status: 'tarbiyachi'}).lean()

        res.render('admin/settings', { 
            title: 'Settings Page',
            groups ,
            workers
        })
    } catch (error) {
        console.log(error)
    }
}
const getAdmins = async (req, res) => {
    try {
        const admins = await Admins.find().lean()
        res.render('admin/admins', { 
            title: 'Admins Page',
            admins
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { 
    getDashboard,
    getOrders,
    getWorkers,
    getGroups,
    getSettings,
    getAdmins,
    
}
