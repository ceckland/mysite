import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import Contact from './components/Contact';
import logo from './images/subaru-wrx-03.jpg';

// Theme overrides.
// 
const theme = createMuiTheme({
  palette: {
    background: {
    default: ' #e9fbcf'
    }
  }
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         body: {
//           backgroundImage: `url(${logo})`
// //            'url(https://designshack.net/wp-content/uploads/gradient-background.jpg)'
//         }
//       }
//     }
//   }
 });

function App() {

  return (
       
    <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <Navbar />
        <div>
          <Container>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/notes" component={Notes} />
              <Route path="/create_note" component={CreateNote} />
            </div>
          </Container>
      </div>
      </Router>
      </MuiThemeProvider>
    </React.Fragment> 
  );
}

export default App;