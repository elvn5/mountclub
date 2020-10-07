import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
import './Registration.css'
import Axios from 'axios'
import swal from "sweetalert";


export default function RegistrationPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [registerButton, setRegisterButton] = useState(true)
 

 async function registerUser(){

  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };



    try {
        if(authData.email=='' && password==''){
          swal("Ошибка", "Заполните все поля", "warning")
          return
        }
    const response = await Axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxd_rGsGKHKQe2uV_yaHLlA-Sv3A_bk9E`,
      authData
    );
    swal("Успешно", "Регистрация завершена", "success");
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
  
  }
  

  function checkHandler(){
    setRegisterButton(!registerButton)
  }

  return (
    <div>
      <Container className="RegisterPage">
        <Form>
          <FormGroup>
            <Label for="registerEmail">Email</Label>
            <Input
            onChange={(e)=> setEmail(e.target.value)}
              type="email"
              name="email"
              id="registerEmail"
              placeholder="Ваш E-Mail"
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerPassword">Пароль</Label>
            <Input
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              name="password"
              id="registerPassword"
              placeholder="Пароль"
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Ваше имя</Label>
            <Input
              onChange={(e)=>setName(e.target.value)}
              type="text"
              name="name"
              id="registername"
              placeholder="Ваше Имя"
              required={true}

            />
          </FormGroup>
          <FormGroup>
            <Label for="surname">Ваша Фамилия</Label>
            <Input
              onChange={(e)=>setSurname(e.target.value)}
              type="text"
              name="surname"
              id="surname"
              placeholder="Ваша Фамилия"
              required={true}

            />
          </FormGroup>
          <FormGroup>
            <Label for="surname">Ваш номер телефона</Label>
            <Input
              onChange={(e)=>setPhone(e.target.value)}
              type="text"
              name="phone"
              id="phone"
              placeholder="Ваш номер телефона"
              required={true}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={(e)=>checkHandler(e)} /> Я согласен с условиями пользовательского
              соглашения
            </Label>
          </FormGroup>
          <Button disabled={registerButton} color='primary' onClick={()=>registerUser()}>Зарегистрироваться</Button>
        </Form>
      </Container>
    </div>
  );
}
