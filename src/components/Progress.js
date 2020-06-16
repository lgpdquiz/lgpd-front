import React from 'react';
import styled from 'styled-components';

const Trackbar = styled.div`
  width: 640px;
  height: 20px;
  background-color: #eabfcb;
  border-radius: 20px;
`;

const CurrentProgress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #007fff;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionsProgress = styled.span`
  margin-bottom: 1.5rem;
  font-size: 32px;
  color: #fff;
`;

function Progress(props) {
  return (
    <Wrapper>
      <h2 style={{ fontSize: '32px', fontWeight: 'regular' }}>Question</h2>
      <QuestionsProgress>
        {props.current}/{props.total}
      </QuestionsProgress>
      <Trackbar>
        <CurrentProgress progress={props.progress} />
      </Trackbar>
    </Wrapper>
  );
}

export default Progress;
