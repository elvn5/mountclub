import React from 'react'
import { Row } from "reactstrap";
import TourCard from "../Card/TourCard";
import Header from "../Header/Header";
import "./Main.css";

export default function Main(props) {
  return (
    <div>
      <Header/>
      <TourCard Admin={props.Admin} />
      <Row>
        <div className='contentPaginationBlock'>
          {/* <ContentPagination/> */}
        </div>
      </Row>
    </div>
  );
}
