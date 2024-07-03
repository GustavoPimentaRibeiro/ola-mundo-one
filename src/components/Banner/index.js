import styles from "./Banner.module.css";
import circuloGrayScale from "../../assets/circulo_gray_scale.png";
import minhaFoto from "../../assets/minha_foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Gustavo Pimenta Ribeiro,
          estudante de Front-end no curso da Alura. Aqui compartilho meu projeto
          desenvolvido, espero que aprenda algo novo!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloGrayScale}
          aria-hidden={true}
          alt=""
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Gustavo Pimenta Ribeiro"
        />
      </div>
    </div>
  );
}
