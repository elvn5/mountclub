
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import AuthForm from '../AuthForm/AuthForm'

const ModalAuth = (props) => {
  const {
    buttonLabel
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div >
      <Button color='info' onClick={toggle}>{buttonLabel}</Button>
      <Modal  isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Добавить поле</ModalHeader>
        <ModalBody >
          <AuthForm auth={props.auth}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalAuth;