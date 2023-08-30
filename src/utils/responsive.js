import { css } from "@emotion/react";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 415px) {
      ${props}
    }
  `;
};
