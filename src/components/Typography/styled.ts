import styled from '@emotion/styled'
import { TPalette, TTypography } from '../../theme/config/types'
import { Theme } from '@emotion/react';

type TypographyColorProps = { theme: Theme } & { color: TPalette };
type TypographyFontProps = { theme: Theme } & { font: TTypography };


export const TypographyStyled = styled.p`
  color: ${({theme, color}: TypographyColorProps)=> theme.palette[color].main};
  font-family: ${({theme, font}: TypographyFontProps)=> theme.typography[font]};
`
