import React from "react";
import prof from "../imgs.png";
import "./ListQuastion.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function ListQuastion() {
  return (
    <div className="maincontainer">
      <div className="NameandLink">
        <a href="#">Ask Quastion</a>
        <p>Wellcome: Marta</p>
      </div>
      <div className="ListQuation">
        <h3>Quastion</h3>
      </div>

      <div className="userprof">
        <div className="userprof1">
          <div className="usersprofile">
            <img src={prof} />
            <p className="userName">user Name</p>
          </div>
          <div className="userans">
            <p>it uses for routing purpose</p>
          </div>
        </div>
        <div>
          <ArrowForwardIosOutlinedIcon className="arrows" />
        </div>
      </div>
    </div>
  );
}

export default ListQuastion;
