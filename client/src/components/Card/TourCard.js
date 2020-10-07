import React, { useContext, useEffect} from "react";
import { Button, Col, Container, Row } from "reactstrap";
import {Card,CardImg,CardText,CardBody,CardTitle,} from "reactstrap";
import "./TourCard.css";
import { ToursContext } from "../../contexts/tours/tours.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faMountain,faStopwatch, faMoneyBill, faMapMarkerAlt, faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import ModalEdit from "../ModalEdit/ModalEdit";
import BookModal from "../BookModal/BookModal";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const TourCard = (props) => {
  const { toursState, toursDispatch } = useContext(ToursContext);
  const fetchData = () => {
    toursDispatch({
      type: "GET_DATA",
    });
  };

  useEffect(fetchData, []);

  let isAdminCards = props.Admin; //TODO Доделать норм админку и убрать этот костыль



  function deleteHandler(item) {
    console.log(item)
    toursDispatch({
      type: "DELETE_ITEM",
      payload: item.id,
    });
  }

  return (
    <div>
      <Container className="main">
        <Row>
          {toursState.tours.map((item) => (
            <Col key={item.id} lg="4">
              <div data-aos="fade-up" data-aos-duration="3000">
                <Card id={item.id} className="card mb-5">
                <div className="cardImage">
                  <CardImg
                    style={{height:'30vh'}}
                    className="cardImage"
                    top
                    width="100%"
                    src={item.image}
                    alt="Card image cap"
                  />
                </div>
                <CardBody>
                  <CardTitle>
                    <h2>{item.location}</h2>
                  </CardTitle>
                  <CardText>
                  <FontAwesomeIcon color="blue" icon={faMountain} /> {item.complexity} <br />
                  <FontAwesomeIcon color="green" icon={faCalendarAlt} />  {item.date}
                    <br />
                    <FontAwesomeIcon color="orange" icon={faMoneyBill} /> {`${item.price} сом`}
                    <br />
                    <FontAwesomeIcon color="purple" icon={faMapMarkerAlt} /> {item.meeting}
                    <br />
                    <FontAwesomeIcon color="rgb(22, 148, 127)" icon={faStopwatch} /> {item.tourType}
                  </CardText>
                  <div className="cardButtons">
                  <BookModal item={item}/>
                    {isAdminCards ? (
                      <>
                        <Button
                          onClick={() => deleteHandler(item)}
                          color="danger"
                        >
                          <FontAwesomeIcon color="black" icon={faTrash} />
                        </Button>
                        <ModalEdit data={item} className="ModalEdit"/>
                      </>
                    ) : null}
                  </div>
                </CardBody>
              </Card>
              </div>
              
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TourCard;
