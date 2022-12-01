import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          {routes.map(({ to, text }) => (
            <li key={to}>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={to}
              >
                {text}
              </NavLink>
            </li>
          ))}
          {/** 
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>

        */}
          {/**<li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>*/}
        </ul>
      </nav>
    </div>
  );


};
const routes = [];
routes.push({
  to: "/",
  text: "Home",
});
routes.push({
  to: "/profile",
  text: "Profile",
});
routes.push({
  to: "/blog",
  text: "Blog",
});