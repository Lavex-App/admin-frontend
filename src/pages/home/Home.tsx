import React from "react";

import {Sidebar} from '../../components/sidebar/Sidebar';
import {Navbar} from "../../components/navbar/Navbar.tsx";
import {Widget} from "../../components/widget/Widget.tsx";
import {Featured} from "../../components/featured/Featured.tsx";
import {Chart} from "../../components/chart/Chart.tsx";
import {TableComponent} from "../../components/table/Table.tsx";

import './home.scss';


export const Home: React.FC = () => (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget widgetType="user"/>
                <Widget widgetType="order"/>
                <Widget widgetType="earning"/>
                <Widget widgetType="balance"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart/>
            </div>
            <div className="listContainer">
                <div className="listTitle">Últimas Transações</div>
                <TableComponent/>
            </div>
        </div>
    </div>
);
