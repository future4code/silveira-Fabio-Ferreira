import React from "react";
import ReactPlayer from "react-player";
import { DivPlayer } from "./styled";

export const ResponsivePlayer = ({ video, onProgress }) => {
  return (
    <DivPlayer className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?v=${video}`}
        width="100%"
        height="100%"
        controls={true}
        onProgress={onProgress}
      />
    </DivPlayer>
  );
};
