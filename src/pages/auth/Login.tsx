import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // 로그인 정보 기억 체크박스 상태
  const navigate = useNavigate();

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log("로그인 시도:", email, password);
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPasswordClick = () => {
    navigate("/FindPasswd");
  };

  return (
    <>
      <Header />
      <SignupContainer>
        <SignupForm onSubmit={handleSubmit}>
          <Title>로그인</Title>
          <InputGroup>
            <Label htmlFor="email">이메일</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="이메일을 입력해 주세요"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="비밀번호를 입력해 주세요"
            />
          </InputGroup>
          <OptionsContainer>
            <CheckboxContainer>
              <InputCheckbox
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <LabelCheckbox htmlFor="rememberMe">
                로그인 정보 기억하기
              </LabelCheckbox>
            </CheckboxContainer>
            <ForgotPasswordButton
              type="button"
              onClick={handleForgotPasswordClick}
            >
              비밀번호 변경하기
            </ForgotPasswordButton>
          </OptionsContainer>
          <LoginButton type="submit">로그인</LoginButton>
          <SignupPromptContainer>
            <SignupPromptText>
              계정이 없으신가요?
              <SigupText onClick={handleSignupClick}>가입하기</SigupText>
            </SignupPromptText>
          </SignupPromptContainer>
        </SignupForm>
      </SignupContainer>
    </>
  );
};

export default Login;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputCheckbox = styled.input`
  margin-right: 10px;
`;

const LabelCheckbox = styled.label`
  font-size: 14px;
  color: #666;
  cursor: pointer;
`;
const ForgotPasswordButton = styled.button`
  background: none;
  border: none;
  color: #0fa968;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
`;

const SignupForm = styled.form`
  width: 400px;
  padding: 40px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 50px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #666;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  ::placeholder {
    color: #c0c0c0;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  padding: 12px;
  background-color: #0fa968;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  margin-top: 10px;
`;

const SignupPromptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SignupPromptText = styled.span`
  font-size: 14px;
  color: #666;
`;

const SigupText = styled.span`
  color: #0fa968;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
