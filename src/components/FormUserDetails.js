import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container,
    TextField,
    Button,
    ThemeProvider as MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const theme = createMuiTheme()

class FormUserDetails extends Component {
    render() {
        const { values, nextStep, handleChange } = this.props

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Enter Your User Detils
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                <br />
                <Container maxWidth="xs">
                    <TextField
                        label="Username"
                        placeholder="Enter Your Username"
                        defaultValue={values.username}
                        onChange={handleChange('username')}
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        placeholder="Enter Your Email"
                        defaultValue={values.email}
                        onChange={handleChange('email')}
                        fullWidth
                    />
                    <br />
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={nextStep}
                    >
                        Continue
                    </Button>
                </Container>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
