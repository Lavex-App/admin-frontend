import React from "react";

import {Route, Routes} from 'react-router-dom';

import {Home} from "./pages/home/Home.tsx";
import {Users} from "./pages/lists/Users.tsx";
import {SingleUser} from "./pages/single/SingleUser.tsx";
import {NewUser} from "./pages/new/NewUser.tsx";
import {Login} from "./pages/login/Login.tsx";
import {PieceOfClothing} from "./pages/lists/PieceOfClothing.tsx";
import {SinglePieceOfClothing} from "./pages/single/SinglePieceOfClothing.tsx";
import {NewPieceOfClothing} from "./pages/new/NewPieceOfClothing.tsx";
import {ServiceOrders} from "./pages/lists/ServiceOrders.tsx";
import {SingleServiceOrder} from "./pages/single/SingleServiceOrder.tsx";
import {NewServiceOrder} from "./pages/new/NewServiceOrder.tsx";

export const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="users">
            <Route index element={<Users/>}/>
            <Route path=":id" element={<SingleUser/>}/>
            <Route path="new" element={<NewUser/>}/>
        </Route>
        <Route path="pieceOfClothing">
            <Route index element={<PieceOfClothing/>}/>
            <Route path=":id" element={<SinglePieceOfClothing/>}/>
            <Route path="new" element={<NewPieceOfClothing/>}/>
        </Route>
        <Route path="serviceOrders">
            <Route index element={<ServiceOrders/>}/>
            <Route path=":id" element={<SingleServiceOrder/>}/>
            <Route path="new" element={<NewServiceOrder/>}/>
        </Route>
    </Routes>
);
