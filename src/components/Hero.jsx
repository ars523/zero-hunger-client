import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import hero_image from '../assets/Hero_image1.jpg'
import { Stack } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
function Hero() {
    const navigate = useNavigate()
    return (
        <Grid container sx={{ background: '#F3EFEF' }}>
            <Grid item md={6} sx={{ background: '#F3EFEF' }}>
                <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                    <Typography
                        variant='h4'
                        align='center'
                        sx={{
                            p: '0 40px',
                            fontWeight: '600',
                            mb: '20px'
                        }}>
                        Giving is not just about make a donation, It's about making difference
                    </Typography>
                    <Button
                        variant='contained'
                        endIcon={<ArrowForwardIcon />}
                        onClick={()=>navigate('/donate')}
                    >
                        Donate your Food
                    </Button>
                </Stack>
            </Grid>
            <Grid item md={6}>
                <img style={{ width: '100%' }} src={hero_image} alt='Food donation' />
            </Grid>
        </Grid>
    )
}

export default Hero