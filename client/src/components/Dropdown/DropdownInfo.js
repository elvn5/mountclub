import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {faClipboard} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Dropdown.css'

const DropdownInfo = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown  isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{backgroundColor:'rgb(23,162,184)'}} caret>
        <FontAwesomeIcon color='black' icon={faClipboard}/>
        </DropdownToggle>
      <DropdownMenu className='dropdown'>
        <DropdownItem header>Полезная информация</DropdownItem>
        <DropdownItem>Covid Backpack</DropdownItem>
        <DropdownItem divider />
        <DropdownItem><a target='_blank' href='https://drive.google.com/file/d/1RsmTV28clX6RS7DJZ9Tujr9UXOEVpFkM/view?usp=sharing'>Правила безопасности в горных походах</a></DropdownItem>
        {/* <DropdownItem divider />
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Quo Action</DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownInfo;