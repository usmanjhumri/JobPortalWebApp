import { Box, Typography } from "@mui/material";
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

const RuleAndRegulation = () => {
  const classes = useStyles();

  const [faqs] = useState([
    {
      question: "What are the eligibility criteria for job applications?",
      ans: "To apply for jobs on our platform, you must meet certain eligibility criteria, such as possessing the required educational qualifications, work experience, and skills specified by the employer in the job description.",
    },
    {
      question: "How do I apply for a job?",
      ans: "To apply for a job, you need to create an account on our platform and complete your profile with accurate and up-to-date information. Once your profile is complete, you can browse through job listings and submit your application by following the instructions provided by the employer.",
    },
    {
      question: "Can I apply for multiple jobs at once?",
      ans: "Yes, you can apply for multiple jobs simultaneously. However, we recommend that you carefully review each job description and tailor your application to highlight your relevant skills and experiences for each position.",
    },
    {
      question: "What happens after I submit my job application?",
      ans: "After you submit your job application, the employer will review your application along with other applicants. If your qualifications and experiences match the requirements of the job, the employer may contact you for further assessment, such as interviews or assessments.",
    },
  ]);

  return (
    <Box className={classes.container}>
      <Box className={classes.subContainer}>
        <Box className={classes.headingContainer}>
          <Typography color="primary">RULE AND REGULATION</Typography>
          <Typography variant="h3">Guidelines And Rules for Job Applications</Typography>
          <Typography>
            To ensure a smooth application process and better understanding of our platform, please review the following guidelines and rules:
          </Typography>
        </Box>
        <Box className={classes.cardContainer}>
          {faqs.map((faq, index) => (
            <Box key={index} className={classes.card}>
              <Typography variant="h5">{faq.question}</Typography>
              <Typography>{faq.ans}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RuleAndRegulation;
