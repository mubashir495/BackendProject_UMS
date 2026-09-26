import express from "express";
import {
  createJobPost,
  getAllJobPosts,
  getJobPostById,
  updateJobPost,
  changeJobPostStatus,
  deleteJobPost,
  getJobPostStats,
} from "../../Controllers/CMS/jobPost.controller.js";
import { authMiddleware } from "../../Middleware/authMiddleware.js";
import { checkPermission } from "../../Middleware/checkPermission.js";

const router = express.Router();
router.get("/", getAllJobPosts);
router.get("/stats", authMiddleware, checkPermission("jobpost:view"), getJobPostStats);
router.get("/:id", getJobPostById);
router.post("/", authMiddleware, checkPermission("jobpost:create"), createJobPost);
router.put("/:id", authMiddleware, checkPermission("jobpost:update"), updateJobPost);
router.patch(
  "/:id/status",
  authMiddleware,
  checkPermission("jobpost:update"),
  changeJobPostStatus
);
router.delete("/:id", authMiddleware, checkPermission("jobpost:delete"), deleteJobPost);

export default router;