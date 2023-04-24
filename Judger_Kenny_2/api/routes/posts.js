import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:rubric_id", getPost);
router.post("/", addPost);
router.delete("/:rubric_id", deletePost);
router.put("/:rubric_id", updatePost);

export default router;
