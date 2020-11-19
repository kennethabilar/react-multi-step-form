import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Container,
    List,
    ListItem,
    ListItemText,
    Button,
    ThemeProvider as MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const theme = createMuiTheme()

class Confirm extends Component {
    render() {
        const { values, nextStep, prevStep} = this.props
        const { username, email, firstname, lastname } = values

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <br />
                <br />
                <Container maxWidth="xs">
                    <List>
                        <ListItem>
                            <ListItemText primary="Username" secondary={username} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Email" secondary={email} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="First Name" secondary={firstname} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Last Name" secondary={lastname} />
                        </ListItem>
                    </List>
                    <br />
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={nextStep}
                    >
                        Continue
                    </Button>
                    { ' ' }
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={prevStep}
                    >
                        Previous
                    </Button>
                </Container>
            </MuiThemeProvider>
        )
    }
}

export default Confirm
