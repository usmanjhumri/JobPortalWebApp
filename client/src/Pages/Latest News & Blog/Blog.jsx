import { Box, Container, Typography } from "@mui/material";
import CommonPage from "../../components/commonPage/CommonPage";
import { useParams } from "react-router-dom";
import newsBlogArray from "./NewsBlogArray";
const Blog = () => {
    const { id } = useParams()
    const selectedBlog = newsBlogArray.find((blog) => blog.id === parseInt(id))
    return (
        <>
            <CommonPage value="Blog" />
            <Box mt={4}>
                <Container>
                    <Typography variant="h3" sx={{
                        textAlign: "center"
                    }}>{selectedBlog.title}</Typography>
                    <Typography mt={3}>{selectedBlog.description}</Typography>
                </Container>

            </Box>
        </>
    );
};

export default Blog;
