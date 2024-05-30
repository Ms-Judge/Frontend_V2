import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../../components/Header";

const FindPasswd = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const [passwd, setPasswd] = useState("");
  const [isPasswdShown, setIsPasswdShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswdShown(!isPasswdShown);
  };
  const handleSubmit = (event:any) => {
    event.preventDefault();
    if (isVerified) {
      console.log("비밀번호 변경 시도");
    } else {
      console.log("이메일 인증 시도:", email);

      setIsVerified(true);
    }
  };

  const handleSignupClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <SignupContainer>
        <SignupForm onSubmit={handleSubmit}>
          <Title>비밀번호 찾기</Title>
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
          {isVerified && (
            <InputGroup>
              <Label htmlFor="verificationCode">인증 코드</Label>
              <Input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                placeholder="인증 코드를 입력해 주세요"
              />
            </InputGroup>
          )}
          <InputGroup>
            <Label htmlFor="passwd">비밀번호</Label>
            <Input
              type={isPasswdShown ? "text" : "password"} // 상태에 따라 input type 변경
              id="passwd"
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
              required
              placeholder="새로운 비밀번호를 입력해 주세요."
            />
            <label>
              <input type="checkbox" onChange={togglePasswordVisibility} />{" "}
              자세히 보기
            </label>
          </InputGroup>
          <LoginButton type="submit">
            {isVerified ? "비밀번호 바꾸기" : "이메일 인증"}
          </LoginButton>
          <SignupPromptContainer>
            <SignupPromptText>
              비밀번호가 기억나셨나요?
              <SigupText onClick={handleSignupClick}>로그인하기</SigupText>
            </SignupPromptText>
          </SignupPromptContainer>
        </SignupForm>
      </SignupContainer>
    </>
  );
};

export default FindPasswd;

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
