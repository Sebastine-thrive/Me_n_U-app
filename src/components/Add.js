import { Button, ButtonGroup, Fab, IconButton, Stack, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20"
});

export const Add = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Add Post"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px )", md: 30 }
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={300} p={3}
                    borderRadius={5}
                    bgcolor={"background.default"}
                    color={"text.primary"}>

                    <Typography variant="h6" textAlign="center" color="gray">Create Post</Typography>

                    <UserBox>
                        <Avatar src="https://images.pexels.com/photos/12211618/pexels-photo-12211618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user"
                            sx={{ width: 30, height: 30 }}>
                        </Avatar>
                        <Typography variant="span" fontWeight={500}>
                            James Thrive
                        </Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%", paddingTop: 3 }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind"
                        variant="standard"
                    />

                    <Stack
                        direction="row"
                        gap={2}
                        mt={2}
                        mb={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <ImageIcon color="secondary" />
                        <VideocamRoundedIcon color="error" />
                        <PersonAddIcon color="success" />
                    </Stack>

                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group">
                        <Button> Post </Button>
                        <Button sx={{ width: "100px" }}>
                            <CalendarMonthIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};
