import {
  GridColDef,
  GridValueGetterParams
} from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "name", headerName: "Name EN", flex: 2 },
  { field: "name_fr", headerName: "Name FR", flex: 2 },
  {
    field: "country",
    headerName: "Country",
    flex: 2,
    sortable: false,
    valueGetter: (params: GridValueGetterParams) => `${params.row?.country?.name}`,
  },
];
