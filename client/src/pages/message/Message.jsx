import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGES
          </Link>
          {">"}RAJMAN{">"}
        </span>
        <div className="messages">
          <div className="item">
            <img src="/img/man.png" alt="raja" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur saepe voluptatibus impedit harum, culpa quo beatae
              modi distinctio quasi voluptates et magnam dicta dolor debitis
              vero fuga repudiandae, facere quaerat!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/rajman.png" alt="raja" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur saepe voluptatibus impedit harum, culpa quo beatae
              modi distinctio quasi voluptates et magnam dicta dolor debitis
              vero fuga repudiandae, facere quaerat!
            </p>
          </div>
          <div className="item">
            <img src="/img/man.png" alt="raja" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur saepe voluptatibus impedit harum, culpa quo beatae
              modi distinctio quasi voluptates et magnam dicta dolor debitis
              vero fuga repudiandae, facere quaerat!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/rajman.png" alt="raja" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur saepe voluptatibus impedit harum, culpa quo beatae
              modi distinctio quasi voluptates et magnam dicta dolor debitis
              vero fuga repudiandae, facere quaerat!
            </p>
          </div>
          <div className="item">
            <img src="/img/man.png" alt="raja" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur saepe voluptatibus impedit harum, culpa quo beatae
              modi distinctio quasi voluptates et magnam dicta dolor debitis
              vero fuga repudiandae, facere quaerat!
            </p>
          </div>
          <div className="item owner">
            <img src="/img/rajman.png" alt="raja" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur saepe voluptatibus impedit harum, culpa quo beatae
              modi distinctio quasi voluptates et magnam dicta dolor debitis
              vero fuga repudiandae, facere quaerat!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
