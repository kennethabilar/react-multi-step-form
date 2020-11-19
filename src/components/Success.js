import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Container,
    ThemeProvider as MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const theme = createMuiTheme()

class Success extends Component {
    render() {
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
                <Container maxWidth="md">
                    <h1>User has been created</h1>
                    <p>User confirmation link is sent to your email.</p>
                </Container>
            </MuiThemeProvider>
        )
    }
}

export default Success
