import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./carrocel.module.css";
import smileGreen from "../../assets/smile.svg";
import redSad from "../../assets/sad.svg";

const items = [
  {
    type: "smile",
    text: "Site próprio da barbearia personalizado com sua marca, logo e link para agendamento.",
    icon: smileGreen,
    alt: "Ícone sorrindo",
  },
  {
    type: "sad",
    text: "Perguntas frequentes cobrando respostas imediatas a todo momento.",
    icon: redSad,
    alt: "Ícone triste",
  },
  {
    type: "smile",
    text: "Atendimento automático que responde por você enquanto está ocupado",
    icon: smileGreen,
    alt: "Ícone sorrindo",
  },
  {
    type: "sad",
    text: "Reagendar e cancelar manualmente vira troca de mensagens bagunçando toda sua agenda.",
    icon: redSad,
    alt: "Ícone triste",
  },
  {
    type: "smile",
    text: "Agendamentos confirmados com informações detalhadas.",
    icon: smileGreen,
    alt: "Ícone sorrindo",
  },
  {
    type: "sad",
    text: "Agenda bagunçada com confusão de horários e correção toda hora.",
    icon: redSad,
    alt: "Ícone triste",
  },
  {
    type: "smile",
    text: "Serviços e preços claros no site e no Whatsapp para o cliente.",
    icon: smileGreen,
    alt: "Ícone sorrindo",
  },
  {
    type: "sad",
    text: "Atendimento lento e aumentando o tempo de decisão do cliente e criando resistência.",
    icon: redSad,
    alt: "Ícone triste",
  },
  {
    type: "smile",
    text: "Agenda sempre sincronizada e conferida antes de marcar horários.",
    icon: smileGreen,
    alt: "Ícone sorrindo",
  },
  {
    type: "sad",
    text: "placeholder",
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
      <div className={styles.titleCarousel}>
        <h1>A fórmula certa com processo inteligente</h1>
        <p>tudo flui, tudo se encaixa.</p>
      </div>
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
