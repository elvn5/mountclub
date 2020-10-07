import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div>
      <Button color='info'>
          <a href='http://google.com'>

        <FontAwesomeIcon color="black" icon={faUserFriends} />
          </a>
      </Button>
    </div>
  );
}
