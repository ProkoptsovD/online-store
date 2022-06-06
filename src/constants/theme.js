import { makeFlexGrid } from "../helpers/makeFlexGrid";

export const theme = {
    colors: {
        accent: {
            '100': '#5ECE7B',
        },
        dark: {
            '100': '#8D8F9A',
            '200': '#43464E',
            '300': '#1D1F22',
            '400': '#000000ba',
        },
        light: {
            '100': '#ffffff',
            '200': '#ffffff80',
        },
        neutral: {
            '300': '#39374838',
            '400': '#E5E5E5',
            '500': '#EEEEEE',
            '600': '#C4C4C4',
        },
        notification: {
            '100': '#fcd703',
        },
        danger: {
            '100': '#F32013',
        },
        success: {
            '100': '#2FB390',
        }
    },
    typography: {
        fontFamily: {
            '1': 'Raleway, sans-serif',
            '2': 'Roboto Condensed, sans-serif',
            '3': 'Source Sans Pro, sans-serif',
            '4': 'Roboto, sans-serif',
        },
        fontWeight: {
            '300': 300,
            '400': 400,
            '500': 500,
            '600': 600,
            '700': 700,
        },
        fontSize: {
            '300': '14px',
            '400': '16px',
            '500': '18px',
            '600': '24px',
            '700': '30px',
            '750': '32px',
            '800': '42px',
        },
        lineHeight: {
            '1': 1,
            '1.2': 1.2,
            '1.6': 1.6,
        },
        letterSpacing: {
            '5': '0.05em',
        }
    },
    shadows: {
        v1: '0px 4px 35px rgba(168, 172, 176, 0.19)',
    },
    transitions: {
        duration: {
            normal: '250ms',
            fast: '150ms',
        },
        function: {
            normal: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
    setTransition: (flag, ...cssPropNames) => {
        let duration = '';
        switch (flag) {
            case 'fast':
                duration = '150';
                break;
            default:
                duration = '250';
                break;
        }

        return cssPropNames.map(propName => `${propName} ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`).join`, `;
    },
    sizes: {
        header: {
            height: '80px',
        },
        actionBar: {
            btn: {
                w: '38px',
                h: '29px',
            },
        },
        currencySwitcher: {
            list: {
                width: '114px',
            },
            arrow: {
                w: '8px',
                h: '4px',
            }
        },
        btn: {
            xs: '20px',
            xss: '24px',
            sm: '32px',
            m: '40px',
            xm: '44px',
            lg: '52px',
            xlg: '63px',
        },
        modal: {
            w: '325px',
        },
        previewCardImage: {
            w: '356px',
            h: '338px',
        }
    },
    flexGrid: (gap, elementsInRow) => makeFlexGrid({
            gap,
            elementsInRow,
        }),
    spacing: (value) => `${4 * value}px`,
}