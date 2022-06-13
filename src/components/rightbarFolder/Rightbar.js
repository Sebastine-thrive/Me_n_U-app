import * as React from 'react';
import Box from '@mui/material/Box';
import { AvatarGroup, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import News from './newsFolder/News';
import { Itemdata } from './Itemdata';



const Rightbar = () => {
    return (
        <Box
            p={2}
            sx={{
                display: { xs: "none", sm: "block" }
            }}>
            <Box width="300">
                <Typography variant="h6" fontWeight="200" mt={2} mb={2} >Friends Online</Typography>

                <AvatarGroup id='#friends' sx={{ flexDirection: 'row' }}>
                    <Avatar alt="random face" src="https://th.bing.com/th/id/R.c571d0e5d938a891fbe1630635ecc38f?rik=7wiUdBkzBOTtpA&pid=ImgRaw&r=0" />
                    <Avatar alt="random face" src="https://th.bing.com/th/id/R.ded7d3bb3cf0035ad0e01fb1cbd27524?rik=i3s1U9TU6%2b6dKg&pid=ImgRaw&r=0&sres=1&sresct=1" />
                    <Avatar alt="random face" src="https://th.bing.com/th/id/OIP.QTsoHSPRlItCmFy_79qwpAAAAA?w=172&h=176&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                    <Avatar alt="random face" src="https://th.bing.com/th/id/OIP.Ypxr-y0ga-mauX3h2s9oyQAAAA?w=124&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                    <Avatar alt="random face" src="https://th.bing.com/th/id/OIP.umaQhxZ6QjNGkuf72fef_QAAAA?w=124&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                    <Avatar alt="random face" src="https://th.bing.com/th/id/OIP.umaQhxZ6QjNGkuf72fef_QAAAA?w=124&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                    <Avatar alt="random face" src="https://th.bing.com/th/id/OIP.A8GU2L8NTqthmcbsOzYtTwHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                </AvatarGroup>

                <Typography variant="h6" fontWeight="200" mt={2} mb={2}>
                    Most Popular Holiday sites
                </Typography>

                <ImageList sx={{ width: 280, height: 350 }} cols={2} rowHeight={164}>
                    {Itemdata.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                    </IconButton>
                                }
                            />
                        </ImageListItem>

                    ))}
                </ImageList>

                <Typography variant="h6" fontWeight="200" mt={2}>
                    Latest Conversations
                </Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.QTsoHSPRlItCmFy_79qwpAAAAA?w=172&h=176&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/R.641c82af2865d5ae86cfa0b40ceef00c?rik=9EGme9oIF9j44Q&riu=http%3a%2f%2fwww.sunnewsonline.com%2fwp-content%2fuploads%2f2018%2f10%2f7945286_fbimg1539279431303_jpeg62c444926bb2ff9f57b4da6ab6e5278e-1.jpg&ehk=xDuz65cuJaJAArwKjYBnUPo0lgz1djyOUql%2b4jzLGKw%3d&risl=&pid=ImgRaw&r=0" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Peter Obi"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to all Nigerians
                                    </Typography>
                                    {" — We deserve a better Nigeria. It's in our hands…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Amber Heard" src="https://www.bing.com/th?id=OIP.jBLv8PeolO0_aObPVlL9NwHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Amber Heard"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >

                                    </Typography>
                                    {' — I spoke up against sexual violence — and faced our culture’s wrath. That has to change…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

                <News />
            </Box>
        </Box>
    )
}

export default Rightbar