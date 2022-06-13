import { Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';



const Styledtoolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "primary"
}); 

const Searchbox = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40% "
}));

const Iconsbox = styled(Box)(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}));

// to control diplay on smaller images
const Userbox = styled(Box)(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}));

export {Styledtoolbar, Searchbox, Iconsbox, Userbox} 






