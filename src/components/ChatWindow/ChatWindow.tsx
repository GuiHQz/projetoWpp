import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./ChatWindow.style";

import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

export const ChatWindow: React.FC = () => {

    const style = useStyles();

    return (
        <Box className={style.chatWindow}>
            <Box className={style.chatWindow_Header}>

                <Box className={style.chatWindow_HeaderInfo}>
                    <img className={style.chatWindow_HeaderInfo_avatar} src="https://avatarfiles.alphacoders.com/169/169719.png" alt="" />
                    <Box className={style.chatWindow_HeaderInfo_name}>Nome da Pessoa</Box>
                </Box>

                <Box className={style.chatWindow_HeaderButtons}>

                    <Box className={style.chatWindow_btn}>
                        <SearchIcon style={{ color: "#919191" }} />
                    </Box>
                    <Box className={style.chatWindow_btn}>
                        <AttachFileFile style={{ color: "#919191" }} />
                    </Box>
                    <Box className={style.chatWindow_btn}>
                        <MoreVertIcon style={{ color: "#919191" }} />
                    </Box>

                </Box>
            </Box>
            <Box className={style.chatWindow_Body}>

            </Box>
            <Box className={style.chatWindow_Footer}>

                <Box className={style.chatWindow_Footer_pre}>

                    <Box className={style.chatWindow_btn}>
                        <InsertEmoticonIcon style={{ color: "#919191" }} />
                    </Box>

                </Box>

                <Box className={style.chatWindow_Footer_inputArea}>
                    <input 
                        className={style.chatWindow_Input} 
                        type="text"
                        placeholder="Digite uma mensagem" />
                </Box>

                <Box className={style.chatWindow_Footer_pos}>

                    <Box className={style.chatWindow_btn}>
                        <SendIcon style={{ color: "#919191" }} />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}