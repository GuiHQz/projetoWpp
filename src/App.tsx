import React from "react";
import "./App.css";
//import "./App.styles.ts"
import { Box } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function App() {

    //const style = useStyles();

    return (
        <Box className="app-window">
            <Box className="sidebar">

                <header>
                    <img className="header--avatar" src="https://i.pinimg.com/736x/ad/55/73/ad5573610b7ff7ded5850ba931589cc3.jpg" alt="" />
                    <Box className="header--buttons">
                        <Box className="header--btn">
                            <DonutLargeIcon style={{color: "#919191"}}/>
                        </Box>
                        <Box className="header--btn">
                            <ChatIcon style={{color: "#919191"}}/>
                        </Box>
                        <Box className="header--btn">
                            <MoreVertIcon style={{color: "#919191"}}/>
                        </Box>
                    </Box>
                </header>

                <Box className="search">
                    search
                </Box>

                <Box className="chatlist">
                    chatlist
                </Box>

            </Box>
            <Box className="contentarea">
                Essa é a contentarea
            </Box>
        </Box>
    );
}

export default App;
