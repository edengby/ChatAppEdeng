const User = require("../models/user");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(!users) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, msg:`show users: ${users}`});
    } catch (err) {
        res.status(500).json({success: false, msg:`show users failed. ${err}`});
    }
}

exports.getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({success: false, msg:`unable to find user: ${user}`});
        }
        res.status(200).json({success: true, msg:`show user: ${user}`});
    }
    catch (err) {
        res.status(500).json({success: false, msg:`show user of id:${userId} failed. ${err}`});
    }
}

exports.createUser = async (req, res) => {
    const userToCreate = req.body;
    try{
        const user = await User.create(userToCreate);
        res.status(201).json({success: true, msg:`user created successfully`, data:user});
    }
    catch (err) {
        res.status(500).json({success: false, msg:`failed to create new user. ${err}`});
    }
}

exports.updateUser = (req, res) => {
    //todo
}

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        await User.deleteOne({ id: userId});
        res.status(200).json({success: true, msg:`deleted user of id: ${userId}`});
    } catch (err) {
        res.status(500).json({success: false, msg:`deleted user of id ${userId}. ${err}`});
    }
}


