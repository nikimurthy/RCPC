import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const ClubSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Compare the hashed password
ClubSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('Club', ClubSchema, 'clubs');
