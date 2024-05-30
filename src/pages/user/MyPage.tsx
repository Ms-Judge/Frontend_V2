import React, { useState, ChangeEvent } from "react";
import Header from "../../components/Header";
import styled from "@emotion/styled";

interface User {
  nickname: string;
  email: string;
  profileImage: string;
  affiliation: string;
}

const MyPage = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    nickname: "홍길동",
    email: "honggildong@example.com",
    profileImage: "https://via.placeholder.com/150",
    affiliation: "무소속",
  });

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleWithdrawClick = () => {
    console.log("탈퇴 클릭됨");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <Container>
        <ProfileSection>
          <ProfileImage
            src={user.profileImage}
            alt={`${user.nickname}의 프로필`}
          />
          <InfoBox>
            {isEditMode ? (
              <>
                <LabelInputContainer>
                  <Label>닉네임</Label>
                  <Input
                    type="text"
                    name="nickname"
                    value={user.nickname}
                    onChange={handleInputChange}
                    isEditMode={isEditMode}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label>이메일</Label>
                  <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    isEditMode={isEditMode}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label>소속</Label>
                  <Input
                    type="text"
                    name="affiliation"
                    value={user.affiliation}
                    onChange={handleInputChange}
                    isEditMode={isEditMode}
                  />
                </LabelInputContainer>
              </>
            ) : (
              <>
                <LabelInfoContainer>
                  <Label>닉네임</Label>
                  <UserName>{user.nickname}</UserName>
                </LabelInfoContainer>
                <LabelInfoContainer>
                  <Label>이메일</Label>
                  <UserInfo>{user.email}</UserInfo>
                </LabelInfoContainer>
                <LabelInfoContainer>
                  <Label>소속</Label>
                  <Affiliation>{user.affiliation}</Affiliation>
                </LabelInfoContainer>
              </>
            )}
            <ConsentContainer>
              반례 출력 동의
              <ConsentOptions>
                <ConsentOption>
                  <RadioLabel>
                    동의
                    <RadioInput
                      type="radio"
                      name="consent"
                      value="yes"
                      disabled={!isEditMode}
                    />
                  </RadioLabel>
                </ConsentOption>
                <ConsentOption>
                  <RadioLabel>
                    비동의
                    <RadioInput
                      type="radio"
                      name="consent"
                      value="no"
                      disabled={!isEditMode}
                    />
                  </RadioLabel>
                </ConsentOption>
              </ConsentOptions>
            </ConsentContainer>
            <ButtonContainer>
              <CorrectionButton onClick={handleEditClick}>
                {isEditMode ? "저장하기" : "수정하기"}
              </CorrectionButton>
              <SecessionButton onClick={handleWithdrawClick}>
                탈퇴하기
              </SecessionButton>
            </ButtonContainer>
          </InfoBox>
        </ProfileSection>
      </Container>
    </>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const UserName = styled.h2`
  margin: 0;
`;

const UserInfo = styled.p`
  margin: 5px 0;
`;

const Affiliation = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const LabelInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  flex-direction: column;
`;

const LabelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
`;

const Label = styled.label`
  margin-right: 10px;
  width: 100%;
  text-align: center;
`;

interface InputProps {
  isEditMode: boolean;
}

const Input = styled.input<InputProps>`
  margin: 5px 0;
  padding: 8px;
  width: calc(100% - 16px);
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 15px;

  ${({ isEditMode }) =>
    isEditMode &&
    `
      padding: 12px; 
      font-size: 17px; 
      width: calc(100% - 24px); 
    `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const CorrectionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #43e5a0;
  color: white;
  flex: 1;
  margin-right: 10px;
`;

const SecessionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e01e1e;
  color: white;
  flex: 1;
`;

const RadioInput = styled.input`
  margin-left: 10px;
  margin-right: 5px;
`;

const ConsentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ConsentOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const ConsentOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;
