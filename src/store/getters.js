export const QUESTION_GETTER = 'QUESTION_GETTER';

const getters = {
  [QUESTION_GETTER]: (state) => {
    let answers = [];
    const question = state.question;
    if (!question) return;

    if (question.type === 'multiple') {
      answers = question.incorrect_answers.concat(question.correct_answer).sort().map(item => ({
        option: item,
        isCorrect: question.correct_answer === item,
      }));
    } else {
      answers = [
        { option: 'True', isCorrect: question.correct_answer === 'True' },
        { option: 'False', isCorrect: question.correct_answer === 'False' },
      ];
    }

    return ({
      text: question.question,
      answers,
    });
  },
};

export default getters;