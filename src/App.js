import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import HiraganaPage from "./pages/HiraganaPage";
import KatakanaPage from "./pages/KatakanaPage";
import QuizPage from "./pages/QuizPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="hiraganaPage" >
            <Route index element={<HiraganaPage />} />
            <Route path="quizPage/:id" element={<QuizPage />} />
          </Route>
          <Route path="katakanaPage" >
            <Route index element={<KatakanaPage />} />
            <Route path="quizPage/:id" element={<QuizPage />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>

  );

};

export default App;
