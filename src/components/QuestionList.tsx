import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import Table from 'react-bootstrap/Table';
import { Button, Pagination } from 'react-bootstrap';
// import { postQuestionList } from '../QuestionData';
import { useNavigate } from 'react-router-dom';

// Table 컴포넌트를 styled-components로 감싸 스타일 정의
const StyledTable = styled(Table)`
  width: 60%;
  margin-bottom: 30px;
  &.table {
    // Table 기본 스타일 정의
    background-color: #B8FADD;
    
    // thead 스타일 정의
    thead {
      tr {
        th {
          background-color: #B8FADD; // 헤더 배경색 변경
          color: black ; // 헤더 글자색 변경
        }
      }
    }
    
    // tbody 스타일 정의
    tbody {
      tr {
        &:hover {
          background-color: #43E5A0; // 행 호버 시 배경색 변경
        }
        td {
          color: #0FA968;
        }
        td:first-child {
          font-weight: 600;
        }
      }
    }
  }
`;



// API 명세서 보고 State로 값 만들기
const QuestionList = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  // 데이터 state
  const [dataList, setDataList] = useState([]);

  // useEffect(() => {
  //   setDataList(postQuestionList);
  // }, [])

  // 명세서 보고 State 만들기
  return (
    <ListWrapper>
      <TitleWrapper>
        <TitleName>질문 목록</TitleName>
        <StyledButton hover onClick={() => navigate(`/SubmitQuestion`)}>
          질문 등록하기
        </StyledButton>
      </TitleWrapper>
      <StyledTable bordered hover>
        <thead>
          <tr>
            <th>제목</th>
            <th>아이디</th>
            <th>게시일</th>
          </tr>
        </thead>
        {/* {
          dataList ? dataList.map((item, index) => {
            return (
              <tbody>
                <tr key={index} onClick={() => navigate(`/ResponseQuestion/${item.title}`)}>
                  <td>{item.title}</td>
                  <td>{item.id}</td>
                  <td>{item.createDate}</td>
                </tr>
              </tbody>
            )
          }) : ''
        } */}
      </StyledTable>
      <StyledPagination>{items}</StyledPagination>
    </ListWrapper>
  );
}

export default QuestionList;

const TitleName = styled.h1`
  text-align: left;
`

const ListWrapper = styled.div`
  display: flex; // Flexbox를 활성화합니다.
  flex-direction: column; // 자식 요소들을 세로로 배치합니다.
  align-items: center; // 가로 축에서 중앙 정렬합니다.
  margin-top: 60px;
`

const StyledPagination = styled(Pagination)`
  .page-item.active .page-link {
    background-color: #B8FADD;
    border-color: #B8FADD;
  }
  .page-link {
    color: black;
  }
  .page-link:hover {
    color: #B8FADD;
  }
`;

const StyledButton = styled(Button)`
  color: black;
  background-color: #43E5A0;
  border: 1px solid #ccc;
  &:hover {
    background-color: #28a745; // 행 호버 시 배경색 변경
  }
`;
const TitleWrapper = styled.div`
    display: flex; // Flexbox 활성화
    justify-content: space-between; // 자식 요소들 사이의 여백을 최대로 설정하여 한 쪽 끝과 다른 쪽 끝에 정렬
    align-items: center; // 세로 축에서의 중앙 정렬을 활성화하여 같은 선 상에 위치하도록 함
    margin-bottom: 20px; // 아래쪽 여백 추가
    width: 60%;
`;
