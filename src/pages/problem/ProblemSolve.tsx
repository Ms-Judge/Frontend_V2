import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import styled from "@emotion/styled";

const ProblemSolve = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const [title, setTitle] = useState("문제 이름");
  const [problemNumber, setProblemNumber] = useState("9999");
  const [timeLimit, setTimeLimit] = useState("시간 제한: 2초");
  const [memoryLimit, setMemoryLimit] = useState("메모리 제한: 256MB");

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(code);
  };

  const handleNavigation = (path: any) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <Container>
        <NavigationBar>
          <NavLeft>
            <NavItem onClick={() => handleNavigation("/ProblemInfo")}>문제 보기</NavItem>
            <NavItem onClick={() => handleNavigation("/ProblemSolve")}>코드 제출</NavItem>
            <NavItem onClick={() => handleNavigation("/submission-status")}>제출 현황</NavItem>
          </NavLeft>
          <NavRight>
            <NavItem onClick={() => handleNavigation("/Question")}>질문 게시판 가기</NavItem>
          </NavRight>
        </NavigationBar>
        <ProblemInfo>
          <Number>{problemNumber}</Number>
          <Title>{title}</Title>
          <Limit>{timeLimit}</Limit>
          <Limit>{memoryLimit}</Limit>
        </ProblemInfo>

        <Form onSubmit={handleSubmit}>
          <TextArea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="여기에 코드를 입력하세요..."
          />
        </Form>
        <ButtonContainer>
          <SubmitButton type="submit">제출하기</SubmitButton>
          <BackButton type="button" onClick={handleBack}>
            뒤로가기
          </BackButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ProblemSolve;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
`;

const NavLeft = styled.div`
  display: flex;
  gap: 20px;
`;

const NavRight = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  cursor: pointer;
  font-size: 18px;
`;

const ProblemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

const Number = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Limit = styled.p`
  font-size: 16px;
  margin: 2px 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 400px;
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

const SubmitButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #dafeef;
  border: 1px solid black;
  border-radius: 10px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fedada;
  border: 1px solid black;
  border-radius: 10px;
`;

const Form = styled.form`
  width: 40%;
  border: 1px solid black;
`;
