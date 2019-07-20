const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    answerType: {
        type: String,
        required: true
    },
    parentQuestionId: {
        type: Schema.Types.ObjectId,
        ref: "Questions"
    },
    nextQuestion: {
        type: Schema.Types.ObjectId,
        ref: "Questions"
    }
});

const Answers = mongoose.model("Answers", AnswerSchema);

module.exports = Answers;