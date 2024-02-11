import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'Websites',
        description:
            'I have an eye for design and usability and will build a site for your company or small business.',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'SEO',
        description:
            'Boost your site\'s visibility on search engines to draw more targeted traffic, using proven SEO techniques that help you rank higher.',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'Great user experience',
        description:
            'Visually appealing and easy-to-use interface for your site.',
    },
    {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Custom Software',
        description:
            'I can build custom software tailored to your needs. Helping start-ups bring their ideas to life.',
    },
    {
        icon: <SupportAgentRoundedIcon />,
        title: 'Reliable support',
        description:
            'Count on my responsive support, offering assistance that goes beyond the purchase.',
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Built to last',
        description:
            'Experience unmatched durability that goes above and beyond with lasting investment.',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090a',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4">
                        Services
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Need a digital partner? I'm here to help. A West Chester native that has the experience and keen eye for design to help elevate your business.
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Stack
                                direction="column"
                                color="inherit"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'grey.800',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography fontWeight="medium" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}