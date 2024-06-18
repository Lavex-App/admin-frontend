import React from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import './navbar.scss';

export const Navbar: React.FC = () => (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Buscar..."/>
                <SearchOutlinedIcon className="icon"/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon"/>
                    Português
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <img className="avatar" src="https://github.com/MrAbade.png"/>
                </div>
            </div>

        </div>
    </div>
);
