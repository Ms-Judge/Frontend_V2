import React, { useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const ProblemInfo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("A + B = ?");
  const [problemNumber, setProblemNumber] = useState("0001");
  const [timeLimit, setTimeLimit] = useState("시간 제한: 1초");
  const [memoryLimit, setMemoryLimit] = useState("메모리 제한: 128MB");
  const [problemDescription, setProblemDescription] = useState(
    "‘A + B’를 계산한 뒤, 위 값을 분석한 결과를 출력하시오."
  );
  const [inputExample, setInputExample] = useState("1000 2000 ");
  const [outputExample, setOutputExample] = useState(
    "3000\nA값과 B값의 합\nA값의 3배, B값의 1.5배"
  );

  const handleNavigation = (path:any) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <Container>
        <NavigationBar>
          <NavLeft>
            <NavItem onClick={() => handleNavigation("/ProblemInfo")}>
              문제 보기
            </NavItem>
            <NavItem onClick={() => handleNavigation("/ProblemSolve")}>
              코드 제출
            </NavItem>
            <NavItem onClick={() => handleNavigation("/SubmissionStatus")}>
              제출 현황
            </NavItem>
          </NavLeft>
          <NavRight>
            <NavItem onClick={() => handleNavigation("/Question")}>
              질문 게시판 가기
            </NavItem>
          </NavRight>
        </NavigationBar>
        <ProblemInfos>
          <Number>{problemNumber}</Number>
          <Title>{title}</Title>
          <Limit>{timeLimit}</Limit>
          <Limit>{memoryLimit}</Limit>
        </ProblemInfos>
        <DescriptionSection>
          <SectionTitle>문제</SectionTitle>
          <Description>{problemDescription}</Description>
          <ExampleSection>
            <Example>
              <ExampleTitle>입력</ExampleTitle>
              <ExampleContent>{inputExample}</ExampleContent>
            </Example>
            <Example>
              <ExampleTitle>출력</ExampleTitle>
              <ExampleContent>{outputExample}</ExampleContent>
            </Example>
          </ExampleSection>
          <AlgoTitle>알고리즘</AlgoTitle>
          <Algos>수학, 구현</Algos>
        </DescriptionSection>
      </Container>
    </>
  );
};

export default ProblemInfo;

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
  border-bottom: 1px solid #000;
`;

const NavLeft = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  font-size: 18px;
`;

const ProblemInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #d9d9d9;
  width: 60%;
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

const NavRight = styled.div`
  display: flex;
`;

const DescriptionSection = styled.div`
  width: 60%;
  margin-top: 10px;
  align-items: flex-start;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  display: inline-block;
  text-align: center;
  border-bottom: 1px solid #000;
  width: auto;
`;

const Description = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
  text-align: left;
`;

const ExampleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Example = styled.div`
  width: 45%;
`;

const ExampleTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  display: inline-block;
  text-align: center;
  border-bottom: 1px solid #000;
  width: auto;
`;

const ExampleContent = styled.pre`
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;

  border: 1px solid #000;
`;

const AlgoTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  display: inline-block;
  text-align: center;
  border-bottom: 1px solid #000;
  width: auto;
`;

const Algos = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  text-align: left;
`;
