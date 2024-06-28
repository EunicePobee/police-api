import express from "express";
import statementRouter from "./routes/statements.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import { addStatement } from "./controllers/statement_controller.js";
import { getStatement } from "./controllers/statement_controller.js";
import { getStatementById } from "./controllers/statement_controller.js";
import { patchStatementById } from "./controllers/statement_controller.js";
import { deleteStatementById } from "./controllers/statement_controller.js";

// Create server
const server = express();

// Apply middleware
server.use(express.json());

dbConnection();

const connectionString = process.env.Mongo_url

// Use routes
server.use(statementRouter);

// Listening for incoming requests
server.listen(3700, () => {
    console.log('Server listening on port 3700');
});