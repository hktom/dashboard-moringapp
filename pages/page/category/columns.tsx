import {
  Box, CardMedia,
  Chip
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
    field: "image",
    width: 200,
    headerName: "Image",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end", py: 5 }}>
        <CardMedia
          component="img"
          sx={{ height: "120px", width: "120px", py: 2 }}
          image={HOST_URL + "storage/" + params.value}
          alt="green iguana" />
      </Box>
    ),
  },
  { field: "name", headerName: "Name EN", width: 200 },
  { field: "name_fr", headerName: "Name FR", width: 200 },
  {
    field: "service",
    headerName: "Service",
    width: 200,
    sortable: true,
    valueGetter: (params: GridValueGetterParams) => `${params.row.service?.name || ""}`,
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
            color: "#fff",
            textTransform: "uppercase",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }} />
      </Box>
    ),
  },
];
