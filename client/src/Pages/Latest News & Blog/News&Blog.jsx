import { Box, Container, Grid, Typography } from "@mui/material";
import "./News&Blogs.css";
import newsBlogStyle from "./newblogstyle";
import { Link } from "react-router-dom";
import newsBlogArray from "./NewsBlogArray";

function NewsandBlogs() {
    return (
        <>
            <Box>
                <Container>
                    <Typography variant="h2" sx={newsBlogStyle.newsblog}>
                        Latest News & Blog
                    </Typography>
                    <Typography sx={newsBlogStyle.detailcontent}>
                        Stay Informed and Inspired: Explore Our Latest News & Blog for Industry Insights and Career Tips
                    </Typography>
                    <Grid container mt={6} spacing={2}>
                        {
                            newsBlogArray.map((item, ind) => {
                                return (
                                    <>
                                        <Grid key={ind} item xs={12} sm={6} md={4}>
                                            <Box className="img-box" sx={{
                                                border: "1px solid #667488",
                                            }}>
                                                <Box
                                                    sx={{
                                                        position: "relative"
                                                    }}>
                                                    <Box>
                                                        <img className="img" src={item.img} style={{
                                                            width: "100%"
                                                        }} />
                                                    </Box>
                                                    <span style={newsBlogStyle.jobdate}>
                                                        <Typography variant="h4" sx={newsBlogStyle.jobdatetime}>
                                                            20
                                                        </Typography>
                                                        <span style={{
                                                            color: "#FFF"
                                                        }}>Jan</span>
                                                    </span>
                                                </Box>
                                                <Box sx={{
                                                    padding: "30px 35px"
                                                }}>
                                                    <Typography variant="h2" sx={newsBlogStyle.jobtitle}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography sx={newsBlogStyle.jobdetail}>
                                                        {item.subtitle}
                                                    </Typography>
                                                    <Box mt={4} textAlign="center">
                                                        <Link to="/" className="readmorebtn">
                                                            Read More
                                                        </Link>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </>
                                )
                            })
                        }

                    </Grid>
                </Container>
            </Box>
        </>

    )
}

export default NewsandBlogs