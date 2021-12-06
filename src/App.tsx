import React, { useState, useEffect } from "react";
import "./App.css";

import { ChatListItem } from "components/ChatListItem";
import { ChatIntro } from "components/ChatIntro";
import { ChatWindow } from "components/ChatWindow";
//import "./App.styles.ts"

import JadenYuki from "assets/images/JadenYuki.png";
import Yugi from "assets/images/Yugi.jpg";
import Aster from "assets/images/AsterPhoenix.png";

import { Box } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function App() {

    const [chatlist, setChatList] = useState([
        { chatId: 1, title: "Yugi", avatar: Yugi },
        { chatId: 2, title: "Kaiba", avatar: "http://pm1.narvii.com/6372/17ebb12659ee2bf965327a4eab39af1f72cb8541_00.jpg" },
        { chatId: 3, title: "Jaden", avatar: JadenYuki },
        { chatId: 4, title: "Aster", avatar: Aster },
    ]);

    const [activeChat, setActiveChat] = useState({} as any);
    //const style = useStyles();

    return (
        <Box className="app-window">
            <Box className="sidebar">

                <header>
                    <img className="header--avatar" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38843f7b-fba2-463a-b76c-4ad1115ed9f6/dd89w1c-0fc66838-f183-4858-a262-771cf96f419d.jpg/v1/fill/w_1024,h_1223,q_75,strp/zane_truesdale__kaiser_ryo__portrait_by_cgusa223_dd89w1c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIyMyIsInBhdGgiOiJcL2ZcLzM4ODQzZjdiLWZiYTItNDYzYS1iNzZjLTRhZDExMTVlZDlmNlwvZGQ4OXcxYy0wZmM2NjgzOC1mMTgzLTQ4NTgtYTI2Mi03NzFjZjk2ZjQxOWQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eW0Qgr8Us_NMdqs7LNntUOC9AaYaqJtybXNgCwqEBH8" alt="" />
                    <Box className="header--buttons">
                        <Box className="header--btn">
                            <DonutLargeIcon style={{ color: "#919191" }} />
                        </Box>
                        <Box className="header--btn">
                            <ChatIcon style={{ color: "#919191" }} />
                        </Box>
                        <Box className="header--btn">
                            <MoreVertIcon style={{ color: "#919191" }} />
                        </Box>
                    </Box>
                </header>

                <Box className="search">
                    <Box className="search--input">
                        <SearchIcon fontSize="small" style={{ color: "#919191" }} />
                        <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                    </Box>
                </Box>

                <Box className="chatlist">
                    {chatlist.map((item, key) => (
                        <ChatListItem
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatlist[key].chatId}
                            onClick={() => setActiveChat(chatlist[key])}
                        />
                    ))}
                </Box>

            </Box>
            <Box className="contentarea">
                {activeChat.chatId !== undefined &&
                    <ChatWindow />
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro />
                }
            </Box>
        </Box>
    );
}

export default App;