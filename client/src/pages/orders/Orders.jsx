import React from "react";
import "./Order.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { isPending, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => newRequest.get("/orders").then((res) => res.data),
  });
  if (!isPending) {
    console.log(data);
    console.log(currentUser);
  }
  return (
    <div className="orders">
      {isPending ? (
        "loading..."
      ) : error ? (
        "Something Went Wrong"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  <td>
                    <img
                      className="image"
                      src={
                        order.img ||
                        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      }
                      alt=""
                    />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>120</td>
                  <td>
                    <img className="delete" src="/img/message.png" alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
