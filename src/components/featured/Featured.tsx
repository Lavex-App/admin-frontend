import React from 'react';

import {CircularProgressbar} from "react-circular-progressbar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "react-circular-progressbar/dist/styles.css";

import './featured.scss';

export const Featured: React.FC = () => (
    <div className="featured">
        <div className="top">
            <h1 className="title">Receita Total</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"%70"} strokeWidth={5}/>
            </div>
            <p className="title">Total de pagamentos hoje</p>
            <p className="amount">R$ 8970,42</p>
            <p className="desc">Transações anteriores em processamento. Últimos pagamentos podem não estar inclusos.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Meta</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">R$ 15000</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Última Semana</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small"/>
                        <div className="resultAmount">R$ 4500</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Último Mês</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small"/>
                        <div className="resultAmount">R$ 13200</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
