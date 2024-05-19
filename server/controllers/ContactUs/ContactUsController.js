import transporter from "../../config/emailConfig.js";

const ContactUsController = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, message } = req.body;
    console.log(req.body);
    if (!fullname || !email || !phoneNumber || !message) {
      res
        .status(400)
        .send({ status: "failed", message: "All Fields are Required" });
    }
    const mailSend = {
      from: email,
      to: "usmanwaris1999@gmail.com",
      subject: "Message",
      html: `<p>Name: ${fullname}</p>
             <p>Email: ${email}</p>
             <p>Phone Number: ${phoneNumber}</p>
             <p>Message: ${message}</p>`,
    };
    await transporter.sendMail(mailSend);
    res.status(200).send({
      status: "success",
      message: "Email Sent Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
export default ContactUsController;
