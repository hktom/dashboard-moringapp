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
  label: string;
  icon: React.ReactElement;
  description?: string;
  path: string | URL;
  sub?: IMenu;
}
export const menu1: Array<IMenu> = [
  {
    label: "Dashboard",
    icon: <GridViewIcon sx={{ color: "#fff" }} />,
    path: "/page/",
  },
  {
    label: "Jobs",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laborum veritatis debitis nihil voluptate! Error laboriosam voluptas molestias",
    icon: <EqualizerIcon sx={{ color: "#fff" }} />,
    path: "/page/job/",
  },
  {
    label: "Task",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laborum veritatis debitis nihil voluptate! Error laboriosam voluptas molestias",
    icon: <FormatListBulletedIcon sx={{ color: "#fff" }} />,
    path: "/page/task/",
  },
  {
    label: "Payment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laborum veritatis debitis nihil voluptate! Error laboriosam voluptas molestias",
    icon: <LocalAtmIcon sx={{ color: "#fff" }} />,
    path: "/page/payment/",
  },
  {
    label: "Profile",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laborum veritatis debitis nihil voluptate! Error laboriosam voluptas molestias",
    icon: <ManageAccountsIcon sx={{ color: "#fff" }} />,
    path: "/page/profile/",
  },
];

export const menu2: Array<IMenu> = [
  {
    label: "User",
    icon: <PeopleIcon sx={{ color: "#fff" }} />,
    path: "/page/user/",
  },
  {
    label: "Service",
    icon: <FullscreenExitIcon sx={{ color: "#fff" }} />,
    path: "/page/service/",
  },
  {
    label: "Category",
    icon: <ListAltIcon sx={{ color: "#fff" }} />,
    path: "/page/category/",
  },
  {
    label: "Role",
    icon: <SecurityIcon sx={{ color: "#fff" }} />,
    path: "/page/role",
  },
  {
    label: "City",
    icon: <ZoomOutMapIcon sx={{ color: "#fff" }} />,
    path: "/page/city",
  },
  {
    label: "Country",
    icon: <WrongLocationIcon sx={{ color: "#fff" }} />,
    path: "/page/country",
  },
  {
    label: "Condition",
    icon: <SecurityIcon sx={{ color: "#fff" }} />,
    path: "/page/condition",
  },
];
