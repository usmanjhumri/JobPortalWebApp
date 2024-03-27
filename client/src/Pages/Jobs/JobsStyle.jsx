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
}
export default jobsStyle