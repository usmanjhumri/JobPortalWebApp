import { Box, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from '../../components/SignUp/SignUpStyle';
import FAQs from '../../components/AboutMe/FAQs/FAQs';
import RuleAndRegulation from '../../components/AboutMe/RuleAndRegulation/RuleAndRegulation';

const About = () => {
    return (
        <>
            <Box sx={styles.SingUp} className="sinupSingin">
                <Container>
                    <Grid container>
                        <Box>
                            <Box sx={styles.containerBox}>
                                <Typography
                                    variant="h1"
                                    sx={styles.register}
                                >
                                    About
                                </Typography>
                                <Box mt={1} sx={styles.signinsingup}>
                                    <Link to='/' style={styles.singupsigninhome}>Home</Link>
                                    <ArrowForwardIosIcon sx={styles.loginsinup} />
                                    <Typography sx={styles.loginsinup}>About</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <FAQs />
            </Box>
            <Box>
                <RuleAndRegulation />
            </Box>
        </>
    )
}

export default About