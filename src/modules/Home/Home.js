import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Albums from "../albums/Albums";
import Users from "../users/Users";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Home.css'
import Contacts from "../Contacts/Contacts/Contacts";
import { themeContext } from "../../themes/theme-context";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { IOSSwitch } from "../../components/IOSSwitch/IOSSwitch";
import FormGroup from "@material-ui/core/FormGroup";

function Home (props) {
    const { theme,  handleChange, isLight} = useContext(themeContext)
    return (
        <React.Fragment>
            <CssBaseline />
            <Router>
            <Container maxWidth="sm" style={{marginTop: 20 + 'px', background: theme.background}}>
                <FormGroup style={{marginLeft: 1 + 'em'}}>
                    <FormControlLabel
                        control={<IOSSwitch checked={isLight} onChange={(event) => handleChange(event.target.checked)} name="themeSwitcher"  />}
                    />
                </FormGroup>
                <Typography component="div" className={'red-container'}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/albums">Albums</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Contacts</Link>
                                </li>
                            </ul>
                        </nav>


                </Typography>
                <Typography component="div" className={'blue-container'}>
                    <Switch>
                        <Route path={'/dashboard'} component={Dashboard} />
                        <Route path={'/albums'} component={Albums} />
                        <Route path={'/users'} component={Users} />
                        <Route path={'/contacts'} component={Contacts} />

                    </Switch>
                </Typography>



            </Container>
            </Router>
        </React.Fragment>
    );
}

export default Home;