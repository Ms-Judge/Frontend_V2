import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import Table from 'react-bootstrap/Table';
import { Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { postList } from '../Data';

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
const List = () => {
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
  //   setDataList(postList);
  // }, [])


  return (
    <ListWrapper>
      <TitleName>대회 목록</TitleName>
      <StyledTable bordered hover>
        <thead>
          <tr>
            <th>대회이름</th>
            <th>우승</th>
            <th>시작</th>
            <th>종료</th>
            <th>상태</th>
          </tr>
        </thead>
        {/* {
          dataList ? dataList.map((item, index) => {
            return (
              <tbody>
                <tr key={index} onClick={() => navigate(`/DetailedContest/${item.title}`)}>
                  <td>{item.title}</td>
                  <td>{item.winner}</td>
                  <td>{item.start_time}</td>
                  <td>{item.end_time}</td>
                  <td>{item.state}</td>
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

export default List;

const TitleName = styled.h1`
  text-align: left;
  width: 60%;
  margin-bottom: 20px; // 아래쪽 여백 추가
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
    color: #0FA968;
  }
  .page-link:hover {
    color: #B8FADD;
  }
`;
