import "./home.css"
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div className="home">
      <div className="route">
          <div className="route1">
            <Link to="/register">Register</Link>
          </div>
          <div className="route2">
            <Link to="/login">Login</Link>
          </div>
      </div>
    </div>
  );
}
