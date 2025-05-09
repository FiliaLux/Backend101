import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
    name: String,
    age: {type: Number, min: 18, max: 130}
});

const Agent = mongoose.model("Agent", agentSchema);

export default Agent;