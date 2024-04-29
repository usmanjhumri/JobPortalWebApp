import { Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    width: "100%",
    maxWidth: "1440px",
    alignItems: "center",
    padding: "20px 0px",
  },
  headingContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textAlign: "center",
    width: "100%",
    maxWidth: "750px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    gap: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    width: "100%",
    maxWidth: "500px",
  },
}));

const FAQs = () => {
  const classes = useStyles();

  const [faqs] = useState([
    {
      question: "How do I apply for a job?",
      ans: "To apply for a job, browse our job listings, and click on the 'Apply Now' button on the job posting that interests you. Follow the instructions provided to complete your application.",
    },
    {
      question: "What should I include in my job application?",
      ans: "When applying for a job, make sure to include a tailored resume highlighting your relevant skills and experiences. Additionally, write a personalized cover letter explaining why you're interested in the position and how your qualifications make you a strong candidate.",
    },
    {
      question: "How long does it take to hear back after applying for a job?",
      ans: "The time it takes to hear back after applying for a job varies depending on the employer and their hiring process. Some employers may respond within a few days, while others may take several weeks.",
    },
    {
      question: "Can I apply for multiple jobs at once?",
      ans: "Yes, you can apply for multiple jobs simultaneously. However, make sure to customize each application to match the specific requirements and qualifications listed in each job posting.",
    },

  ]);

  return (
    <Box className={classes.container}>
      <Box className={classes.subContainer}>
        <Box className={classes.headingContainer}>
          <Typography color="primary">FAQs</Typography>
          <Typography variant="h3">Frequently Asked Questions About Applying for Jobs</Typography>
          <Typography>
            Have questions about the job application process? Check out our FAQs below:
          </Typography>
        </Box>
        <Box className={classes.cardContainer}>
          {faqs.map((faq, index) => (
            <Paper key={index} elevation={3} className={classes.card}>
              <Typography variant="h5">{faq.question}</Typography>
              <Typography>{faq.ans}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQs;
