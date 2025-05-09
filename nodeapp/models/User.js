import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String
});

// metodo del modelo

userSchema.staticts.hashPassword = (clearPassword) => {
    return bcrypt.hash(clearPassword, 7);
};

const User = mongoose.model("User", userSchema);

export default User;