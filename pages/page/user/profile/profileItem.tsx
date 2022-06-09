import { Box, Divider, Typography } from "@mui/material";
import * as React from "react";
import { grey } from "@mui/material/colors";

interface IProps {
  label: string;
  value: string | undefined | number;
}
export function ProfileItem(props: IProps) {
  const { label, value } = props;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          flexDirection: { md: "row", xs: "column" },
          flexWrap: "wrap",
          py: 2,
        }}
      >
        <Box sx={{ minWidth: 200 }}>
          <Typography variant="body1">{label}</Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ color: grey[500] }}>
            {value}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
