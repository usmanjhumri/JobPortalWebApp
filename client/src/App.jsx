import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Path } from "./ListofPath/ListOfPath";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserData } from "./RTK/API/api";

function App() {
  const dispatch = useDispatch();
  // const { id, token } = useParams();
  useEffect(() => {
    dispatch(UserData());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        {Path.map((path, i) => {
          return <Route key={i} path={path.path} element={path.component} />;
        })}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
