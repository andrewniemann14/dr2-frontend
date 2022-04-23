import './index.css'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Challenge from './pages/Challenge';
import Profile from "./pages/Profile.jsx";
import reportWebVitals from './reportWebVitals';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import StageGlobal from './pages/StageGlobal';
// import ChallengePersonal from './pages/ChallengePersonal';
import StagePersonal from './pages/StagePersonal';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="challenge/:id" element={<Challenge />} />
      <Route path="stage/:stage" element={<StageGlobal />} />
      <Route path="profile/:name" element={<Profile />} />
      <Route path="profile/:name/stage/:stage" element={<StagePersonal />} />
      {/* <Route path="profile/:name/challenge/:id" element={<ChallengePersonal />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// React 404 on refresh:
// https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
// added a block to .htaccess and it works