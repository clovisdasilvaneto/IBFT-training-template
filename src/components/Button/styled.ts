import styled from "@emotion/styled";

import { TPalette, TPaletteValue } from "../../theme/config/types";

export const ButtonWrapper = styled.button<{
  color: keyof TPalette;
  fullWidth: boolean;
}>`
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme }) => theme.palette.light.main};
  border: solid 1px
    ${({ theme, color }) => (theme.palette[color] as TPaletteValue)?.light};
  padding: 0.8rem 24px;
  font-size: 20px;
  border-radius: ${({ theme }) => theme.measures.radius};
  cursor: pointer;

  ${({ fullWidth }) => fullWidth && `width: 100%;`};
`;
