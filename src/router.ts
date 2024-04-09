import { Router } from "express";
import memberController from "./controllers/member.controller";
const router = Router();

router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);

export default router;
