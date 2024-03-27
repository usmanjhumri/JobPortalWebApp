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
}
export default jobsStyle