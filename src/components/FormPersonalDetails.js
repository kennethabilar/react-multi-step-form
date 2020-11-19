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
        const { values, nextStep, prevStep, handleChange } = this.props

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Enter Your Personal Detils
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                <br />
                <Container maxWidth="xs">
                    <TextField
                        label="First Name"
                        placeholder="Enter Your First Name"
                        defaultValue={values.firstname}
                        onChange={handleChange('firstname')}
                        fullWidth
                    />
                    <TextField
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        defaultValue={values.lastname}
                        onChange={handleChange('lastname')}
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

export default FormUserDetails
