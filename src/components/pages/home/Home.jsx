import "./home.css"

export default function Home() {
  return (
    <div className="home">
      <div className="route">
          <div className="route1">
            <a className="btn1" href="/register">Register</a>
          </div>
          <div className="route2">
            <a className="btn2" href="/login">Login</a>
          </div>
      </div>
    </div>
  );
}
