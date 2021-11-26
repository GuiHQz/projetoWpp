import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    chatIntro: {
        backgroundColor: "#F8F9FA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderBottom: "6px solid #4ADF83",
        "& img": {
            width: "356px",
            height: "auto"
        },
        "& h1": {
            fontSize: "32px",
            color: "#525252",
            fontWeight: "normal",
            marginTop: "30px"
        },
        "& h2": {
            fontSize: "14px",
            color: "#777",
            fontWeight: "normal",
            marginTop: "20px",
            lineHeight: "20px",
            textAlign: "center"
        }
    }
});