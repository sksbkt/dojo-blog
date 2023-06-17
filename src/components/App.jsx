

import { Route, Routes } from "react-router-dom";

import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';
import BlogDetails from './Pages/Details/BlogDetails';
import NotFound from "../components/Pages/NotFound/NotFound";
import Layout from './Pages/components/Layout';


function App() {
  return (
    <Routes>
      <Route path="/"
        element={<Layout />}
      >
        <Route index
          element={<Home />}
        />
        <Route path="/blogs/:id"
          element={<BlogDetails />}
        />
        <Route path="/create"
          element={<Create />}
        />
        <Route path="*"
          element={<NotFound />}
        />

      </Route>
    </Routes>
  );
}

export default App;
