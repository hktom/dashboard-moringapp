import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "value", headerName: "Value", width: 250 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "name_fr", headerName: "Name FR", width: 250 },
  { field: "created_at", headerName: "Created at", width: 250 },
];
