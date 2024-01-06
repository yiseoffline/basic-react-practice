import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="hello" element={<h2>Hello</h2>}></Route>
      <Route path="movie/:id" element={<Detail/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
  );
}

export default App;
// router = URL을 보고 있는 component