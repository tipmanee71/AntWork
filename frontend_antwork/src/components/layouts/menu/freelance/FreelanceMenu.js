import React from "react";
import ListMenu from "../../../pages/shared/listMenu";

import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';

const FreelanceMenu = () => {

  const dataListMenu = [
    {
      listItemIcon: <HomeIcon />,
      listItemText: "Homepage",
      listLink: "/homepage",
      listKey:"homepage",
    },
    {
      listItemIcon: <PostAddIcon />,
      listItemText: "ลงผลงาน",
      listLink: "/manage_product",
      listKey:"manage_product",
    },
  ];

  return (
    <ListMenu key="user" dataListMenu={dataListMenu} />
  );
};

export default FreelanceMenu;
