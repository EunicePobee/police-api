import { Router } from "express";
import { addStatement, deleteStatementById, getStatement, getStatementById, patchStatementById } from "../controllers/statement_controller.js";

// Create router
const statementRouter = Router();

// Define routes
statementRouter.post('/statement', addStatement)

statementRouter.get('/statement', getStatement)

statementRouter.get('/statement/:id', getStatementById)

statementRouter.patch('/statement/:id/:caseStatus', patchStatementById)

statementRouter.delete('/statement/:id', deleteStatementById)




// Export router
export default statementRouter;