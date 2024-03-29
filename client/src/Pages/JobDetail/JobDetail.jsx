import { Box, Container, Grid } from "@mui/material"
import CommonPage from "../../components/commonPage/CommonPage"

const JobDetail = () => {
    return (
        <>
            <CommonPage value="Job Detail" />
            <Box>
                <Container sx={{
                    borderTop: "5px solid #fe9703",
                    background: "#FFF",
                    padding: "50px"
                }}>
                    <Grid container>

                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default JobDetail