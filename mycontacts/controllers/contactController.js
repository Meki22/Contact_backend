const  asyncHandler= require("express-async-handler");
const contact = require("../models/contactModel");
const { default: mongoose } = require("mongoose");



const getContacts = asyncHandler(async (req,res) => {
    contacts = await contact.find();
    res.status(200).json(contacts);
});

const createContact = asyncHandler( async(req,res) => {
   
    console.log(" the request body is " , req.body);
    const {name,email,phone}= req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
   const contacts = await contact.create ({
        name,
        email,
        phone,
    });
    res.status(201).json(contacts);
});

const getContact = asyncHandler(async (req,res) => {
    const contacts = await contact.getbyid(req.params.id);
    if(!contacts)
    {
        res.status(404);
        throw new error("contact not found ");
    }

    res.status(200).json(contacts);
});

const updateContact =  asyncHandler(async(req,res) => {
    const contacts = await contact.getbyid(req.params.id);
    if(!contacts)
    {
        res.status(404);
        throw new error("contact not found ");
    }
    const updatedContact= await contact.getbyid(
        req.params.id,
        req.name,
        {new:true}
    );
    res.status(200).json(updatedContact);
});

const deleteContact =  async (req,res) => {
    const contacts = await contact.getbyid(req.params.id);
    if(!contacts)
    {
        res.status(404);
        throw new error("contact not found ");
    }
    await contact.remove();
    res.status(200).json({message: `delete contact for ${req.params.id}`});
};





module.exports={getContacts,createContact,getContact,updateContact,deleteContact};