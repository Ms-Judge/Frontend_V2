import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const SignUp = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    console.log("회원가입 정보:", {
      name,
      userId,
      email,
      password,
      confirmPassword,
    });
  };
  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <>
      <Header />
      <SignupContainer>
        <SignupForm onSubmit={handleSubmit}>
          <Title>회원가입</Title>
          <FormGroup>
            <InputGroup>
              <Label htmlFor="email">이메일</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="이메일을 입력해 주세요."
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="confirmPassword">비밀번호 재확인</Label>
              <Input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="비밀번호를 다시 입력해주세요."
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <Label htmlFor="password">비밀번호</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="비밀번호를 입력해 주세요."
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="userId">사용자 ID</Label>
              <Input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                placeholder="사용할 ID를 입력해 주세요."
              />
            </InputGroup>
          </FormGroup>
          <SubmitButton type="submit">회원가입</SubmitButton>
          <LoginPromptText>
            계정이 없으신가요?
            <LoginText onClick={handleLoginClick}>로그인</LoginText>
          </LoginPromptText>
        </SignupForm>
      </SignupContainer>
    </>
  );
};

export default SignUp;

const LoginPromptText = styled.span`
  font-size: 14px;
  color: #666;
`;

const LoginText = styled.span`
  color: #0fa968;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const SignupForm = styled.form`
  width: 800px;
  height: 50%;
  padding: 40px;
  background-color: white;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  flex: 1;
  min-width: 45%;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Input = styled.input`
  width: 90%;
  height: 2em;
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ccc;
  margin-bottom: 0;
  border-radius: 8px;
  ::placeholder {
    color: #c0c0c0;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  color: #666;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  width: 400px;
  padding: 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;
