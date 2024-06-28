import { statementModel } from "../models/statement_model.js";

// Function to store data in the database
export const addStatement = async (req, res) => {
    try {
        console.log("request", req.body);
        const addData = await statementModel.create(req.body);
        res.status(200).send(addData)

    } catch (error) {
        console.log(error)
    }

}

// Function to get all statements in the database
export const getStatement = async (req, res) => {
    try {
        console.log("request", req.body);
        const getData = await statementModel.find();
        res.status(200).send(getData)
    } catch (error) {
        console.log(error)
    }
}

// Function to get a particular statement in the database
export const getStatementById = async (req, res) => {
    try {
        console.log('request', req.body);
        const getDataById = await statementModel.findById(req.params.id);
        res.status(200).send(getDataById)
    } catch (error) {
        console.log(error)
    }
}

// Function to update a particular statement 
export const patchStatementById = async (req, res) => {
    try {
        const status = req.params.caseStatus
        console.log('request', req.body);
        const patchDataById = await statementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        res.status(200).send(patchDataById)
    } catch (error) {
        console.log(error)
    }
}

// Function to delete a particular statement
export const deleteStatementById = async (req, res) => {
    try {
        console.log('request', req.body);
        const deleteDataById = await statementModel.findByIdAndDelete(req.params.id);
        res.status(200).send('Statement has been deleted')
    } catch (error) {
        console.log(error)
    }
}