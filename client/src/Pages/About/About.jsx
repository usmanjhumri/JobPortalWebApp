import { Box } from '@mui/material'
import FAQs from '../../components/AboutMe/FAQs/FAQs';
import RuleAndRegulation from '../../components/AboutMe/RuleAndRegulation/RuleAndRegulation';
import CommonPage from '../../components/commonPage/CommonPage';

const About = () => {
    return (
        <>
            <CommonPage value="About Us" />
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