import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    chatWindow: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },

    chatWindow_Header: {
        height: "60px",
        borderBottom: "1px solid #CCC",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    chatWindow_HeaderInfo: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    },

    chatWindow_HeaderInfo_avatar: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        marginLeft: "15px",
        marginRight: "15px",
    },

    chatWindow_HeaderInfo_name: {
        fontSize: "17px",
        color: "#000",
    },

    chatWindow_HeaderButtons: {
        display: "flex",
        alignItems: "center",
        marginRight: "15px",
    },

    chatWindow_btn: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    },

    chatWindow_Body: {
        flex: 1,
        overflowY: "auto",
        backgroundColor: "#E5DDD5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')"
    },

    chatWindow_Footer: {
        height: "62px",
        display: "flex",
        alignItems: "center",
    },

    chatWindow_Footer_pre: {
        display: "flex",
        margin: "0 15px",
    },

    chatWindow_Footer_inputArea: {
        flex: 1,
    },

    chatWindow_Input: {
        width: "100%",
        height: "40px",
        border: 0,
        outline: 0,
        backgroundColor: "#FFF",
        borderRadius: "20px",
        fontSize: "15px",
        color: "#4A4A4A",
        paddingLeft: "15px",
    },

    chatWindow_Footer_pos: {
        display: "flex",
        margin: "0 15px",
    },
    
});