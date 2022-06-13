import React, { useState } from 'react'
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardDoubleArrowUpFilledIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Styledtoolbar, Searchbox, Iconsbox, Userbox } from './NavbarStyles.js';
import { black } from '@mui/material/colors';



const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ padding: '0px,0px,0px,0px' }}>
            <AppBar position="sticky" sx={{ width: 1 }}>
            <Styledtoolbar>
                <KeyboardDoubleArrowUpFilledIcon sx={{
                    display: { xs: "block", sm: "none" }
                }}></KeyboardDoubleArrowUpFilledIcon>

                <Typography variant="h6" sx={{
                    display: { xs: "none", sm: "block" }
                }}>
                    ME  n  U
                </Typography>
                <Searchbox>
                    <InputBase
                        sx={{ color: "black" }}
                        placeholder="search..." />
                </Searchbox>

                <Iconsbox >
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>

                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>

                    <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/12211618/pexels-photo-12211618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        onClick={e => setOpen(true)} />
                </Iconsbox>

                <Userbox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/12211618/pexels-photo-12211618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />

                    <Typography variant='span'>
                        Thrive
                    </Typography>
                </Userbox>
            </Styledtoolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
        </Box>
    );
}

export default Navbar

