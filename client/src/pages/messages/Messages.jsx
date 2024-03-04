import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Rajman",
    isSeller: true,
  };
  let message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reprehenderit  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Molestias, reprehenderit`;
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="active">
              <td>Rajman</td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 hour ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>

            <tr className="active">
              <td>Rajman</td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 hour ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>

            <tr>
              <td>Rajman</td>
              <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
              <td>1 hour ago</td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
