const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answerType: {
        type: String,
        required: true
    },
    placeholder: {
        type: String
    },
    nextQuestionId: {
        type: Schema.Types.ObjectId,
        ref: "Questions"
    }
});

const Answers = mongoose.model("Answers", AnswerSchema);

module.exports = Answers;