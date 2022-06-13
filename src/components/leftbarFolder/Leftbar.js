import React from 'react'
import Box from '@mui/material/Box';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Sitepage } from './Sitepage';

const Sidebar = ({ mode, setMode }) => {

    return (
        <Box
            p={2}
            sx={{
                display: { xs: "none", sm: "block" }
            }}
        >

            <Box position="sticky">
                {
                    Sitepage.map((listItem) => {
                        return (
                            <List key={listItem.id} >
                                <ListItem disablePadding>
                                    <ListItemButton indicatorColor="secondary" companent="a" href={`${listItem.link}`}>
                                        <ListItemIcon>
                                            {listItem.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={listItem.list_item_text} />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        )
                    })
                }

                <Divider />

                <ListItem disablePadding>
                    <ListItemButton companent="a" href="#profile">
                        <ListItemIcon>
                            <ModeNightIcon />
                        </ListItemIcon>

                        <Switch
                            onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                    </ListItemButton>
                </ListItem>
            </Box>
        </Box >
    )
};
export default Sidebar



