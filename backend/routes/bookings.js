import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Booking successful", data: req.body });
});

export default router;
