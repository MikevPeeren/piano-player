// React
import React, {
  ReactElement,
  FC,
  useState,
  useCallback,
  useEffect,
} from "react";

// Black Button Audio
import WAudio from "../audio/W.wav";
import EAudio from "../audio/E.wav";
import TAudio from "../audio/T.wav";
import YAudio from "../audio/Y.wav";
import UAudio from "../audio/U.wav";
import OAudio from "../audio/O.wav";
import PAudio from "../audio/P.wav";

// White Button Audio
import AAudio from "../audio/A.wav";
import SAudio from "../audio/S.wav";
import DAudio from "../audio/D.wav";
import FAudio from "../audio/F.wav";
import GAudio from "../audio/G.wav";
import HAudio from "../audio/H.wav";
import JAudio from "../audio/J.wav";
import KAudio from "../audio/K.wav";
import LAudio from "../audio/L.wav";
import SemicolonAudio from "../audio/;.wav";

import styles from "./Piano.module.scss";

const Piano: FC = (): ReactElement => {
  const music = {
    W: WAudio,
    E: EAudio,
    T: TAudio,
    Y: YAudio,
    U: UAudio,
    O: OAudio,
    P: PAudio,
    A: AAudio,
    S: SAudio,
    D: DAudio,
    F: FAudio,
    G: GAudio,
    H: HAudio,
    J: JAudio,
    K: KAudio,
    L: LAudio,
    ";": SemicolonAudio,
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    const isValidKey = checkValidKey(key);

    // Play the audio behind the Key
    if (isValidKey) {
      let audio = document.getElementById(key);

      // Stopping current Audio if it's the same
      if (audio?.id === key) {
        audio.pause();
        audio.currentTime = 0;
      }
      audio.play();
    }
  };

  const checkValidKey = (key: string) => {
    return Object.keys(music).includes(key);
  };

  return (
    <div id="piano" className="block relative w-full h-80 max-w-4xl">
      <button type="button" className={`${styles.pianoKey}`}>
        A
      </button>
      <button
        type="button"
        className={`${styles.blackButton_firstKey} ${styles.pianoKey} ${styles.pianoKey__black}`}
      >
        W
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        S
      </button>

      <button
        type="button"
        className={`${styles.blackButton_secondKey} ${styles.pianoKey} ${styles.pianoKey__black}`}
      >
        E
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        D
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        F
      </button>
      <button
        type="button"
        className={`${styles.blackButton_thirdKey} ${styles.pianoKey} ${styles.pianoKey__black}`}
      >
        T
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        G
      </button>
      <button
        type="button"
        className={`${styles.blackButton_fourthKey} ${styles.pianoKey} ${styles.pianoKey__black}`}
      >
        Y
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        H
      </button>
      <button
        type="button"
        className={`${styles.blackButton_fifthKey} ${styles.pianoKey} ${styles.pianoKey__black}`}
      >
        U
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        J
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        K
      </button>
      <button
        type="button"
        className={`${styles.blackButton_sixthKey} ${styles.pianoKey} ${styles.pianoKey__black}`}
      >
        O
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        L
      </button>
      <button
        type="button"
        className={`${styles.blackButton_seventhKey} ${styles.pianoKey} ${styles.pianoKey__black}`}
      >
        p
      </button>
      <button type="button" className={`${styles.pianoKey}`}>
        ;
      </button>
      {music &&
        Object.entries(music).map(([key, value], i) => (
          <audio key={i} id={key} src={value} />
        ))}
    </div>
  );
};

export default Piano;
