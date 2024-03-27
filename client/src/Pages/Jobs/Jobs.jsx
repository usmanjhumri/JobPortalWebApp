import { Box, Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "../../components/SignUp/SignUpStyle";
import TextImg from '../../assets/hometextBG.png'

const Jobs = () => {
    return (
        <>

            <Box sx={styles.SingUp} className="sinupSingin">
                <Container>
                    <Grid container>
                        <Box>
                            <span className='circle'></span>
                            <span className='circle circle-yellow'></span>
                            <span className='shape-plus'>+</span>
                        </Box>
                        <Box sx={{
                            position: "absolute",
                            left: "16%",
                            top: "30%",
                            display: { md: "block", xs: "none" }
                        }}>
                            <Box component="img" maxWidth="100%" src={TextImg} />
                        </Box>
                        <Box>
                            <Box sx={styles.containerBox}>
                                <Typography
                                    variant="h1"
                                    sx={styles.register}
                                >
                                    Jobs
                                </Typography>
                                <Box mt={1} sx={styles.signinsingup}>
                                    <Link to='/' style={styles.singupsigninhome}>Home</Link>
                                    <ArrowForwardIosIcon sx={styles.loginsinup} />
                                    <Typography sx={styles.loginsinup}>Jobs</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Grid container>

                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Jobs