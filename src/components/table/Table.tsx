import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.scss';

function createData(
    id: string,
    customer: string,
    serviceProvider: string,
    services: string,
    price: number,
    hasTransport: string,
    paymentMethod: string,
    paymentStatus: string,
    serviceStatus: string,
    paymentStatusCode: string,
    serviceStatusCode: string,
) {
    return {
        id,
        customer,
        serviceProvider,
        services,
        price,
        hasTransport,
        paymentMethod,
        paymentStatus,
        serviceStatus,
        paymentStatusCode,
        serviceStatusCode
    };
}

const rows = [
    createData(
        '12345',
        "Azebelle dos Santos",
        "Maria Augusta Morais",
        "Lavar e Secar, Passar e Dobrar",
        43.0,
        "Não",
        "Pix",
        "Concluído",
        "Serviço em Andamento",
        "completed",
        "inProgress",
    ),
    createData(
        '53456',
        "Antonio Pereira da Silva",
        "Alexandre Freire",
        "Lavar e Secar",
        135.3,
        "Sim",
        "Pix",
        "Não Autorizado",
        "Cancelado",
        "notAuthorized",
        "canceled",
    ),
    createData(
        '24537',
        "Gabriela Vieira",
        "Marco Songo",
        "Passar e Dobrar",
        27.0,
        "Não",
        "Cartão de Crédito",
        "Pendente",
        "Aguardando Pagamento",
        "pending",
        "waitingPayment",
    ),
    createData(
        '75668',
        "Aparecida José Shein",
        "Amanda Justina Trevis",
        "Lavar e Secar, Passar e Dobrar",
        84.3,
        "Sim",
        "Pix",
        "Concluído",
        "Entrega Pendente",
        "completed",
        "transport",
    ),
    createData(
        '36719',
        "Carolina Silva da Costa",
        "Cecília Alves",
        "Passar e Dobrar",
        53.9,
        "Sim",
        "Cartão de Débito",
        "Concluído",
        "Retirada Pendente",
        "completed",
        "transport",
    ),
];

export const TableComponent: React.FC = () => (
    <TableContainer component={Paper} className="table">
        <Table sx={{minWidth: 650}} aria-label="Transações">
            <TableHead>
                <TableRow>
                    <TableCell className="columnLabel" align="right">ID da Transação</TableCell>
                    <TableCell className="columnLabel" align="center">Lavex</TableCell>
                    <TableCell className="columnLabel" align="center">Lavexer</TableCell>
                    <TableCell className="columnLabel" align="center">Serviços</TableCell>
                    <TableCell className="columnLabel" align="center">Com Transporte</TableCell>
                    <TableCell className="columnLabel" align="center">Status do Pedido</TableCell>
                    <TableCell className="columnLabel" align="center">Método de Pagamento</TableCell>
                    <TableCell className="columnLabel" align="center">Preço</TableCell>
                    <TableCell className="columnLabel" align="center">Status do Pagamento</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row" align="right">{row.id}</TableCell>
                        <TableCell align="center">{row.customer}</TableCell>
                        <TableCell align="center">{row.serviceProvider}</TableCell>
                        <TableCell align="center">{row.services}</TableCell>
                        <TableCell align="center">{row.hasTransport}</TableCell>
                        <TableCell align="center"
                                   className={`status ${row.serviceStatusCode}`}>{row.serviceStatus}</TableCell>
                        <TableCell align="center">{row.paymentMethod}</TableCell>
                        <TableCell align="center">R$ {row.price.toFixed(2)}</TableCell>
                        <TableCell align="center"
                                   className={`status ${row.paymentStatusCode}`}>{row.paymentStatus}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);