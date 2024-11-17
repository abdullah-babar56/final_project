import express from "express";
import listingsRoutes from "./routes/listings.js";
import bookingsRoutes from "./routes/bookings.js";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/listings", listingsRoutes);
app.use("/api/bookings", bookingsRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
