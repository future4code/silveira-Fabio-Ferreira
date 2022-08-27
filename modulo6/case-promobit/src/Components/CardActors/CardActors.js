import React from "react";
import { IMAGE_PATH } from "../../Constants/url";
import { Container, ImageActor, Name, CharacterName, DivText } from "./styled";

export const CardActor = ({ item }) => {
  return (
    <Container>
      <ImageActor src={`${IMAGE_PATH}${item.profile_path}`} />
      <DivText>
        <Name>{item.original_name}</Name>
        <CharacterName>{item.character}</CharacterName>
      </DivText>
    </Container>
  );
};
