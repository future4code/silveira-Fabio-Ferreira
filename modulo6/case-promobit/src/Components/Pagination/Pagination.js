import React from "react";
import { ButtonPage, Pages } from "./styled";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <Pages>
      <li>
        <button onClick={() => setOffset(current - 1)} disabled={current === 1}>
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <ButtonPage onClick={() => setOffset(page)}>{page}</ButtonPage>
          </li>
        ))}
      <li>
        <button
          onClick={() => setOffset(current + 1)}
          disabled={current === pages}
        >
          Próximo
        </button>
      </li>
    </Pages>
  );
};
