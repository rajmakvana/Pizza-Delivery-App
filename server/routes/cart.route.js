import { Router } from "express";
import { getMenuData } from "../controller/cart.controller.js";

const router = Router();

router.get('/', getMenuData);

export default router;