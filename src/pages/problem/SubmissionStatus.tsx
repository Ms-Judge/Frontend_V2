import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Pagination from "react-bootstrap/Pagination";

// SubmissionStatus 컴포넌트 정의
const SubmissionStatus = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const submissionsPerPage = 7; // 페이지당 보여줄 제출 내역 수

  // 제출 내역 상태 초기화 (20개의 가짜 데이터 생성)
  const [submissions, setSubmissions] = useState(
    new Array(20).fill(null).map((_, index) => ({
      problemNumber: String(index + 1).padStart(4, "0"), // 문제 번호 (0001, 0002, ...)
      title: `A + B = ${index}`, // 문제 제목
      language: "Python", // 사용 언어
      submissionTime: "2024-05-27 10:00", // 제출 시간
      status: index % 2 === 0 ? "맞았습니다." : "틀렸습니다.", // 제출 상태 (맞았습니다. 또는 틀렸습니다.)
    }))
  );

  const totalPages = Math.ceil(submissions.length / submissionsPerPage); // 전체 페이지 수 계산

  const [currentSubmissions, setCurrentSubmissions] = useState([]); // 현재 페이지에 표시할 제출 내역 상태
  useEffect(() => {
    const indexOfLastSubmission = currentPage * submissionsPerPage; // 현재 페이지의 마지막 제출 내역 인덱스
    const indexOfFirstSubmission = indexOfLastSubmission - submissionsPerPage; // 현재 페이지의 첫 제출 내역 인덱스
    // setCurrentSubmissions(
    //   submissions.slice(indexOfFirstSubmission, indexOfLastSubmission) // 현재 페이지에 해당하는 제출 내역 설정
    // );
  }, [currentPage, submissions]);

  const handleNavigation = (path: any) => {
    navigate(path); // navigate 함수를 사용하여 페이지 이동
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

        <SubmissionHeader>
          <SubmissionHeaderItem>문제 번호</SubmissionHeaderItem>
          <SubmissionHeaderItem>문제 이름</SubmissionHeaderItem>
          <SubmissionHeaderItem>언어</SubmissionHeaderItem>
          <SubmissionHeaderItem>제출 일시</SubmissionHeaderItem>
          <SubmissionHeaderItem>정답 여부</SubmissionHeaderItem>
        </SubmissionHeader>

        {/* {currentSubmissions.map((submission, index) => (
          <SubmissionRow key={index} status={submission.status}>
            <SubmissionItem>{submission.problemNumber}</SubmissionItem>
            <SubmissionItem>{submission.title}</SubmissionItem>
            <SubmissionItem>{submission.language}</SubmissionItem>
            <SubmissionItem>{submission.submissionTime}</SubmissionItem>
            <SubmissionItem status={submission.status}>
              {submission.status}
            </SubmissionItem>
          </SubmissionRow>
        ))} */}

        <StyledPagination>
          {Array.from({ length: totalPages }, (_, number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => setCurrentPage(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </StyledPagination>
      </Container>
    </>
  );
};

export default SubmissionStatus;

// 스타일 정의
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

const NavRight = styled.div`
  display: flex;
`;

const SubmissionRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding: 10px 20px;
  margin-top: 10px;
  border: 1px solid #000000;
  background-color: ${({ status }: any) =>
    status === "맞았습니다."
      ? "#DAFEEF" // 맞았습니다. 상태일 때 배경색
      : status === "틀렸습니다."
      ? "#FEDADA" // 틀렸습니다. 상태일 때 배경색
      : "white"};
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

const SubmissionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 10px 20px;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 20px;
`;

const SubmissionHeaderItem = styled.div`
  flex: 1;
  text-align: center;
  &:first-child,
  &:nth-child(2) {
    flex: 2;
    text-align: left;
  }
  &:nth-child(3),
  &:nth-child(4) {
    flex: 1.5;
  }
  &:last-child {
    flex: 1.2;
    text-align: right;
  }
`;

const SubmissionItem = styled(SubmissionHeaderItem)`
  border-bottom: none;
  padding: 0;
  color: ${({ status }: any) =>
    status === "맞았습니다."
      ? "#00AA00" // 맞았습니다. 상태일 때 글자색
      : status === "틀렸습니다."
      ? "#FF0000" // 틀렸습니다. 상태일 때 글자색
      : "black"};
`;

const StyledPagination = styled(Pagination)`
  margin-top: 10px;
  .page-item.active .page-link {
    background-color: #b8fadd; // 활성 페이지의 배경색
    border-color: #b8fadd;
  }
  .page-link {
    color: #0fa968; // 페이지 링크의 기본 색상
  }
  .page-link:hover {
    color: #b8fadd; // 페이지 링크의 호버 색상
  }
`;
