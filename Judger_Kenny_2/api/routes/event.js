import express from "express";
import {
  addEvent,
  getEvent,
  deleteEvent,
  setStartEventDate,
  setStartEventTime,
  setEndEventDate,
  setEndEventTime,

} from "../controllers/event.js";

//This function handle requests router object (event)

const router = express.Router();

router.post("/eventhome", addEvent);
router.get("/", getEvent);
router.put("/", deleteEvent);

router.post("/", setStartEventTime);
router.post("/", setStartEventDate);
router.post("/", setEndEventTime);
router.post("/", setEndEventDate);

router.get("/", getEventTime);

export default router;
