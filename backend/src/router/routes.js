import express from'express';
import { allClients } from '../controllers/allClients.js';
import { insertClient } from '../controllers/insertClient.js';
import { sendReply } from '../controllers/sendReply.js';

const router = express.Router();

router.get("/allClients", allClients);
router.post("/insertClient", insertClient);
router.post("/sendReply", sendReply);

export default router;