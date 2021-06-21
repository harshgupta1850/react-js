import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/debouncing">Debouncing</Link>
        </li>
        <li>
          <Link to="/closures">Closures</Link>
        </li>
        <li>
          <Link to="/settimeout+closure">Closures with timeout</Link>
        </li>
        <li>
          <Link to="/functions">Functions</Link>
        </li>
        <li>
          <Link to="/callbacks">Callback Functions and event </Link>
        </li>
        <li>
          <Link to="/eventloop">Event Loop </Link>
        </li>
        <li>
          <Link to="/setTimeout">Set timeout </Link>
        </li>
        <li>
          <Link to="/WAP">WAP</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
