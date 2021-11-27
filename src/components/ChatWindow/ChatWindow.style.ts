import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    chatWindow: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },

    chatWindow_Header: {
        height: "60px",
        borderBottom: "1px solid #CCC",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },

    chatWindow_HeaderInfo: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
    },

    chatWindow_HeaderInfo_avatar: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        marginLeft: "15px",
        marginRight: "15px"
    },

    chatWindow_HeaderInfo_name: {
        fontSize: "17px",
        color: "#000"
    },

    chatWindow_HeaderButtons: {
        display: "flex",
        alignItems: "center",
        marginRight: "15px"
    },

    chatWindow_HeaderButtons_btn: { 
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    chatWindow_Body: {

    },

    chatWindow_Footer: {

    }
});