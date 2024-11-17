import express from "express";
import listings from "../data/listings.json";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(listings);
});

router.get("/:id", (req, res) => {
  const listing = listings.find((l) => l.id === parseInt(req.params.id));
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ error: "Listing not found" });
  }
});

export default router;
