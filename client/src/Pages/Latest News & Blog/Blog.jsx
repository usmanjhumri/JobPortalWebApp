import { Box, Typography } from "@mui/material";
import CommonPage from "../../components/commonPage/CommonPage";
import { useParams } from "react-router-dom";
import newsBlogArray from "./NewsBlogArray";
const Blog = () => {
    const { id } = useParams()
    const selectedBlog = newsBlogArray.find((blog) => blog.id === parseInt(id))
    return (
        <>
            <CommonPage value="Blog" />
            <Box>
                <Typography variant="h3">{selectedBlog.title}</Typography>
                <Typography>{selectedBlog.description}</Typography>

                <p>usman latif</p>
            </Box>
        </>
    );
};

export default Blog;
