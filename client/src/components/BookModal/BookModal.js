import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Axios from "axios";
import swal from "sweetalert";

export default function BookModal(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [check, setCheck]= useState(false)

  const checkHandler= (e)=>{
    setCheck(!check)
    console.log(check)
  }

  const bookHandler = (e) => {
    e.stopPropagation()
    console.log('bookHandler event: ', e)
    props.item.name = name;
    props.item.surname = surname;
    props.item.phone = phone;
    if(name =="" && surname==""&& phone==""){
      swal("Ошибка", "Заполните все поля", "warning")
    }else{
      console.log(props.item)
      Axios.post(`http://localhost/book`, {
        data: props.item,
      });
      swal("Успешно", "Ваша заявка принята в обработку", "success");
    }
  };
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        <FontAwesomeIcon color="black" icon={faHiking} />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Бронировать
        </ModalHeader>
        <ModalBody>
            
          <ul>
          💴Способы оплаты: 
            <li>ЭЛСОМ: 0708970242 </li>
            <li>Balance.kg: 0773970242 Demir Bank</li>
            <li>Visa: Карта 4215 8901 1495 8926 </li>
            <li>KICB Visa 4446 7445 2691 3899</li>
            (Получатель: Жунусалы Маметов) ⠀ 
          </ul>
          
          <p>
            🔻После оплаты скрин платежа или чек
          отправляете по WhatsApp или Telegram на номер 0708970242
          </p>
          <br></br>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="surname">Ваша Фамилия</Label>
                  <Input
                    onChange={(e) => setSurname(e.target.value)}
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Введите Вашу Фамилию"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Имя</Label>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Введите Ваше Имя"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="phone">Номер телефона</Label>
              <Input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                name="phone"
                id="phone"
                placeholder="Введите номер мобильного телефона"
              />
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox"  onChange={(e)=>checkHandler(e)} name="check" id="acceptCheck" />
              <Label for="acceptCheck" check>
                Я принимаю условия пользовательского соглашения
              </Label>
            </FormGroup>
            <Button disabled={!check} color="primary" onClick={(e)=>bookHandler(e)} >
              Забронировать
            </Button>
          </Form>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="info" onClick={toggle}>
            Выйти
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}
