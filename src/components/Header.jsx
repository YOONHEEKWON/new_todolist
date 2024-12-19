import "../components/header.css";
import { memo } from "react";

function Header() {
  return (
    <header className="header">
      <h2>오늘은 📆</h2>
      <h3>{new Date().toDateString()}</h3>
    </header>
  );
}

export default memo(Header);
