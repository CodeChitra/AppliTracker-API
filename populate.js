require("dotenv").config();
const connectDB = require("./db/connect");
const mockData = require("./jobs.json");
const Job = require("./models/Job");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.deleteMany();
    await Job.create(mockData);
    console.log("Success");
  } catch (err) {
    console.log("Error", err);
  }
};

start();
