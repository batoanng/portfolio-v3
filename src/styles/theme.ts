import { createTheme } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
    interface CustomPalette {
        cyan: PaletteColorOptions;
        'dark-violet': PaletteColorOptions;
        red: PaletteColorOptions;
        gray: PaletteColorOptions;
        'graylish-violet': PaletteColorOptions;
        'very-dark-blue': PaletteColorOptions;
        'very-dark-violet': PaletteColorOptions;
    }
    interface CustomPaletteColorOptions {
        main: string;
    }

    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
    interface PaletteColorOptions extends CustomPaletteColorOptions {}
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        cyan: true;
        'dark-violet': true;
        red: true;
        gray: true;
        'graylish-violet': true;
        'very-dark-blue': true;
        'very-dark-violet': true;
    }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

export const theme = createTheme({
    palette: {
        primary: createColor('hsl(180, 66%, 49%)'),
        error: createColor('hsl(0, 87%, 67%)'),
        cyan: createColor('hsl(180, 66%, 49%)'),
        'dark-violet': createColor('hsl(257, 27%, 26%)'),
        red: createColor('hsl(0, 87%, 67%)'),
        gray: createColor('hsl(0, 0%, 75%)'),
        'graylish-violet': createColor('hsl(257, 7%, 63%)'),
        'very-dark-blue': createColor('hsl(255, 11%, 22%)'),
        'very-dark-violet': createColor('hsl(260, 8%, 14%)')
    },
    shape: {
        borderRadius: 16
    },
    breakpoints: {
        values: {
            xs: 375,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1440
        }
    },
    typography: {
        button: {
            textTransform: 'none',
            fontWeight: '700'
        }
    }
});
