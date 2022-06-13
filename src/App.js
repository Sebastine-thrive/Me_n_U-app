import Feed from "./components/mainFeedFolder/Feed";
import Navbar from "./components/navbarFolder/Navbar";
import Rightbar from "./components/rightbarFolder/Rightbar";
import Leftbar from "./components/leftbarFolder/Leftbar";
import LeftbarControl from "./components/leftbarFolder/LeftbarControl"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Add } from "./components/Add";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { createTheme } from '@mui/material/styles';


function App() {

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box maxWidth={"100%"}
        bgcolor={"background.default"}
        color={"text.primary"}>

        <Navbar sx={{ width: "100%" }} />

        <LeftbarControl mode={mode} setMode={setMode} />


        <Grid container
          direction="row"
        >

          <Grid item sm={2} md={2} lg={2} >
            <Leftbar mode={mode} setMode={setMode} />
          </Grid>
          <Grid item sm={5} md={6} lg={7}>
            <Feed id="#pages" />
          </Grid>

          <Grid item sm={5} md={4} lg={3}>
            <Rightbar />
          </Grid>

        </Grid>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App; 