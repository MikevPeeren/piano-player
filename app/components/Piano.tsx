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
      audio.play();
    }
  };

  const checkValidKey = (key: string) => {
    return Object.keys(music).includes(key);
  };

  return (
    <div id="piano" className="w-5/6 md:w-full h-full md:mx-4">
      <div className="flex justify-center h-full">
        <div id="buttons" className="relative">
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            A
          </button>
          <button
            type="button"
            className={`${styles.blackButton_firstKey} bg-black text-white absolute z-10 rounded-xl w-8 md:w-14 h-1/4 md:h-2/4`}
          >
            W
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            S
          </button>

          <button
            type="button"
            className={`${styles.blackButton_secondKey} bg-black text-white absolute z-10 rounded-xl w-8 md:w-14 h-1/4 md:h-2/4`}
          >
            E
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            D
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            F
          </button>
          <button
            type="button"
            className={`${styles.blackButton_thirdKey} bg-black text-white absolute z-10 rounded-xl w-8 md:w-14 h-1/4 md:h-2/4`}
          >
            T
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            G
          </button>
          <button
            type="button"
            className={`${styles.blackButton_fourthKey} bg-black text-white absolute z-10 rounded-xl w-8 md:w-14 h-1/4 md:h-2/4`}
          >
            Y
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            H
          </button>
          <button
            type="button"
            className={`${styles.blackButton_fifthKey} bg-black text-white absolute z-10 rounded-xl w-8 md:w-14 h-1/4 md:h-2/4`}
          >
            U
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            J
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            K
          </button>
          <button
            type="button"
            className={`${styles.blackButton_sixthKey} bg-black text-white absolute z-10 rounded-xl w-8 md:w-14 h-1/4 md:h-2/4`}
          >
            O
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            L
          </button>
          <button
            type="button"
            className={`${styles.blackButton_seventhKey} bg-black text-white absolute z-10 rounded-xl w-8 md:w-14 h-1/4 md:h-2/4`}
          >
            p
          </button>
          <button
            type="button"
            className="bg-white border-2 border-black rounded-xl w-12 md:w-24 h-1/4 md:h-3/4"
          >
            ;
          </button>
        </div>
      </div>
      {music &&
        Object.entries(music).map(([key, value], i) => (
          <audio key={i} id={key} src={value} />
        ))}
    </div>
  );
};

export default Piano;
