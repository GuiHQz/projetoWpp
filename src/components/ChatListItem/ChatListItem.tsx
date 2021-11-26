import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./ChatListItem.style";

interface onClickAction {
    onClick: () => void,
    active: boolean
}

export const ChatListItem: React.FC<onClickAction> = ({onClick, active}) => {

    const style = useStyles();

    return (
        <Box onClick={onClick} className={style.chatListItem}>
            <img className={style.chatListItem_Avatar} src="https://i.ytimg.com/vi/KqkSTh9KoZY/maxresdefault.jpg" alt="" />
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