const Admins = require('../models/admins.model')
const Children = require('../models/children.model')
const Groups = require('../models/groups.model')
const Orders = require('../models/orders.model')
const Workers = require('../models/workers.model')

const createGroup = async (req, res) => {
    try {
        await Groups.create(req.body)
        res.redirect('/admin/settings')
    } catch (error) {
        console.log(error)
    }
}
const deleteGroup = async (req, res) => {
    try {
        await Groups.findByIdAndDelete(req.params.id)   
        res.redirect('/admin/settings')
    } catch (error) {
        console.log(error)
    }
}
const updateGroup = async (req, res) => {
    try {
        await Groups.findByIdAndUpdate(req.params.id, req.body)   
        res.redirect('/admin/settings')
    } catch (error) {
        console.log(error)
    }
}

const createWorker = async (req, res) => {
    try {
        await Workers.create(req.body)
        res.redirect('/admin/workers')
    } catch (error) {
        console.log(error)
    }
}
const deleteWorker = async (req, res) => {
    try {
        await Workers.findByIdAndDelete(req.params.id)   
        res.redirect('/admin/workers')
    } catch (error) {
        console.log(error)
    }
}
const updateWorker = async (req, res) => {
    try {
        await Workers.findByIdAndUpdate(req.params.id, req.body)   
        res.redirect('/admin/workers')
    } catch (error) {
        console.log(error)
    }
}


const createChildren = async (req, res) => {
    try {
        
        const newChildren = new Children(req.body)
        await newChildren.save()
        
        const groupsId = req.body.groups
        const childrenId = newChildren._id

        await Groups.findByIdAndUpdate(groupsId, { $push: { children: childrenId } })
        
        res.redirect('/admin/groups')
    } catch (error) {
        console.log(error)
    }
}
const deleteChildren = async (req, res) => {
    try {
        const childrenId = req.params.id
        let oldGroupsId = await Children.findById(childrenId)
        oldGroupsId = oldGroupsId.groups

        await Groups.findByIdAndUpdate(oldGroupsId, { $pull: { children: childrenId } })
        
        await Children.findByIdAndDelete(req.params.id)   
        res.redirect('/admin/groups')
    } catch (error) {
        console.log(error)
    }
}
const updateChildren = async (req, res) => {
    try {
        const childrenId = req.params.id
        const groupsId = req.body.groups
        let oldGroupsId = await Children.findById(childrenId)
        oldGroupsId = oldGroupsId.groups


        await Groups.findByIdAndUpdate(oldGroupsId, { $pull: { children: childrenId } })
        await Groups.findByIdAndUpdate(groupsId, { $push: { children: childrenId } })

        await Children.findByIdAndUpdate(req.params.id, req.body)   
        res.redirect('/admin/groups')
    } catch (error) {
        console.log(error)
    }
}

const createAdmin = async (req, res) => {
    try {
        await Admins.create(req.body)
        res.redirect('/admin/admins')
    } catch (error) {
        console.log(error)
    }
}
const deleteAdmin = async (req, res) => {
    try {
        await Admins.findByIdAndDelete(req.params.id)   
        res.redirect('/admin/admins')
    } catch (error) {
        console.log(error)
    }
}
const updateAdmin = async (req, res) => {
    try {
        await Admins.findByIdAndUpdate(req.params.id, req.body)   
        res.redirect('/admin/admins')
    } catch (error) {
        console.log(error)
    }
}

const doneOrder = async (req, res) => {
    try {
        const orderId = req.params.id        
        const newChildren = new Children(req.body)
        await newChildren.save()
        
        const groupsId = req.body.groups
        const childrenId = newChildren._id

        console.log(req.body)
        console.log(orderId)

        await Groups.findByIdAndUpdate(groupsId, { $push: { children: childrenId } })

        await Orders.findByIdAndDelete(orderId)
        
        res.redirect('/admin/orders')
    } catch (error) {
        console.log(error)
    }
}

const deleteOrder = async (req, res) => {
    try {
        await Orders.findByIdAndDelete(req.params.id)   
        res.redirect('/admin/orders')
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createGroup,
    deleteGroup,
    updateGroup,
    createWorker,
    deleteWorker,
    updateWorker,
    createChildren,
    deleteChildren,
    updateChildren,
    createAdmin,
    deleteAdmin,
    updateAdmin,
    doneOrder,
    deleteOrder
}

