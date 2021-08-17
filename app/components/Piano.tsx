// React
import React, { ReactElement, FC, useState, useEffect } from "react";

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
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    console.log(e.key);
    let audio = document.getElementById(e.key.toUpperCase());
    audio.play();
  };

  const handleKeyUp = (e) => {
    if (sampler) sampler.triggerRelease();
  };

  return (
    <div id="piano">
      <div id="blackbuttons">
        <button>W</button>
        <audio id="W" src={WAudio}></audio>
        <button>E</button>
        <audio id="E" src={EAudio}></audio>
        <button>T</button>
        <audio id="T" src={TAudio}></audio>
        <button>Y</button>
        <audio id="Y" src={YAudio}></audio>
        <button>U</button>
        <audio id="U" src={UAudio}></audio>
        <button>O</button>
        <audio id="O" src={OAudio}></audio>
        <button>P</button>
        <audio id="P" src={PAudio}></audio>
      </div>
      <div id="whitebuttons">
        <button>A</button>
        <audio id="A" src={AAudio}></audio>
        <button>S</button>
        <audio id="S" src={SAudio}></audio>
        <button>D</button>
        <audio id="D" src={DAudio}></audio>
        <button>F</button>
        <audio id="F" src={FAudio}></audio>
        <button>G</button>
        <audio id="G" src={GAudio}></audio>
        <button>H</button>
        <audio id="H" src={HAudio}></audio>
        <button>J</button>
        <audio id="J" src={JAudio}></audio>
        <button>K</button>
        <audio id="K" src={KAudio}></audio>
        <button>L</button>
        <audio id="L" src={LAudio}></audio>
        <button onClick={handleKeyDown}>;</button>
        <audio id=";" src={SemicolonAudio}></audio>
      </div>
    </div>
  );
};

export default Piano;
