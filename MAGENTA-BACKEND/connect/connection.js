import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLASDB_URL);
    console.log(
      `Connection to Atlas Cloud Successfull ! Host:`,
      conn.connection.host,
    );
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED", error);
    process.exit(1);
  }
};

export { connectDB };
