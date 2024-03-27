import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
    {
        icon: <FaMapMarkerAlt style={{
            fontSize: "35px",
            color: "#FFFFFF",
        }} />,
        heading: "Location",
        address: "205 Main Street, 2nd - Floor, D - Block, New York"
    },
    {
        icon: <TfiEmail style={{
            fontSize: "35px",
            color: "#FFFFFF",
        }} />,
        heading: "Email Address",
        address: [
            { link: "mailto:support@gmail.com", text: "support@gmail.com" },
            { link: "mailto:www.jobcare.net", text: "www.jobcare.net" }
        ]
    },
    {
        icon: <FaPhoneVolume style={{
            fontSize: "35px",
            color: "#FFFFFF",
        }} />,
        heading: "Phone Number",
        address: [
            { link: "tel:+923001234567", text: "+923001234567" },
            { link: "tel:+0123(456)789", text: "+0123(456)789" }
        ]
    }
];

export default locations