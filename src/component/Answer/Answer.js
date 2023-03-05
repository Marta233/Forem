import React from "react";
import "./Answer.css";
import Form from "react-bootstrap/Form";
import prof from "../imgs.png";

function Answer() {
  return (
    <div className="main">
      <div className="usersprof_wrapper">
        <div className="Quastions">
          <h4>Quastion</h4>
          <p>what is react Router Dom?</p>
          <p className="quastionDescription">How it work</p>
        </div>
        <div className="answers">
          <h4 id="community">Answer From The community</h4>
          <div className="userprof1">
            <div className="usersprofile">
              <img src={prof} />
              <p className="userName">user Name</p>
            </div>
            <div className="userans">
              <p>it uses for routing purpose</p>
            </div>
          </div>
        </div>
      </div>

      <div className="maincontant">
        <div className="quastionTitle">
          <h5>Answer The Top Quastion</h5>
          <a href="#">Go To Quastion Page</a>
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places1"
                placeholder="Your Answer.."
                as="textarea"
                rows={6}
              />
            </Form.Group>
            <input
              type="submit"
              className="submitQuastion"
              value="Post Your Answer"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Answer;
