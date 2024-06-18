import React from "react";

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {CollapsibleRowInfoModel, CollapsibleTableModel} from "../../models/TableModel.ts";

type RecordId = { id: string | number };
type GenericType = Record<string, string | number>;
type GenericRowType = RecordId & GenericType;
type RowProps<RowType extends GenericRowType, CollapsibleInfo extends GenericRowType> =
    CollapsibleRowInfoModel<RowType, CollapsibleInfo>
    & {
    collapsibleRowInfoColumnNames: string[];
}

const Row: React.FC<RowProps<GenericRowType, GenericRowType>> = <RowType extends GenericRowType, CollapsibleInfo extends GenericRowType>(props: RowProps<RowType, CollapsibleInfo>) => {
    const row = props.row;
    const collapsibleInfoColumnNames = props.collapsibleRowInfoColumnNames;
    const collapsibleInfo = props.collapsibleInfo;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                {Object.values(row).map((value) => <TableCell>{value}</TableCell>)}
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                Detalhes
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        {collapsibleInfoColumnNames.map(columnName =>
                                            <TableCell>{columnName}</TableCell>)}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={collapsibleInfo.id}>
                                        {Object.values(collapsibleInfo).map((infoValueName) =>
                                            <TableCell>{infoValueName}</TableCell>)}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export const CollapsibleTable: React.FC<CollapsibleTableModel<GenericRowType, GenericRowType>> = <RowType extends GenericRowType, CollapsibleInfo extends GenericRowType>(props: CollapsibleTableModel<RowType, CollapsibleInfo>) => (
    <TableContainer component={Paper} className="collapsibleTable">
        <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell/>
                    {props.columnNames.map((columnName: string) => <TableCell>{columnName}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {props.collapsibleRowInfos.map((collapsibleRowInfoModel: CollapsibleRowInfoModel<RowType, CollapsibleInfo>) => {
                    const rowProps: RowProps<RowType, CollapsibleInfo> = {
                        ...collapsibleRowInfoModel, collapsibleRowInfoColumnNames: props.collapsibleInfoColumnNames
                    };
                    return (
                        <Row key={collapsibleRowInfoModel.row.id} row={rowProps.row}
                             collapsibleInfo={rowProps.collapsibleInfo}
                             collapsibleRowInfoColumnNames={rowProps.collapsibleRowInfoColumnNames}
                        />
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
);
