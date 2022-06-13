import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;

})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Post = () => {
    const [expandedId, setExpandedId] = React.useState(-1);

    let i = 1;
    const handleExpandClick = i => {
        setExpandedId(expandedId === i ? -1 : i);
    };

    return (
        <>
            <Card sx={{ margin: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="The Eiffel Tower"
                    subheader="September 14, 2021"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://i2.wp.com/www.alltherooms.com/blog/wp-content/uploads/2017/06/Paris-featured-By-Catarina-Belova.jpg?fit=1280%2C845&ssl=1"
                    alt="The Eiffel Tower"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.

                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />}
                        />
                    </IconButton>

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                    <ExpandMore
                        id="p1-header"
                        onClick={() => handleExpandClick(i)}
                        aria-expanded={expandedId === i}
                        // expand={expanded}

                        aria-label="show more"
                        aria-controls="p1-content"


                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expandedId === i} timeout="auto" unmountOnExit >
                    <CardContent id="p1-header">
                        <Typography paragraph>Description:</Typography>
                        <Typography paragraph>
                            The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union. Tickets can be purchased to ascend by stairs or lift to the first and second levels. The climb from ground level to the first level is over 300 steps, as is the climb from the first level to the second. Although there is a staircase to the top level, it is usually accessible only by lift.
                        </Typography>
                        <Typography paragraph>
                            The main structural work was completed at the end of March 1889 and, on 31 March, Eiffel celebrated by leading a group of government officials, accompanied by representatives of the press, to the top of the tower.[16] Because the lifts were not yet in operation, the ascent was made by foot, and took over an hour, with Eiffel stopping frequently to explain various features. Most of the party chose to stop at the lower levels, but a few, including the structural engineer, Émile Nouguier, the head of construction, Jean Compagnon, the President of the City Council, and reporters from Le Figaro and Le Monde Illustré, completed the ascent. At 2:35 pm, Eiffel hoisted a large Tricolour to the accompaniment of a 25-gun salute fired at the first level.

                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            <Card sx={{ margin: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "blue" }} aria-label="Automatic truck">

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Tosin Lawanson"
                    subheader="May 15,2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://cdn.cnn.com/cnnnext/dam/assets/210714095430-tusimple-truck-blue-exlarge-169.jpg"
                    alt="Automatic truck"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        There's a shortage of truckers, but those at TuSimple think it has a solution: no driver needed
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />}
                        />
                    </IconButton>

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                    <ExpandMore
                        // expand={expanded}
                        onClick={() => handleExpandClick((i + 1))}
                        aria-expanded={expandedId === (i + 1)}
                        // onClick={handleExpandClick}
                        // aria-expanded={expanded}
                        aria-label="show more"
                        aria-controls="p2-content"
                        id="p2-header"

                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expandedId === (i + 1)} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description:</Typography>
                        <Typography paragraph>
                            Right now, there's a shortage of truck drivers in the US and worldwide, exacerbated by the e-commerce boom brought on by the pandemic.

                            One solution to the problem is autonomous trucks, and several companies are in a race to be the first to launch one. Among them is San Diego-based TuSimple.
                            Founded in 2015, TuSimple has completed about 2 million miles of road tests with its 70 prototype trucks across the US, China and Europe. Although these are simply commercially available trucks retrofitted with its technology, TuSimple has deals in place with two of the world's largest truck manufacturers -- Navistar in the US and Traton, Volkswagen's trucking business, in Europe -- to design and build fully autonomous models, which it hopes to launch by 2024.
                            Low carbon travel isn&#39;t just about switching to sustainable fuel sources -- it&#39;s also about redesigning the transport itself. A &quot;Flying-V&quot; plane designed by Delft&#39;s University of Technology in the Netherlands and Dutch airline KLM can cut fuel consumption by 20%. Ultimately, researchers hope to switch out the kerosene with a sustainable fuel source, like liquid hydrogen.

                        </Typography>
                        <Typography paragraph>
                            "Today, because the system is not fully ready, we have a safety driver and a safety engineer on board at all times when we're testing, but we drove in full autonomy: the driver wasn't touching the wheel," said Cheng Lu, TuSimple's president and CEO.
                            The journey was completed in 14 hours versus the usual 24 with a human driver, mostly because a truck doesn't need to sleep. "In the US, a driver can only work 11 hours a day. We simply had a handoff when our first pair of drivers had to stop because they reached their 11 hours of operation," said Lu. That, of course, negates the advantage of an autonomous system, so the idea is that once TuSimple's trucks hit the market, there will be no need to have anyone onboard
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

export default Post
