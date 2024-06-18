import React from "react";

import {DataGrid, GridColDef} from '@mui/x-data-grid';

import './datatable.scss';

type DatatableProps = {
    columns: GridColDef[];
    rows: Record<string, string | number>[];
}

export const Datatable: React.FC<DatatableProps> = ({rows, columns}: DatatableProps) => (
    <div className="datatable">
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {page: 0, pageSize: 4},
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    </div>
);
