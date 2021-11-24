import React from "react";
import "./ChatListItem.css"
import { Box } from "@material-ui/core";
import { useStyles } from "./ChatListItem.style";

export const ChatListItem: React.FC = () => {

    const style = useStyles();

    return (
        <Box className={style.chatListItem}>
            <img className={style.chatListItem_Avatar} src="https://i.pinimg.com/originals/70/9d/79/709d79d4bc98574cb85e060063a7e618.jpg" alt="" />
            <Box className={style.chatListItem_Lines}>
                <Box className={style.chatListItem_Line}>
                    <Box className={style.chatListItem_Name}>Seto Kaiba</Box>
                    <Box className={style.chatListItem_Date}>20:30</Box>
                </Box>
                <Box className={style.chatListItem_Line}>
                    <Box className={style.chatListItem_LastMsg}>
                        <p className={style.chatListItem_LastMsg_p}>Você possui um deck de segunda pra um duelista de quinta</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}