import { useEffect, useState } from "react";
import Home from "./pages/index";
import Loader from "./components/loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoaded(false), 3000);
  }, []);

  return (
    <>
      {loaded && <Loader loaded={loaded} />}
      <Home />
    </>
  );
}

export default App;
