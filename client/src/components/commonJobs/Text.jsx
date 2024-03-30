import { Box, Container, Typography } from '@mui/material'
import CommonJobsStyle from './styles'

const Text = () => {
    return (
        <>
            <Box mt={3}>
                <Container sx={{ textAlign: "center" }}>
                    <Typography variant='h2' sx={CommonJobsStyle.recentJob}>
                        Recent Jobs Available
                    </Typography>
                    <Typography sx={CommonJobsStyle.recentJobssubtitle}>
                        recent job opportunities waiting for your expertise. Our job portal
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Text