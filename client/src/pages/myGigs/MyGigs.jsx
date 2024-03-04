import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" className="link">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Iamge</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>89</td>
              <td>120</td>
              <td>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>89</td>
              <td>120</td>
              <td>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>89</td>
              <td>120</td>
              <td>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>89</td>
              <td>120</td>
              <td>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
