import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import { ISidebar, Drawer, DrawerHeader } from "./Layout";
import { Paper } from "@mui/material";
import { IMenu, menu1, menu2 } from "./IMenu";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// import { IRootState } from "../config/reducer";
// import { IHomeState } from "../pages/page/home/reducer";
import { AppState, useAppSelector } from "../config/hooks";
import { Drawer, DrawerHeader, ISidebar } from "./constants";

// icon

const Sidebar = (props: ISidebar) => {
  const { open, handleDrawerClose, theme } = props;
  // const homeState = useSelector((state: IRootState): IHomeState => state.home);
  const homeState = useAppSelector((state: AppState) => state.home);
  const router = useRouter();

  const adminOnlyMenu = () => {
    return (
      <>
        <Divider />
        <List>
          {menu2.map((item: IMenu) => (
            <ListItemButton
              key={item.label + "_"}
              onClick={() => router.push(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </>
    );
  };
  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{ sx: { backgroundColor: "primary.main", color: "#fff" } }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon sx={{ color: "#fff" }} />
          ) : (
            <ChevronLeftIcon sx={{ color: "#fff" }} />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menu1.map((item: IMenu) => (
          <ListItemButton
            onClick={() => router.push(item.path)}
            key={item.label + "_"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        ))}
      </List>
      {homeState.user?.role?.value == 1 && adminOnlyMenu()}
    </Drawer>
  );
};

export default Sidebar;
