import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="primary-navigation underline-indicators flex">
        <CustomLink to={"/"}>All</CustomLink>

        <CustomLink to={"/active"}>Active</CustomLink>

        <CustomLink to={"/complete"}>Completed</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive && "active"}>
      <Link to={to} {...props} className="link">
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
