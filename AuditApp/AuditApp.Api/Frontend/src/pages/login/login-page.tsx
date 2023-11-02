import {
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    IconButton,
    InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

  const [Login, SetUserLogin] = useState("");
  const [Password, SetUserPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [values, setValues] = useState({
      email: "",
      pass: "",
      showPass: false,
  });

  const handlePassVisibilty = () => {
      setValues({
          ...values,
          showPass: !values.showPass,
      });
  };

  function handleLoginFieldChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      SetUserLogin(event.target.value);
  }

  function handlePasswordFieldChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      SetUserPassword(event.target.value);
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      try {
        const response = await axios.post("/api/users/login", { Login, Password });
      if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/HotelAudits");
      }
      } catch(error: any){
        setError(error.response.data)
      }
  }

    return (
        <div>
            <Container maxWidth="sm">
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Paper>
                        <form onSubmit={handleLogin}>
                            <Grid container direction="column" spacing={2}>

                                <Grid item>
                                    <TextField autoComplete="off" onChange={handleLoginFieldChange}
                                        type="text"
                                        fullWidth
                                        label="Введите логин"
                                        placeholder="Логин"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField onChange={handlePasswordFieldChange}
                                        type={
                                            values.showPass
                                                ? "text"
                                                : "password"
                                        }
                                        fullWidth
                                        label="Пароль"
                                        placeholder="Пароль"
                                        variant="outlined"
                                        required
                                        error={Boolean(error)}
                                        helperText={error}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={
                                                            handlePassVisibilty
                                                        }
                                                        aria-label="toggle password"
                                                        edge="end"
                                                    >
                                                        {values.showPass ? (
                                                            <VisibilityOffIcon />
                                                        ) : (
                                                            <VisibilityIcon />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid item>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                    >
                                        Войти
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default LoginPage;
