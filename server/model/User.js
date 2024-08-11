import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  skills: [{ type: String }],
});

const User = mongoose.model("User", UserSchema);

export default User;
