import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      cardBackground: '#e5e5e5',
      cardNumber: '#575757',
      inputColor: 'black',
    },
  },
  utils: {
    // @ts-ignore
    flexCenter: (value = 'row') => ({
      display: 'flex',
      flexDirection: value,
      alignItems: 'center',
      justifyContent: 'center',
    }),
    app: () => ({
      height: '100%',
      padding: '16px 24px',
    }),
    inputBox: () => ({
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.375rem',
      color: '#d3d3d3',
      borderRadius: '0.25rem',
      backgroundColor: '#ecebf1',
    }),
    inputBasic: () => ({
      width: '100%',
      height: '45px',
      textAlign: 'center',
      outline: '2px solid transparent',
      outlineOffset: '2px',
      borderColor: '#9ca3af',
      border: 'none',
      borderRadius: '0.25rem',
      backgroundColor: '#ecebf1',
    }),
    buttonBox: () => ({
      width: '100%',
      textAlign: 'right',
    }),
    buttonText: () => ({
      marginRight: '10px',
    }),
  },
});
