export class TableModel<Type> {
    columnNames: string[];
    rows: Type[];

    constructor(columnNames: string[], rows: Type[]) {
        this.columnNames = columnNames;
        this.rows = rows;
    }
}

export type CollapsibleRowInfoModel<RowType, CollapsibleInfo> = {
    row: RowType;
    collapsibleInfo: CollapsibleInfo;
}

export class CollapsibleTableModel<RowType, CollapsibleInfo> {
    columnNames: string[];
    collapsibleInfoColumnNames: string[];
    collapsibleRowInfos: CollapsibleRowInfoModel<RowType, CollapsibleInfo>[];

    constructor(
        columnNames: string[],
        collapsibleInfoColumnNames: string[],
        collapsibleRowInfos: CollapsibleRowInfoModel<RowType, CollapsibleInfo>[],
    ) {
        this.columnNames = columnNames;
        this.collapsibleInfoColumnNames = collapsibleInfoColumnNames;
        this.collapsibleRowInfos = collapsibleRowInfos;
    }
}
