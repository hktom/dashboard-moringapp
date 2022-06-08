import { GridColDef } from "@mui/x-data-grid";

// import { Role } from "@mui/icons-material";
export const columns: GridColDef[] = [
  { field: "value", headerName: "Value", width: 250 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "created_at", headerName: "Created at", width: 250 },
];
