import * as React from 'react';
import { useRef, useEffect, useState } from "react";
import {alpha} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from '../images/wixenherowhite.png';
import DarkImage from '../images/wixenheroblack.png';
import MobileImage from '../images/wixencologo_mobile.png';
import MobileDarkImage from '../images/wixencologoblack_mobile.png'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export default function Hero() {
    const showSwal = () => {
        Swal.fire("SweetAlert2 is working!");
    }
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_64k0o38', 'template_rq2w8vl', e.target, 'dqrIodxUYcUOupPSC').then(
            (response) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-middle",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Info submitted successfully. Ryan will be in touch soon."
                });
                e.target.reset()
            },
            (error) => {
            },
        );
    };
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : 'linear-gradient(#02294F, #090E10)',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: {xs: 14, sm: 15},
                    pb: {xs: 8, sm: 12},
                }}
            >

                <Box
                    id="image"
                    sx={(theme) => ({
                        mb: {xs: 5, sm: 10},
                        alignSelf: 'center',
                        height: {xs: 500, sm: 600},
                        width: '100%',
                        backgroundImage: {
                            xs: theme.palette.mode === 'light' ? `url(${MobileImage})` : `url(${MobileDarkImage})`,
                            sm: theme.palette.mode === 'light' ? `url(${Image})` : `url(${DarkImage})`
                        },
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor:
                            theme.palette.mode === 'light'
                                ? alpha('#BFCCD9', 0.5)
                                : alpha('#9CCCFC', 0.1),
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}
                />
                <Stack spacing={2} useFlexGap sx={{width: {xs: '100%', sm: '70%'}}}>
                    <Typography
                        variant="h2"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                    >
                        Get things&nbsp;
                        <Typography
                            variant="h2"
                            sx={{
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            done
                        </Typography>
                    </Typography>

                    <Typography variant="body1" textAlign="center" color="text.secondary">
                        I am a freelance web designer creating digital experiences that captivate and convert your
                        audience.
                    </Typography>
                    <Stack
                        direction={{xs: 'row', sm: 'row'}}
                        alignSelf="center"
                        spacing={2}
                        useFlexGap
                        sx={{pt: 2, mb: 2, mt: 2, width: {xs: 'auto', sm: 'auto'}}}
                    >
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <TextField
                                    sx={{mb: 1}}
                                    id="outlined-basic"
                                    name='user_email'
                                    type="email"
                                    required
                                    size="small"
                                    variant="outlined"
                                    aria-label="Enter your email address"
                                    placeholder="Your email address"
                                    inputProps={{
                                        autocomplete: 'off',
                                        ariaLabel: 'Enter your email address',
                                    }}
                                />
                            </div>
                            <div>

                                <TextField
                                    sx={{mt: 1, mb: 1}}
                                    id="outlined-multiline-flexible"
                                    type="text"
                                    name='user_message'
                                    size="small"
                                    required
                                    multiline
                                    maxRows={4}
                                    variant="outlined"
                                    aria-label="Message"
                                    placeholder="Enter your message"
                                    inputProps={{
                                        autocomplete: 'off',
                                        ariaLabel: 'Enter your email address',
                                    }}
                                />
                            </div>
                            <div>

                                <TextField
                                    sx={{mt: 1, mb: 1}}
                                    id="outlined-multiline-flexible"
                                    type="text"
                                    name='user_phone'
                                    size="small"
                                    variant="outlined"
                                    aria-label="Phone"
                                    placeholder="Phone number"
                                    inputProps={{
                                        autocomplete: 'off',
                                        ariaLabel: 'Enter your phone number',
                                    }}
                                />
                            </div>
                            <div>
                                <Button variant="contained" color="primary" type='submit' alignSelf="center" fullWidth={true} sx={{mt: 1}}>
                                    Contact Me
                                </Button>

                            </div>
                        </form>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}