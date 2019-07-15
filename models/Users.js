const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    flowchartIds: {
        type: Schema.Types.ObjectId,
        ref: "Flowcharts"
    }
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
