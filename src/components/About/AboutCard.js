import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Parth Bhadge </span>
            from <span className="purple"> Maharashtra , India.</span>
            <br /> I am a Third Year student pursuing B.Tech.
            in Computer Science and Engineering from Vellore Institute of Technology Bhopal.
            <br />
            Additionally, I am enthusiastic about Cloud computing like AWS.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> sports like volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
