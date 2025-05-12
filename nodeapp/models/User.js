import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String
});

// metodo del modelo

userSchema.statics.hashPassword = clearPassword => bcrypt.hash(clearPassword, 7);

// metodo de las instancias de usuario
//en métodos de instancia no usamos arrow functions

userSchema.methods.comparePassword = function (clearPassword) {
    // this --> user
    return bcrypt.compare(clearPassword, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;