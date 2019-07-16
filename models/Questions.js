const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answerIds: {
        type: Schema.Types.ObjectId,
        ref: "Answers"
    }
});


const Questions = mongoose.model("Questions", QuestionSchema);

module.exports = Questions;