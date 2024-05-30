import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../../components/Header";

const AnswerCaseForm = () => {
  const [answerCaseInput, setAnswerCaseInput] = useState("");
  const [answerCases, setAnswerCases] = useState([]);
  const navigate = useNavigate();

  // const handleAddAnswerCase = () => {
  //   setAnswerCases([...answerCases, answerCaseInput]);
  //   setAnswerCaseInput("");
  // };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <Container>
        <TextArea
          value={answerCaseInput}
          onChange={(e) => setAnswerCaseInput(e.target.value)}
          placeholder="정답 케이스를 입력하세요..."
        />
        {/* <Button type="button" onClick={handleAddAnswerCase}>
          정답 케이스 추가
        </Button> */}
      </Container>
      <ButtonContainer>
        <BackButton type="button" onClick={handleBack}>
          뒤로가기
        </BackButton>
      </ButtonContainer>
    </>
  );
};

export default AnswerCaseForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 20px;
  border: 1px solid black;
  margin: auto;
  margin-top: 30px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  ::placeholder {
    color: gray;
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;

  &:hover {
    background-color: #45a049;
  }
`;

const BackButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fedada;
  border: 1px solid black;
  border-radius: 10px;
`;
