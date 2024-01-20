import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="text-3xl">Navbar</div>
      <Outlet />
    </>
  );
}

export default App;
