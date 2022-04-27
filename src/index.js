import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import Home from "./pages/Home.jsx";
import Challenge from './pages/Challenge';
import Profile from "./pages/Profile.jsx";
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import StageGlobal from './pages/StageGlobal';
// import ChallengePersonal from './pages/ChallengePersonal';
import StagePersonal from './pages/StagePersonal';
import PlayerSelect from './pages/PlayerSelect';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="identify" element={<PlayerSelect />} />
      <Route path="profile/:name" element={<Profile />} />
      <Route path="challenge/:id" element={<Challenge />} />
      <Route path="stage/:stage" element={<StageGlobal />} />
      <Route path="profile/:name/stage/:stage" element={<StagePersonal />} />
      {/* <Route path="profile/:name/challenge/:id" element={<ChallengePersonal />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>,
);



// React 404 on refresh:
// https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
// added a block to .htaccess and it works