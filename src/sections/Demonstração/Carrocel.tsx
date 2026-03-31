import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./carrocel.module.css";
import smileGreen from "../../assets/smile.svg";
import redSad from "../../assets/sad.svg";

const items = [
  {
    type: "smile",
    text: "Primeiro texto FELIZ",
    icon: smileGreen,
    alt: "Ícone sorrindo",
  },
  {
    type: "sad",
    text: "Primeiro texto TRISTE",
    icon: redSad,
    alt: "Ícone triste",
  },
  {
    type: "smile",
    text: "Segundo texto FELIZ",
    icon: smileGreen,
    alt: "Ícone sorrindo",
  },
  {
    type: "sad",
    text: "Segundo texto TRISTE",
    icon: redSad,
    alt: "Ícone triste",
  },
  {
    type: "smile",
    text: "Terceiro texto FELIZ",
    icon: smileGreen,
    alt: "Ícone sorrindo",
  },
  {
    type: "sad",
    text: "Terceiro texto TRISTE",
    icon: redSad,
    alt: "Ícone triste",
  },
];

const loopItems = [...items, ...items];

export function Carrocel() {
  const [emblaRefLeft, emblaApiTop] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        direction: "forward",
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApiTop) return;

    emblaApiTop.plugins().autoScroll?.play();
  }, [emblaApiTop]);

  const [emblaRefRight, emblaApiBottom] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        direction: "backward",
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApiBottom) return;

    emblaApiBottom.plugins().autoScroll?.play();
  }, [emblaApiBottom]);

  return (
    <section id="demonstracao">
      {/* PRIMEIRA LINHA */}
      <div className={styles.embla}>
        <div className={styles.emblaViewportLeft} ref={emblaRefLeft}>
          <div className={styles.emblaContainer}>
            {loopItems.map((item, index) => (
              <div className={styles.emblaSlide} key={`${item.type}-${index}`}>
                {item.type === "smile" ? (
                  <div className={styles.textBox1}>
                    <div className={styles.icon1}>
                      <img src={item.icon} width={50} alt={item.alt} />
                    </div>
                    <div className={styles.texto1}>{item.text}</div>
                  </div>
                ) : (
                  <div className={styles.textBox2}>
                    <div className={styles.icon}>
                      <img src={item.icon} width={50} alt={item.alt} />
                    </div>
                    <div className={styles.texto1}>{item.text}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SEGUNDA LINHA */}
      <div className={styles.embla}>
        <div className={styles.emblaViewportRight} ref={emblaRefRight}>
          <div className={styles.emblaContainer}>
            {loopItems.map((item, index) => (
              <div className={styles.emblaSlide} key={`${item.type}-${index}`}>
                {item.type === "smile" ? (
                  <div className={styles.textBox1}>
                    <div className={styles.icon1}>
                      <img src={item.icon} width={50} alt={item.alt} />
                    </div>
                    <div className={styles.texto1}>{item.text}</div>
                  </div>
                ) : (
                  <div className={styles.textBox2}>
                    <div className={styles.icon}>
                      <img src={item.icon} width={50} alt={item.alt} />
                    </div>
                    <div className={styles.texto1}>{item.text}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
