import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
// side bar
import Component from "./pages/Component";
import Home from "./pages/Home";
import Duel from "./pages/Duel";
import Loot from "./pages/Loot";
import Wheel from "./pages/Wheel";
import Poker from "./pages/Poker";
import Error from "./pages/Error";
import Race from "./pages/Race";
import Profile from "./pages/Profile";
import Exchange from "./pages/Exchange";
import Support from "./pages/Support";

import {
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Router,
} from "react-router-dom";

// import PrivacyPolicy from "./components/privacy_policy/privacy_policy";
// import Home from './pages/home';

function App() {
  return ( 
    <>
      <Routes>
        {/* <Route path="/" element={<PrivacyPolicy/>} exact> */}
        <Route path="/" element={<Home/>} exact>
          <Route path="/" element={<Component />} />
          <Route path="/duel" element={<Duel />} />
          <Route path="/loot" element={<Loot />} />
          <Route path="/Wheel" element={<Wheel />} />
          <Route path="/Poker" element={<Poker />} />
          <Route path="/Race" element={<Race />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/support" element={<Support />} />
          <Route path="/Error" element={<Error />} />
        </Route>
      </Routes>

      {/* <Route path="/pages" element={<Component />}></Route> */}

  
    </>
  );
}

export default App;
