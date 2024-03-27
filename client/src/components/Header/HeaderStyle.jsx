const keyframes = {
    headerSlideDown: {
        "0%": {
            marginTop: "-100px",
            opacity: 0,
        },
        "30%": {
            marginTop: "-50px",
            opacity: 0,
        },
        "100%": {
            marginTop: 0,
            opacity: 1,
        },
    },
};

const HeaderStyle = {
    upperNavone: {
        background: "#F8F9FA",
        // width: "100%",
    },
    upperNav: {
        position: "fixed",
        top: 0,
        zIndex: 1000,
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        background: "#F8F9FA",
        height: { md: "6vh", xs: "60px", sm: "60px" },
        width: "100%",
        animationName: keyframes.headerSlideDown,
        animationDuration: "0.5s",
        animationTimingFunction: "ease",
        animationFillMode: "forwards",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    mainBox: {
        display: "flex",
        alignContent: "center",
    },
    headerNavBox: {
        position: "fixed",
        zIndex: 1,
        left: 0,
        right: 0,
        top: 0,
        opacity: 9
    },
    HeaderItem: {
        display: "flex",
        alignItems: "center",
        gap: 5
    },
    navbar: {
        width: "100%",
        height: "90px"
    }
}

export default HeaderStyle