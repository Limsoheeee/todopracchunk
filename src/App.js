import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form"
import List from "./pages/List";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<List />} />
        <Route path={"/edit"} element={<Form />} />
        <Route path={"/edit/:id"} element={<Form />} />
        <Route path={"/:id"} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
