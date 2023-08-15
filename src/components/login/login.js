import React from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import styled from 'styled-components';


const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
    width: '300px',
  },
  button: {
    marginTop: theme.spacing(2),
    width: '300px',
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    
        
    <FormContainer>
      <Paper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form className={classes.form}>
          <TextField
            label="Email"
            type="email"
            className={classes.textField}
            required
          />
          <TextField
            label="Password"
            type="password"
            className={classes.textField}
            required
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign In
          </Button>
        </form>
        <div>
          <Typography variant="body2" align="center">
            <a href="/forgot-password">Forgot Password?</a>
          </Typography><br></br>
          <Typography variant="body2" align="center">
            <a href="/create-account">Create Account</a>
          </Typography>
        </div>

      </Paper>
    </FormContainer>
    
  );
};

export default LoginForm;
