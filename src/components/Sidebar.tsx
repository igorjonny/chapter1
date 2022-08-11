import styles from "./Sidebar.module.css";
import nature from "../assets/nature.avif";

import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={nature} />
      <div className={styles.profile}>
        <Avatar src="https://github.com/igorjonny.png" />
        <strong>Igor Jonny </strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
