import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
        </Typography>

        
        <Button variant = "contained" color = "error" href = "#exercises" sx = {{backgroundColor: '#ff2625', padding: '10px'}}>Explore Exercises</Button>

        <Typography fontWeight={600} color="#191970" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        <Typography fontWeight={700} fontSize="32px" fontFamily="Alegreya" lineHeight="35px" mb="23px" mt="30px">
            Recommending Exercises
        </Typography>
    </Box>
  )
}

export default HeroBanner