import { cssVar } from '@toeverything/theme';
import { style } from '@vanilla-extract/css';
export const placeholderButton = style({
  padding: '8px 18px',
  border: `1px solid ${cssVar('borderColor')}`,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: 15,
  lineHeight: '24px',
  ':hover': {
    backgroundColor: cssVar('hoverColor'),
  },
});
export const button = style({
  userSelect: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: cssVar('hoverColor'),
  },
});
