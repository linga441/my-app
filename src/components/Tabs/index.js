import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Tabs() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname.substr(1) || "covid");
  return (
    <div className="tabs">
      <div className={`tab ${active === "covid" ? "active" : ""}`}>
        <Link
          className="tab-link"
          to="/covid"
          onClick={() => {
            setActive("covid");
          }}
        >
          COVID 19
        </Link>
      </div>
      <div className={`tab ${active === "all" ? "active" : ""}`}>
        <Link
          className="tab-link"
          to="/all"
          onClick={() => {
            setActive("all");
          }}
        >
          ALL
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
