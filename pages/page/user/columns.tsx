import {
  Avatar,
  Box, Chip
} from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams
} from "@mui/x-data-grid";
import * as React from "react";
import { HOST_URL } from "../../../config/apollo";
import { ICondition } from "../condition/action";

export const columns: GridColDef[] = [
  {
    field: "avatar",
    width: 200,
    headerName: "avatar",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end", py: 5 }}>
        <Avatar
          alt=""
          src={HOST_URL + "storage/" + params.value}
          sx={{ width: 60, height: 60 }} />
      </Box>
    ),
  },
  { field: "first_name", headerName: "First name", flex: 1 },
  { field: "last_name", headerName: "Last name", flex: 1 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "role",
    headerName: "Role",
    width: 200,
    sortable: true,
    valueGetter: (params: GridValueGetterParams) => `${params.row.role?.name}`,
  },
  {
    field: "condition",
    width: 200,
    headerName: "Status",
    renderCell: (params: GridRenderCellParams<ICondition>) => (
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Chip
          size="small"
          label={params.value?.name}
          color={params.value?.value == 1 ? "success" : "error"}
          sx={{
            color: "white",
            textTransform: "uppercase",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }} />
      </Box>
    ),
  },
];
