import express from "express"
import authMiddleWare from "../middleware/auth.js";
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js"

const OrderRouter = express.Router();

OrderRouter.post("/place", authMiddleWare, placeOrder);
OrderRouter.post("/verify", verifyOrder);
OrderRouter.post("/userorders", authMiddleWare, userOrders);
OrderRouter.get("/list", listOrders);
OrderRouter.post("/status", updateStatus);

export default OrderRouter;