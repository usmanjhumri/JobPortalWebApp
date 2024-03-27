import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './index.css';
import FooterStyle from './FooterStyle';
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <Box mt={12} sx={FooterStyle.mainBox} >
                <Container>
                    <Grid container spacing={2} sx={{ padding: "2rem 0px" }}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography component="h1" sx={FooterStyle.careJobs}>CAREJOB</Typography>
                                <Typography sx={FooterStyle.detail}>
                                    Discover the latest in Job with CareJob. Your go-to source for insights, trends,and Internship.
                                    Explore our user-friendly platform for a seamless experience. Elevate your Job journey with us.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <Box>
                                <Typography sx={FooterStyle.information}>
                                    Information
                                </Typography>

                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Looking For A Jobs?</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>International Jobs</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Upload Resume</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Setting & Privacy</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Career Advice</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Freelanc Category</Link>
                                </Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box>
                                <Typography sx={FooterStyle.quickJobs}>
                                    Quick Jobs
                                </Typography>

                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Finance & Banking</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Business & Consulting</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Creative Designer</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Web Developer</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Digital Marketing</Link>
                                </Typography>
                                <Typography sx={{ margin: "0.5rem 0" }}>
                                    <Link className='f-links' to='/'>Senior Manager</Link>
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Divider sx={{ marginTop: "5rem", border: "1px solid  #FFF" }} />
                <Container>
                    <Box sx={FooterStyle.copyRight}>
                        <Box>
                            <Typography sx={FooterStyle.allRight}>
                                ©Copyright2024 All Rights Reserved Usman Latif
                            </Typography>
                        </Box>
                        <Box sx={FooterStyle.iconsdisplay}>
                            <a href="http://" target='_blank'>
                                <BsFacebook />
                            </a>
                            <BsYoutube />
                            <BsLinkedin />
                        </Box>
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default Footer
