import React from "react";

import {Sidebar} from "../../components/sidebar/Sidebar.tsx";
import {Navbar} from "../../components/navbar/Navbar.tsx";
import {Datatable} from "../../components/datatable/Datatable.tsx";
import {PieceOfClothingModel, PieceOfClothingSpecificationModel} from "../../models/PieceOfClothingModel.ts";
import {CollapsibleRowInfoModel, CollapsibleTableModel} from "../../models/TableModel.ts";

import './list.scss';

const columnNames = ["ID", "Nome", "Categoria", "Sub Categoria"];
const collapseInfoColumnNames = ["Gênero", "Tag do Tamanho", "Tamanho", "Peso"];
const rows: CollapsibleRowInfoModel<PieceOfClothingModel, PieceOfClothingSpecificationModel>[] = [
    {
        row: {
            id: "",
            name: "",
            category: "",
            subCategory: "",
        },
        collapsibleInfo: {
            gender: "",
            sizeLabel: "",
            size: 0,
            weight: 0,
        },
    }
];

const tableModel = new CollapsibleTableModel<PieceOfClothingModel, PieceOfClothingSpecificationModel>(columnNames, collapseInfoColumnNames, rows);

export const PieceOfClothing: React.FC = () => (
    <div className="list">
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <Datatable/>
        </div>
    </div>
);
