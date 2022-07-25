import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

export const Feed = () => {
  useProtectedPage();
  return <div>Feed</div>;
};
