import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    chatListItem: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        height: "70px",
        "&:hover": {
            backgroundColor: "#F5F5F5"
        },
    },

    chatListItem_Avatar: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginLeft: "25px"
    },

    chatListItem_Lines: {
        flex: "1",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderBottom: "1px solid #EEE",
        paddingRight: "15px",
        marginLeft: "15px",

        flexWrap: "wrap",
        minWidth: 0
    },

    chatListItem_Line: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },

    chatListItem_Name: {
        fontSize: "17px",
        color: "#000"
    },

    chatListItem_Date: {
        fontSize: "12px",
        color: "#999"
    },

    chatListItem_LastMsg: {
        fontSsize: "14px",
        color: "#999",
        display: "flex",
        width: "100%"
    },

    chatListItem_LastMsg_p: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        margin: 0
    }
});