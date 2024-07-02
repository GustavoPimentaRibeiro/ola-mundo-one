import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/" children={"Ola Mundo!"}>
          Inicio
        </MenuLink>
        <MenuLink to="/sobremim" children={"Sobre mim"}>
          Sobre mim
        </MenuLink>
      </nav>
    </header>
  );
}
