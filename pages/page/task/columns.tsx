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
import { ICondition } from "../condition/action";
import { ICategory } from "../category/action";
import { HOST_URL } from "../../../config/apollo";

export const columns: GridColDef[] = [
  {
    field: "image",
    width: 200,
    headerName: "Image",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end", py: 5 }}>
        <CardMedia
          component="img"
          sx={{ height: "100px", width: "100px", py: 1 }}
          image={HOST_URL + "storage/" + params.value}
          alt="green iguana" />
      </Box>
    ),
  },
  { field: "name", headerName: "Name", width: 200 },
  { field: "price_by_hour", headerName: "Price By Hour ($)", width: 200 },
  { field: "min_price", headerName: "Min Price ($)", width: 200 },
  { field: "can_be_booked", headerName: "Can be booked", width: 200 },
  { field: "can_be_urgent", headerName: "Can be Urgent", width: 200 },
  { field: "accept_offer", headerName: "Accept offer", width: 200 },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    sortable: false,
    valueGetter: (params: GridValueGetterParams<ICategory>) => params.value?.name,
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
];
