import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../../components/SignUp/SignUpStyle';
import TextImg from '../../assets/hometextBG.png'
import '../Home/Home.css'
import contactStyle from './contactStyle';
import locations from './contactArray';
import { Input } from '@mui/joy';
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { Textarea } from '@mui/joy';
import { LiaPenAltSolid } from "react-icons/lia";
import { Button } from '@mui/joy';
import './contactus.css'

const ContactUs = () => {
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
                                    Contact Us
                                </Typography>
                                <Box mt={1} sx={styles.signinsingup}>
                                    <Link to='/' style={styles.singupsigninhome}>Home</Link>
                                    <ArrowForwardIosIcon sx={styles.loginsinup} />
                                    <Typography sx={styles.loginsinup}>Contact Us</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Container>
            </Box>
            <Box>
                <Container className='containerBox'>
                    <Box sx={contactStyle.contactUsContent}>
                        <Typography sx={contactStyle.contactUs}>
                            CONTACT US
                        </Typography>
                        <Typography variant="h4">
                            We Would Love To Hear From You!
                        </Typography>
                        <Typography sx={contactStyle.sendMessage}>
                            Give us a call or send us a message.
                        </Typography>
                    </Box>
                    <Grid container sx={{ margin: "auto" }}>
                        <Grid item xs={12} md={4}>
                            {
                                locations.map((location, index) => (
                                    <Box key={index} sx={contactStyle.locatinBox}>
                                        <Box sx={contactStyle.locationBox1}>
                                            {location.icon}
                                        </Box>
                                        <Box>
                                            <Typography component='h4' sx={contactStyle.contactHeading}>
                                                {location.heading}
                                            </Typography>
                                            {typeof location.address === 'string' ? (
                                                <Typography sx={contactStyle.locationAdress}>
                                                    {location.address}
                                                </Typography>
                                            ) : (
                                                location.address.map((link, idx) => (
                                                    <Typography key={idx} sx={contactStyle.locationAdress}>
                                                        <a style={contactStyle.emailLink} href={link.link}>{link.text}</a>
                                                    </Typography>
                                                ))
                                            )}
                                        </Box>
                                    </Box>
                                ))
                            }

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box sx={contactStyle.fullNameEmail}>
                                <Input fullWidth sx={{ margin: "1rem 0" }}
                                    placeholder="Enter Your Full Name"
                                    endDecorator={<FaRegUser style={contactStyle.inputicons} />}
                                />
                                <Input fullWidth sx={{ margin: "1rem 0" }}
                                    placeholder="Enter your Email Address"
                                    endDecorator={<MdOutlineEmail style={contactStyle.inputicons} />}
                                />
                            </Box>
                            <Input
                                placeholder="Enter Your Phone Number"
                                endDecorator={<AiOutlinePhone style={contactStyle.inputicons} />}
                                sx={{ margin: "1rem 0" }}
                            />
                            <Textarea
                                placeholder="Write Your Message"
                                startDecorator={<LiaPenAltSolid style={contactStyle.textArea} />}
                                minRows={6}
                            />
                            <Button fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }} type='submit' endDecorator={<MdKeyboardArrowRight />}  >
                                Send Message
                            </Button>


                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box margin="1rem 0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54531.75281800223!2d-94.75610397606694!3d31.32489489590714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8638373d19aab3b1%3A0x494379f4c112bf49!2sLufkin%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1675675000891!5m2!1sen!2s"
                                    style={{
                                        height: "100%",
                                        minHeight: "300px",
                                        width: "100%",
                                        border: "none",
                                    }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ContactUs