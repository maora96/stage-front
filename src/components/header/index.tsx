import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AddDrawer } from "../AddDrawer";
import styles from "./styles.module.scss";
import Logo from "../../assets/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <img src={Logo} />
        <button onClick={toggleDrawer}>adicionar processo</button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className={styles["drawer"]}
        size={500}
      >
        <AddDrawer onClose={toggleDrawer} />
      </Drawer>
    </header>
  );
}
