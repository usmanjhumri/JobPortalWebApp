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
    jobpostedDate: {
        fontSize: "12px",
        color: "#667488",
        fontWeight: 400
    },
    jobandcalendar: {
        display: "flex",
        alignItems: "center",
        gap: 1
    },
    jobtime: {
        fontSize: "12px",
        color: "#26ae61",
        fontWeight: 400,
        background: "#f5f7fc",
        padding: "0 10px",

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
        margin: "3px 0"

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
    lastdateAndJobDetail: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    experienceandpay: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        fontSize: "13px"
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
    jobLastDate: {
        fontSize: "13px",
        display: "flex",
        alignItems: "center",
        gap: 0.2,
        marginLeft: "-6px"
    },
    jobDetailAndIcon: {
        display: "flex",
        alignItems: "center",
        gap: 0.4,
    },
    jobDetailLink: {
        fontSize: "14px",
        fontWeight: 700,
        color: "#26ae61",
        textDecoration: "none"
    },

}
export default jobsStyle