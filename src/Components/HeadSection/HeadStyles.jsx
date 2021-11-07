import { makeStyles } from "@mui/styles";

// Styles for head section
export default makeStyles(({ breakpoints, palette }) => {
    return {
        textColored: {
            color: `${palette.primary.main} !important`,
        },
        root: {
            height: "100%",
            minHeight: "90vh",
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            [breakpoints.down("sm")]: {
                minHeight: "75vh",
                marginTop: "5vh",
            },
        },
        welcomeTitle: {
            [breakpoints.down("sm")]: {
                fontSize: "1.5rem !important",
                marginTop: "20px !important",
            },
        },
        title: {
            fontWeight: "bolder !important",
            marginTop: "10px !important",
            marginBottom: "20px !important",
            [breakpoints.down("sm")]: {
                fontSize: "1.8rem !important",
            },
        },
        subtitle: {
            marginBottom: "30px !important",
            [breakpoints.down("sm")]: {
                height: "75px !important"
            },
        },
        heroImage: {
            height: "auto",
            width: "500px",
            borderRadius: "10px",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
            [breakpoints.down("sm")]: {
                width: "260px",
                marginTop: "50px",
            },
        },
        themeBtn: {
            backgroundColor: `${palette.primary.main} !important`,
            boxShadow: "none !important",
            fontWeight: "600 !important",
            color: "#ffffff",
            height: "46px",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
                backgroundColor: `${palette.primary.alt} !important`,
            },
            [breakpoints.down("sm")]: {
                width: "65%",
            },
        },
    };
});