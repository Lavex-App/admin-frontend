import React from "react";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import './sidebar.scss';
import {Link} from "react-router-dom";

export const Sidebar: React.FC = () => (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Lavex Admin</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">PRINCIPAL</p>
                <Link className="link" to="/">
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTAGENS</p>
                <Link className="link" to="/users">
                    <li>
                        <PersonOutlineIcon className="icon"/>
                        <span>Usuários</span>
                    </li>
                </Link>
                <Link className="link" to="/pieceOfClothing">
                    <li>
                        <StoreIcon className="icon"/>
                        <span>Roupas</span>
                    </li>
                </Link>
                <Link className="link" to="/serviceOrders">
                    <li>
                        <CreditCardOutlinedIcon className="icon"/>
                        <span>Pedidos de Serviço</span>

                    </li>
                </Link>
                <p className="title">DADOS DA APLICAÇÃO</p>
                <Link className="link" to="/">
                    <li>
                        <InsertChartOutlinedIcon className="icon"/>
                        <span>Estatísticas</span>
                    </li>
                </Link>
                <Link className="link" to="/">
                    <li>
                        <NotificationsOutlinedIcon className="icon"/>
                        <span>Notificações</span>
                    </li>
                </Link>
                <p className="title">MONITORAMENTO</p>
                <Link className="link" to="/">
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>Saúde do Sistema</span>
                    </li>
                </Link>
                <Link className="link" to="/">
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                </Link>
                <Link className="link" to="/">
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Configurações</span>
                    </li>
                </Link>
                <p className="title">CONTA</p>
                <Link className="link" to="/">
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Perfil</span>
                    </li>
                </Link>
                <Link className="link" to="/">
                    <li>
                        <ExitToAppOutlinedIcon className="icon"/>
                        <span>Sair</span>
                    </li>
                </Link>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
);
