import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./ChatIntro.style";
import logoMainChat from "assets/logoMainChat.png";

export const ChatIntro : React.FC = () => {

    const style = useStyles();

    return (
        <Box className={style.chatIntro}>
            <img src={logoMainChat} alt="" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O Whatsapp conecta seu celular para sincronizar suas mensagens. Para reduzir o uso <br/> de dados, conecte seu celular a uma rede Wi-Fi.</h2>
        </Box>
    );
}