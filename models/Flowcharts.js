const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlowchartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "Questions"
    }
});

const Flowcharts = mongoose.model("Flowcharts", FlowchartSchema);

module.exports = Flowcharts;