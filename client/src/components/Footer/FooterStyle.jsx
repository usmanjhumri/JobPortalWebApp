import BG from '../../assets/footer-bg.png'

const FooterStyle = {
    mainBox: {
        background: "#1c2733",
        textshadow: "none",
        fontfamily: "Montserrat, sans-serif",
        fontweight: "400",
        fontstyle: "normal",
        color: "#667488",
        fontsize: "15px",
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"

    },
    careJobs: {
        color: "white",
        marginLeft: "50px",
        fontSize: "18px"
    },
    detail: {
        fontWeight: 400,
        color: "#a1a6ab;",
        margin: "2rem 0",
        width: "58%",
        marginLeft: "60px"
    },
    copyRight: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "4rem",
        paddingBottom: "1rem"

    },
    allRight: {
        fontWeight: 400,
        color: "#D9D9D9",
        letterSpacing: "1px",
        fontSize: "14px",
    },
    iconsdisplay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2
    },
    information: {
        fontWeight: 700,
        color: "#FFFFFF",
        marginBottom: "1.5rem",
    },
    quickJobs: {
        fontWeight: 700,
        color: "#FFFFFF",
        marginBottom: "1.5rem"
    }
}

export default FooterStyle