import { Container, Grid, Typography, Box, } from '@mui/material';
import HomeStyle from './HomeStyle';
import Popular from '../PopularCategory/PopularCategory';
import NewsandBlogs from '../Latest News & Blog/News&Blog';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import LocationOn from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SIDEIMG from '../../assets/homeSide.png'
import TextImg from '../../assets/hometextBG.png'
import './Home.css'
const Home = () => {
    return (
        <>
            <Box sx={HomeStyle.mainBox}>
                <Container>

                    <Grid container >
                        <Box>
                            <span className='circle'></span>
                            <span className='circle circle-yellow'></span>
                            <span className='shape-plus'>+</span>
                        </Box>
                        <Grid item xs={12} md={7} sx={{ margin: "auto" }}>
                            <Box sx={HomeStyle.bgImg}>
                                <Box component="img" maxWidth="100%" src={TextImg} />
                            </Box>
                            <Box sx={{ marginTop: { md: "3rem", xs: "12rem" } }}>
                                <Typography sx={HomeStyle.dreamJobs}>
                                    <span style={{ color: "#fe9703" }}>2560</span> Thousands Dream Jobs Available Now
                                </Typography>
                                <Box mt={4} sx={HomeStyle.searchBox1}>
                                    <Input
                                        placeholder="Your location"
                                        endDecorator={<LocationOn sx={{ color: "#fe9703", fontSize: "18px" }} />}
                                        sx={HomeStyle.searchInput}
                                    />

                                    <Select autoFocus
                                        placeholder="Select a pet…"
                                        indicator={<KeyboardArrowDown />}
                                        sx={HomeStyle.searchSelect}
                                    >
                                        <Option value="dog">Dog</Option>
                                        <Option value="cat">Cat</Option>
                                        <Option value="fish">Fish</Option>
                                        <Option value="bird">Bird</Option>
                                    </Select>


                                    <Button sx={HomeStyle.searchBtn} endDecorator={<ArrowForwardIcon />}>
                                        Find Jobs
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ margin: "auto" }}> <Box mt={20}>
                            <Box component="img" src={SIDEIMG} sx={{
                                maxWidth: "100%",
                                display: { md: "block", xs: "none" }
                            }} />
                        </Box></Grid>
                    </Grid>
                </Container>

            </Box >
            <Popular />
            <NewsandBlogs />

        </>
    )
}

export default Home