import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppAppBar from './AppAppBar'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../getLPTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './Hero'
import Testimonials from './Testimonials'
import Highlight from './Highlight'
import Faq from './Faq'
import LeagueSpartanWoff2 from '../fonts/LeagueSpartan-Regular.woff2'

// const defaultTheme = createTheme({});

// const Hello = () => {
//     return (<div>
//         <div><AppAppBar></AppAppBar></div>
//     </div>)
// }

// document.addEventListener('DOMContentLoaded', () => {
// ReactDOM.render(<Hello />, document.getElementById('hello'))
// })

const defaultTheme = createTheme({
    typography: {
        fontFamily: 'LeagueSpartan',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'LeagueSpartan';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('LeagueSpartan'), local('LeagueSpartan-Regular'), url(${LeagueSpartanWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
});
function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100dvw',
                position: 'fixed',
                bottom: 24,
                fontFamily: 'LeagueSpartan'
            }}
        >
            <ToggleButtonGroup
                color="primary"
                exclusive
                value={showCustomTheme}
                onChange={toggleCustomTheme}
                aria-label="Platform"
                sx={{
                    backgroundColor: 'background.default',
                    '& .Mui-selected': {
                        pointerEvents: 'none',
                    },
                }}
            >
            </ToggleButtonGroup>
        </Box>
    );
}

ToggleCustomTheme.propTypes = {
    showCustomTheme: PropTypes.shape({
        valueOf: PropTypes.func.isRequired,
    }).isRequired,
    toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
    const [mode, setMode] = React.useState('light');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const toggleCustomTheme = () => {
        setShowCustomTheme((prev) => !prev);
    };

    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Box sx={{ bgcolor: 'background.default' }}>
            <Hero></Hero>
                <Highlight></Highlight>
            <Testimonials></Testimonials>
                <Faq></Faq>
            </Box>
            <ToggleCustomTheme
                showCustomTheme={showCustomTheme}
                toggleCustomTheme={toggleCustomTheme}
            />
        </ThemeProvider>
    );
}