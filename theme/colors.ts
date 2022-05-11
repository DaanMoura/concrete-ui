const base = {
    white: '#FFFFFF',
    grayLighter: '#EEEEEE',
    grayLight: '#DDDDDD',
    gray: '#BFBFBF',
    grayDark: '#929292',
    black: '#000000',
    red: '#D64141',
    redLight: '#DD6060',
    redDark: '#B92828',
    yellow: '#E2AE29',
    yellowLight: '#EBC566',
    yellowDark: '#C1931A',
    green: '#3FA74F',
    greenLight: '#6FC97C',
    greenDark: '#358D43',
    cyan: '#38CCC3',
    cyanLight: '#9EE6E2',
    cyanDark: '#2CAAA3',
    blue: '#619BD0',
    blueLight: '#95BCE0',
    blueDark: '#3980C1',
    pink: '#D95EB6',
    pinkLight: '#E48CCB',
    pinkDark: '#CE31A2'
}

const colors = {
    base,
    structure: {
        background: base.white,
        stroke: base.black,
        blackShadow: base.black,
    },
    status: {
        success: base.green,
        warning: base.yellow,
        error: base.red
    },
    text: {
        primary: base.black,
        secondary: base.grayDark,
        negative: base.white,
        disabled: base.gray
    },
    state: {
        white: {
            default: base.white,
            hover: base.grayLighter,
            active: base.grayLight,
            disabled: base.gray
        },
        red: {
            default: base.red,
            hover: base.redLight,
            active: base.redDark,
            disabled: base.gray
        },
        yellow: {
            default: base.yellow,
            hover: base.yellowLight,
            active: base.yellowDark,
            disabled: base.gray
        },
        green: {
            default: base.green,
            hover: base.greenLight,
            active: base.greenDark,
            disabled: base.gray
        },
        cyan: {
            default: base.cyan,
            hover: base.cyanLight,
            active: base.cyanDark,
            disabled: base.gray
        },
        blue: {
            default: base.blue,
            hover: base.blueLight,
            active: base.blueDark,
            disabled: base.gray
        },
        pink: {
            default: base.pink,
            hover: base.pinkLight,
            active: base.pinkDark,
            disabled: base.gray
        }
    }
}

export const colorNames = Object.keys(colors.state)

export default colors