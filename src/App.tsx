import { BrowserRouter as Router } from "react-router-dom";
import MainRouters from "./Routes";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <MainRouters />
      </Router>
    </>
  );
}

export default App;