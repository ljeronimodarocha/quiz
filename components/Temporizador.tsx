import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../src/styles/Temporizador.module.css";

interface TemporizadorProps {
  key: any;
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador({
  duracao,
  tempoEsgotado,
}: TemporizadorProps) {
  const duracaoCor = duracao / 3;
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        duration={duracao}
        size={120}
        isPlaying
        onComplete={tempoEsgotado}
        colors={["#BCE596", "#F7B801", "#ED827A", "#ED827A"]}
        colorsTime={[duracao, duracao / 2, duracao / 3, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
