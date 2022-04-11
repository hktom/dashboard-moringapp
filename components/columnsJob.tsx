import * as React from "react";
import { Box, Chip } from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams
} from "@mui/x-data-grid";


export const columnsJob: GridColDef[] = [
  { field: "id", headerName: "ID", width: 130 },
  {
    field: "user",
    headerName: "Client",
    width: 180,
    valueGetter: (params: GridValueGetterParams) => `${params.row?.user?.firstName} ${params.row?.user?.lastName}`,
  },
  {
    field: "task",
    headerName: "Task",
    width: 180,
    valueGetter: (params: GridValueGetterParams) => `${params.row?.title} `,
  },
  { field: "price_by_hour", headerName: "$ price", width: 130 },
  { field: "total_hour", headerName: "hour", width: 130 },
  {
    field: "condition",
    headerName: "Status",
    width: 120,
    renderCell: (params: GridRenderCellParams<any>) => (
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Chip
          label={params.value?.title}
          color="success"
          sx={{
            color: "secondary.main",
            textTransform: "uppercase",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }} />
      </Box>
    ),
  },
  { field: "the_date", headerName: "Date", width: 130 },
];
