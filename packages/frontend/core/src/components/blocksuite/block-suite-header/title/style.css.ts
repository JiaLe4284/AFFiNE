import { cssVar } from '@toeverything/theme';
import { style } from '@vanilla-extract/css';
export const title = style({
  fontWeight: 500,
  color: cssVar('textPrimaryColor'),
});
