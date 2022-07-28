import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import Hamberger from "./Hamberger";
import Router from "next/router";

export default function Navigation() {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disable, setDisable] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (!state.initial) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    }
    if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disableMenu = () => {
    setDisable(!disable);
    setTimeout(() => {
      setDisable(false);
    }, 1200);
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setState({ clicked: false, menuName: "Menu" });
    });

    return () => {};
  });

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link href="/">AF.</Link>
            </div>
            <div className="menu">
              <button disabled={disable} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamberger state={state} />
    </header>
  );
}
