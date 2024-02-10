import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/userdetails" element={<UserDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
