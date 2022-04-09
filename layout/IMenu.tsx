import * as React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import WrongLocationIcon from "@mui/icons-material/WrongLocation";

export interface IMenu {
  label: String;
  icon: React.ReactElement;
  path: string | URL;
  sub?: IMenu;
}
export const menu1: Array<IMenu> = [
  {
    label: "Dashboard",
    icon: <GridViewIcon sx={{ color: "#fff" }} />,
    path: "/",
  },
  {
    label: "Jobs",
    icon: <EqualizerIcon sx={{ color: "#fff" }} />,
    path: "/job/",
  },
  {
    label: "Task",
    icon: <FormatListBulletedIcon sx={{ color: "#fff" }} />,
    path: "/task/",
  },
  {
    label: "Service",
    icon: <FullscreenExitIcon sx={{ color: "#fff" }} />,
    path: "/service/",
  },
  {
    label: "Category",
    icon: <ListAltIcon sx={{ color: "#fff" }} />,
    path: "/category/",
  },
  {
    label: "Payment",
    icon: <LocalAtmIcon sx={{ color: "#fff" }} />,
    path: "/payment/",
  },
  {
    label: "Profile",
    icon: <ManageAccountsIcon sx={{ color: "#fff" }} />,
    path: "/profile/",
  },
];

export const menu2: Array<IMenu> = [
  {
    label: "User",
    icon: <PeopleIcon sx={{ color: "#fff" }} />,
    path: "/user/",
  },
  {
    label: "Role",
    icon: <SecurityIcon sx={{ color: "#fff" }} />,
    path: "/role",
  },
  {
    label: "City",
    icon: <ZoomOutMapIcon sx={{ color: "#fff" }} />,
    path: "/city",
  },
  {
    label: "Country",
    icon: <WrongLocationIcon sx={{ color: "#fff" }} />,
    path: "/country",
  },
];
