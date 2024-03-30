import { selectClasses } from "@mui/joy"

const jobsStyle = {
    searchSelect: {
        width: "100%",
        padding: "0.7rem 1rem",
        margin: "0.7rem 0",
        [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            [`&.${selectClasses.expanded}`]: {
                transform: 'rotate(-180deg)',
            },
        },

    },
    companyname: {
        textDecoration: "none",
        color: "#26ae61",
        margin: "3px 0",
        textTransform: "capitalize",
        fontSize: "14px"
    },
    companyloaction: {
        display: "flex",
        alignItems: "center",
        margin: "3px 0",
        marginLeft: "-6px"
    },
    companycountry: {
        color: "#667488",
        fontSize: "12px",
        margin: "3px 0",
        textTransform: "capitalize"
    },
    jobname: {
        fontSize: "18px",
        fontWeight: 700,
    },
    commonStyle: {
        display: "flex",
        alignItems: "center",
        gap: 3
    },
    jobSearchmainBox: {
        display: { md: "flex", xs: "wrap" },
        alignItems: "center",
        gap: 3,
    },
    jobSearchInput: {
        padding: "0.7rem 1rem",
        margin: "0.7rem 0"
    },
}
export default jobsStyle