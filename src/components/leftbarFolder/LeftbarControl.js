import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Box, IconButton, Switch } from '@mui/material';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';


export default function LeftbarControl({mode, setMode}) {
    return (
        <Box
            p={1}
            sx={{
                display: { xs: "block", sm: "none" }
            }}
        >
            <PopupState variant="popover" popupId="demo-popup-menu" margin={3}>

                {(popupState) => (
                    <React.Fragment>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                            <IconButton
                                size="small"
                            >
                                <ViewHeadlineIcon sx={{ width: 22, height: 22, color: "white" }} />
                            </IconButton>
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>Home</MenuItem>
                            <MenuItem onClick={popupState.close}>Pages</MenuItem>
                            <MenuItem onClick={popupState.close}>Groups</MenuItem>
                            <MenuItem onClick={popupState.close}>Friends</MenuItem>
                            <MenuItem onClick={popupState.close}>Settings</MenuItem>
                            <MenuItem onClick={popupState.close}>Profile</MenuItem>
                            <MenuItem onClick={popupState.close}> <Switch
                                onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        </Box>
    );
}
