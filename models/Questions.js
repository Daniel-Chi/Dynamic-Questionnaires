const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    parentFlowchartId: {
        type: Schema.Types.ObjectId,
        ref: "Flowcharts"
    },
    parentAnswerId: {
        type: Schema.Types.ObjectId,
        ref: "Answers"
    },
    AnswerIds: [{
        type: Schema.Types.ObjectId,
        ref: "Answers"
    }]
});


const Questions = mongoose.model("Questions", QuestionSchema);

module.exports = Questions;