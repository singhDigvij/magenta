import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema(
  {
    title: { 
        type: String,
         required: true
         },
    content: {
         type: String,
          required: true
         }, 
    date: { 
        type: String
     },
    author: {
         type: String
         },
  },
  { timestamps: true }
);

const Newsletter = mongoose.model("Newsletter", newsletterSchema);

export {Newsletter}