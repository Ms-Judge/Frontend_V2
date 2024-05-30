import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ContestList from "./pages/contest/ContestList";
import OpenContest from "./pages/contest/OpenContest";
import Question from "./pages/question/Question";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import MyPage from "./pages/user/MyPage";
import ProblemInfo from "./pages/problem/ProblemInfo";
import globalStyle from './styles/globalStyle';
import { Global } from "@emotion/react";
import ProblemUpload from "./pages/problem/ProblemUpload";
import FindPasswd from "./pages/auth/FindPasswd";
import DetailedContest from "./pages/contest/DetailedContest";
import ResponseQuestion from "./pages/question/ResponseQuestion";
import SubmitQuestion from "./pages/question/SubmitQuestion";
import ProblemSolve from "./pages/problem/ProblemSolve";
import SolutionUpload from "./pages/problem/SolutionUpload";
import AnswerCaseForm from "./pages/problem/AnswerCaseForm";
import SubmissionStatus from "./pages/problem/SubmissionStatus";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/OpenContest" element={<OpenContest />} />
          <Route path="/ContestList" element={<ContestList />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Mypage" element={<MyPage />} />
          <Route path="/ProblemUpload" element={<ProblemUpload />} />
          <Route path="/FindPasswd" element={<FindPasswd />} />
          <Route path="/DetailedContest/:title" element={<DetailedContest />} />
          <Route path="/ProblemInfo/:problems" element={<ProblemInfo />} />
          <Route path="/ResponseQuestion/:title" element={<ResponseQuestion />} />
          <Route path="/SubmitQuestion" element={<SubmitQuestion />} />
          <Route path="/ProblemSolve" element={<ProblemSolve />} />
          <Route path="/SolutionUpload" element={<SolutionUpload />} />
          <Route path="/AnswerCaseForm" element={<AnswerCaseForm />} />
          <Route path="/SubmissionStatus" element={<SubmissionStatus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
