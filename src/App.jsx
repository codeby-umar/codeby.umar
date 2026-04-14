import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Works from "./pages/WorkPages";
import About from "./pages/AboutPages";
import Login from "./features/Login";
import Contact from "./pages/ContactPages";
import Notfound from "./components/others/Notfound";


function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/works"
          element={
            <Layout>
              <Works />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
         <Route
          path="/login"
          element={
            <Login/>
          }
        />
        <Route
          path="*"
          element={
            <Notfound/>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
