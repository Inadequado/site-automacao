import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./validacao.module.css";
import validVideo from "../../assets/celular.mp4";

export function Validacao() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { amount: 0.3 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      // Tenta dar play, se falhar aguarda interação do usuário
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Aguarda qualquer toque na tela para tentar de novo
          const tryPlay = () => {
            video.play();
            document.removeEventListener("touchstart", tryPlay);
          };
          document.addEventListener("touchstart", tryPlay, { once: true });
        });
      }
    } else {
      video.pause();
      video.muted = true;
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className={styles.videoSection}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src={validVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        ></video>
      </div>
    </section>
  );
}
