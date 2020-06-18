import React, { useContext } from 'react';
import styled from 'styled-components';

import QuizContext from '../context/QuizContext';

export const QuestionTitle = styled.span`
  color: #fff;
  font-size: 26px;
  max-width: 600px;
  max-height: 120px;
  text-align: center;
  margin-top: 3rem;
`;

function Question() {
  const { state } = useContext(QuizContext);
  const { currentQuestion, questions } = state;
  const question = questions[currentQuestion];
  return <QuestionTitle>{question.question}</QuestionTitle>;
}

export default Question;
