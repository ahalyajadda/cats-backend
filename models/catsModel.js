import mongoose from 'mongoose';

const catSchema = new mongoose.Schema(
  {
    name: { type: String },
    visits: { type: Number },
    catImage: { type: String },
    nickNames: { type: String },
    catAge: { type: String },
  },
  {
    timestamps: true,
  }
);

const cat = mongoose.model('cat', catSchema);
export default cat;
