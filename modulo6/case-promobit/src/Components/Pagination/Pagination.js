import React from "react";
import { ButtonPage, Pages } from "./styled";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <Pages>
      {Array.from({ length: MAX_ITEMS })
        .map((_, index) => index + first)
        .map((page) => (
          <ButtonPage onClick={() => setOffset(page)}>{page}</ButtonPage>
        ))}
    </Pages>
  );
};
