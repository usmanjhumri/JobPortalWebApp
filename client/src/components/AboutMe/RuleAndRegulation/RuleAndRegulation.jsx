import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
const useStyle = makeStyles(() => {
  return {
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
  };
});
const RuleAndRegulation = () => {
  const { container, subContainer, headingContainer, cardContainer, card } =
    useStyle();
  const [faqs] = useState([
    {
      question: "Can I accept both Paypal and Stripe?",
      ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "What available is refund period?",
      ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "Can I accept both Paypal and Stripe?",
      ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "What available is refund period?",
      ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "Where are you from?",
      ans: "Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.",
    },
    {
      question: "What is your opening time?",
      ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "Can I accept both Paypal and Stripe?",
      ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "What available is refund period?",
      ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ]);
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={headingContainer}>
          <Typography color={"primary"}>RULE AND REGULATION</Typography>
          <Typography variant="h3">Guidelines And Rules</Typography>
          <Typography>
            Guidelines are in place for the comfort and safety of everyone –
            please read
          </Typography>
        </Box>
        <Box className={cardContainer}>
          {faqs?.map((quest, ind) => {
            return (
              <Box key={ind} className={card}>
                <Box>
                  <Typography variant="h5">{quest?.question}</Typography>
                </Box>
                <Box>
                  <Typography>{quest?.ans}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default RuleAndRegulation;
