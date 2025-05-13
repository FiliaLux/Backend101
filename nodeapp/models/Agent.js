import mongoose, { SchemaTypes } from "mongoose";

const agentSchema = new mongoose.Schema({
    name: String,
    age: {type: Number, min: 18, max: 130},
    updated: {type: Date, default: Date.now},
    owner: {type: SchemaTypes.ObjectId, ref: "User", index: true}
}, {
    collection: "agents"
});

const Agent = mongoose.model("Agent", agentSchema);

export default Agent;