import Axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import swal from "sweetalert";

const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxd_rGsGKHKQe2uV_yaHLlA-Sv3A_bk9E";
  const loginHandler = () => {
    Axios.post(URL, {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.data.email === "a.ermek.kg@gmail.com") {
          localStorage.setItem("admin", response.idToken);
          swal("Успешно", "Вы вошли как администратор", "success");
          setTimeout(() => {
            
            window.location.reload();
          }, 1000);
        } else {
          localStorage.setItem("user", "success");
          swal("Успешно", "Вы вошли как пользователь", "success");
          console.log(localStorage.getItem("user"));
          setTimeout(() => {
            
            window.location.reload();
          }, 1000);
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err)
        swal("Ошибка", "Логин или пароль введены неверно", "error");

      });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="E-Mail">E-Mail</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="authEmail"
          placeholder="Введите ваш E-Mail"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Пароль</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="authPassword"
          placeholder="Введите пароль"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Запомнить меня
        </Label>
      </FormGroup>
      <Button color="primary" onClick={() => loginHandler()}>
        Войти
      </Button>{" "}
      <Button color="warning" className="ml-3">
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="/registration"
        >
          Регистрация
        </a>
      </Button>
    </Form>
  );
};

export default AuthForm;
