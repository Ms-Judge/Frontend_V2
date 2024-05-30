import React from 'react'
import Header from '../../components/Header'
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from '@toast-ui/react-editor'
import styled from '@emotion/styled/macro';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '@toast-ui/editor/dist/i18n/ko-kr';

const SubmitQuestion = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Header />
        <ListWrapper>
          <TitleName>질문하기</TitleName>

        <QuestionTitle>
          <InputGroup className="mb-3" >
            <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
            <Form.Control
              placeholder="제목을 입력해주세요"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </QuestionTitle>

          <EditorWrapper>
            <Editor
              height="350px"
              initialValue=" "
              previewStyle="vertical" // or tab
              initialEditType="wysiwyg"
              // hideModeSwitch= "true"
              language="ko-KR"
              usageStatistics={false} // 통계 수집 거부
            />
          </EditorWrapper>

          {/* 버튼 컴포넌트 */}
          <ButtonWraper>
            {/* 연동할때 리퀘스트 쏘고 목록으로 가도록 onClick 이벤트 적용해야힘. */}
            <SubmitButton>글쓰기</SubmitButton>
            <CancelButton onClick={() => navigate(`/Question`)}>돌아가기</CancelButton>
          </ButtonWraper>
        </ListWrapper>



      </div>
    </div>
  )
}

export default SubmitQuestion

const TitleName = styled.h1`
  text-align: left;
  width: 60%;
  margin-bottom: 20px;
`

const EditorWrapper = styled.div`
  width: 60%;
  margin-bottom: 20px;

`
const ListWrapper = styled.div`
  display: flex; // Flexbox를 활성화합니다.
  flex-direction: column; // 자식 요소들을 세로로 배치합니다.
  align-items: center; // 가로 축에서 중앙 정렬합니다.
  margin-top: 60px;
`
const QuestionTitle = styled.div`
  width: 60%;
`
const ButtonWraper = styled.div`
  display: inline;
  align-items: center;

`;

const SubmitButton = styled(Button)`
  color: black;
  background-color: #43E5A0;
  border: 1px solid #ccc;
  margin-right: 20px;
  &:hover {
    background-color: #28a745; // 행 호버 시 배경색 변경
  }
  &:active {
    background-color: #216c34 !important; // Change background color on active (click)
    border-color: #1c5a2c !important; // Change border color on active (optional)
  }
`;

const CancelButton = styled(Button)`
  color: black;
  background-color: red;
  border: 1px solid #ccc;
  &:hover {
    background-color: #ee7b7b; // 행 호버 시 배경색 변경
  }
  &:active {
    background-color: #cf3333 !important; // Change background color on active (click)
    border-color: #cf3333 !important; // Change border color on active (optional)
  }
  
`;


