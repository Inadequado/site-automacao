import styles from "./solucao.module.css";
import { Star, Zap, SquareCheck } from "lucide-react";

export function Solucao() {
  return (
    <section className={styles.sectionCotent}>
      <div className={styles.sectionTitle}>
        <h2>Menos atrito na rotina. Mais fluidez no atendimento.</h2>
        <p>Tudo funciona com mais clareza para você e para o cliente.</p>
      </div>

      <div className={styles.iconsSection}>
        <div className={styles.Star}>
          <div>
            <Star className={styles.icon} />
          </div>
          <div className={styles.text}>
            <h2>Mais Profssionalismo</h2>
            <h3>
              Ofereça um agendamento mais <br /> rápido e organizado.
            </h3>
          </div>
        </div>

        <div className={styles.Check}>
          <div>
            <SquareCheck className={styles.icon} />
          </div>
          <div className={styles.text}>
            <h2>Economize Tempo</h2>
            <h3>
              Automatize marcações sem depender <br />
              de atendimento manual.
            </h3>
          </div>
        </div>

        <div className={styles.Zap}>
          <div>
            <Zap className={styles.icon} />
          </div>
          <div className={styles.text}>
            <h2>Tenha mais controle</h2>
            <h3>
              Organize a agenda e reduza erros <br /> no seu dia a dia.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
