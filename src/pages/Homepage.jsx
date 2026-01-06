import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

const Homepage = () => {
  return (
    <div>
      <AppNav />
      <PageNav />
      <h1>Worldwise</h1>

      <Link to="/app">App</Link>
    </div>
  );
};

export default Homepage;
