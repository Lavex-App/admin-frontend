import React, {ReactElement} from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import './widget.scss';

interface WidgetProperties {
    widgetType: string;
}

type WidgetData = {
    title: string;
    isMoney: boolean;
    link: string;
    icon: ReactElement;
};

export const Widget: React.FC<WidgetProperties> = ({widgetType}: WidgetProperties) => {
    let widgetData: WidgetData | Record<string, never> = {};

    // temporary
    const amount: number = 100;

    switch (widgetType) {
        case "user":
            widgetData = {
                title: "USUÁRIOS",
                isMoney: false,
                link: "Ver todos os usuários",
                icon: <PersonOutlinedIcon className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}/>
            }
            break;
        case "order":
            widgetData = {
                title: "PEDIDOS",
                isMoney: false,
                link: "Ver todos os pedidos",
                icon: <ShoppingCartOutlinedIcon className="icon" style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                }}/>
            }
            break;
        case "earning":
            widgetData = {
                title: "PAGAMENTOS",
                isMoney: true,
                link: "Ver todos os pagamentos",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{
                    color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}/>
            }
            break;
        case "balance":
            widgetData = {
                title: "FINANCEIRO",
                isMoney: false,
                link: "Ver todas as entradas e saídas ",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{
                    color: "purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                }}/>
            }
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{widgetData.title}</span>
                <span className="counter">
                    {widgetData.isMoney && "R$"} {widgetData.isMoney ? amount.toFixed(2) : amount}
                </span>
                <span className="link">{widgetData.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    20%
                </div>
                {widgetData.icon}
            </div>
        </div>
    )
        ;

};