import React from "react";

import {GridColDef} from "@mui/x-data-grid";

import {Sidebar} from "../../components/sidebar/Sidebar.tsx";
import {Navbar} from "../../components/navbar/Navbar.tsx";
import {Datatable} from "../../components/datatable/Datatable.tsx";

import './list.scss';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID do Usuário', width: 120},
    {field: 'name', headerName: 'Nome', width: 200},
    {field: 'role', headerName: 'Cargo', width: 250},
    {field: 'contact', headerName: 'Contato', width: 200},
];

const rows = [
    {id: 12345, name: 'Taiane', role: 'Diretor Financeiro (CFO) ', contact: "tai@lavex.com.br"},
    {id: 98765, name: 'João', role: 'Diretor de Marketing (CMO)', contact: "joao@lavex.com.br"},
    {id: 49857, name: 'Vinícius Abade', role: 'Diretor de Tecnologia (CTO)', contact: "abade@lavex.com.br"},
    {id: 23645, name: 'Cauan', role: 'Engenheiro de Software Senior', contact: "cauan@lavex.com.br"},
];

export const Users: React.FC = () => (
    <div className="list">
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <Datatable rows={rows} columns={columns}/>
        </div>
    </div>
);
