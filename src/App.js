import {BrowserRouter, Routes, Route} from "react-router-dom"
import SharedLayout from "./components/SharedLayout.tsx";
import Home from "./pages/home/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />} path="/">
            <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
