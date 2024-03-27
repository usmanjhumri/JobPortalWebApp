import { selectClasses } from "@mui/joy"

const HomeStyle = {
    mainBox: {
        backgroundImage: `url('https://care-job.vercel.app/_next/static/media/01.9a03b3fb.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        minHeight: "750px",
        width: '100%',

    },

    containerBox: {
        // position: 'absolute',
        top: '50%',
        left: '30%'
    },
    TypoColor: {
        color: 'white',
        transform: 'translate(-50%, -50%)',
    },
    SelectBox: {
        backgroundColor: 'white',
        borderRadius: '28px',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    findJobs: {
        borderRadius: '28px',
        px: 9,
        background: '#26ae61',
        textTransform: 'capitalize',
        display: 'flex',
        width: '100%',
        py: 2
    },
    dreamJobs: {
        fontSize: { md: "55px", xs: "30px" },
        fontWeight: 500,
        color: "#FFFFFF",
        lineHeight: 1.2,
    },
    bgImg: {
        position: "absolute",
        left: "6%",
        top: "50%",
        display: { md: "block", xs: "none" }
    },
    searchBox1: {
        display: { md: "flex", xs: "wrap" },
        alignItems: "center",
        background: "#FFF",
        borderRadius: "30px",
    },
    searchInput: {
        borderRight: "none",
        width: "100%",
        padding: "0.7rem 1rem",
        borderRadius: { md: "30px 0 0 30px", xs: "none" },
    },
    searchSelect: {
        width: "100%",
        borderRight: "none",
        padding: "0.7rem 1rem",
        [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            [`&.${selectClasses.expanded}`]: {
                transform: 'rotate(-180deg)',
            },
        },

    },
    searchBtn: {
        borderRadius: { md: "30px", xs: "none" },
        background: "#26ae61",
        padding: "0.7rem 0",
        width: { md: "60%", xs: "100%" }

    }
}
export default HomeStyle