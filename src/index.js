import './index.css'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Challenge from './pages/Challenge';
import Profile from "./pages/Profile.jsx";
import ProfileStage from "./pages/ProfileStage.jsx";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="challenge/:id" element={<Challenge />} />
      <Route path="profile/:name" element={<Profile />} />
      <Route path="profile/:name/stage/:stage" element={<ProfileStage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
