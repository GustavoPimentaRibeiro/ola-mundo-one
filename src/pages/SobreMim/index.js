import styles from "./SobreMim.module.css";

import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Gustavo</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Gustavo"
        className={styles.fotoSobreMim}
      ></img>
      <p className={styles.paragrafo}>
        Olá, eu sou estudante de Front-end do programa ONE da Alura + Oracle em
        estar participando!
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou no Instituto Federal do Sul de
        Minas Gerais - Campus Passos (IFSUL - Campus Passos), quando fiz a
        faculdade de Ciências da Computação. Eu aprendi lógica de programação,
        algumas linguagens de programação (C/C++, Python, JavaScript e Java),
        conhecimentos teóricos e práticos de como funciona toda a estrutura por
        trás de um software (Front-end e Back-end), algoritmos para melhoria de
        performance e estruturas de dados. Antes mesmo de começar a estudar na
        faculdade, já tinha uma grande paixão por tecnologia, sobre querer saber
        como funciona, como era feito, parecia mágica aos meus olhos!
      </p>
      <p className={styles.paragrafo}>
        Com todo meu percurso de estudo e estágio de 6 meses na empresa Manga
        Tecnologia, tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para softwares, e aprendi muito enquanto
        programava. Depois dessa experiência, ainda tive outra oportunidade de
        trabalhar com a empresa Ranor Rastreamento por 3 meses, onde aprendi
        muito sobre como funciona um sistema mais complexo, onde envolve muitas
        etapas e setores diferentes da empresa.
      </p>
      <p className={styles.paragrafo}>
        Hoje em dia tenho 9 meses de experiência como Desenvolvedor FullStack e
        estou com grande motivação e preparado em busca de novas oportunidades
        no mercado de trabalho!
      </p>
    </PostModelo>
  );
}
