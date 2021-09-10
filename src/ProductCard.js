import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const axios = require("axios");

const Card = () => {
  useEffect(() => {
    // fetchData("https://opentdb.com/api.php?amount=10");
  }, []);

  // const fetchData = (url) => {
  //   axios
  //     .get(url)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
      <div>
          <FontAwesomeIcon icon="check-square" />
          Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
      </div>

  ) 
};

export default Card;
