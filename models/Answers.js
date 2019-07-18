const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answerType: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    // parentQuestionId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Questions"
    // },
    nextQuestion: {
        type: String//Schema.Types.ObjectId,
       // ref: "Questions"
    }
});

const Answers = mongoose.model("Answers", AnswerSchema);

module.exports = Answers;