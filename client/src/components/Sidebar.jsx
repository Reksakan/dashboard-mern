import React from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSalesOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
} from "@mui/icons-material";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assets/profile.jpeg";

const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation();
    const [ active, setActive ] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(()=> {
        setActive(pathname.substring(1));
    }, [pathname])
  return (
    <Box component="nav">
        {isSidebarOpen && (
            <Drawer 
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    widtt: drawerWidth,
                    "& .MuiDrawer-paper" : {
                        color: theme.palette.secondary[]
                    }
                }}
            )}
    </Box>
  )
}

export default Sidebar