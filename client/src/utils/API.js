import axios from "axios";

export default {
  // get all forms owned by a user
  getAllForms: (user_id) => {
    return axios.get("/api/forms/?user=" + user_id);
  },
  // get the first question of the form
  getFirstQuestion: (form_id) => {
    return axios.get("/api/question/?form=" + form_id);
  },
  // get the next question based on a given answer
  getNextQuestion: (answer_id) => {
    return axios.get("/api/question/?answer=" + answer_id);
  },
  // get all answer choices provided by a given question
  getAllAnswers: (question_id) => {
    return axios.get("/api/answers/?question=" + question_id);
  },
  // post new form
  postNewForm: (user_id, formData) => {
    return axios.post("/api/forms/?user=" + user_id, formData);
  },
  // post first question of a form
  postFirstQuestion: (form_id, questionData) => {
    return axios.post("/api/question/?form=" + form_id, questionData);
  },
  // post next questions based on answers
  postNextQuestion: (answer_id, questionData) => {
    return axios.post("/api/question/?answer=" + answer_id, questionData);
  },
  // post an answer for a question
  postNewAnswer: (question_id, answerData) => {
    return axios.post("/api/answers/?question=" + question_id, answerData)
  }
};
