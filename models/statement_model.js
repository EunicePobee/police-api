import mongoose, { Schema, model } from "mongoose";


// Define schema
const statementSchema = new Schema({
    incidentType: {
        type: String,
        enum: ['Criminal', 'Non-Criminal'],
        default: 'Criminal'
    },
    civilianStatus: {
        type: String,
        enum: ['Suspect', 'Complainant', 'Witness'],
        default: 'Suspect'
    },
    statement: { type: String },
    caseStatus: {
        type: String,
        enum: ['Open', 'Closed'],
        default: 'Open'
    },
    // civilianId: {type: String},
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})


export const statementModel = model('statement', statementSchema)


// const civilianSchema = new Schema({
//     civilianId: {type: String},
//     firstName: {type: String},
//     middleName: {type: String},
//     lastName: {type: String},
//     dateOfBirth: {type: Date},
//     email: {type: String},
//     phone: {type: String},
//     address: {type: String},
//     nationalId: {type: String},
//     sex: {type: Enum},
//     occupation: {type: String},
//     createdAt: {type: Date},
//     updatedAt: {type: Date},
// })