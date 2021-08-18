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
    <div id="piano">
      <div id="blackbuttons">
        <button>W</button>
        <button>E</button>
        <button>T</button>
        <button>Y</button>
        <button>U</button>
        <button>O</button>
        <button>P</button>
      </div>
      <div id="whitebuttons">
        <button>A</button>
        <button>S</button>
        <button>D</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>J</button>
        <button>K</button>
        <button>L</button>
        <button>;</button>
      </div>

      {music &&
        Object.entries(music).map(([key, value], i) => (
          <audio key={i} id={key} src={value} />
        ))}
    </div>
  );
};

export default Piano;
