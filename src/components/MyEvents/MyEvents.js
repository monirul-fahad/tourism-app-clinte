/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyEvents = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://dry-badlands-77252.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const userOrders = allOrders.filter((orders) => orders.email === user.email);

  const handleDelete = (id) => {
    console.log(id);
    const url = `https://dry-badlands-77252.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          confirm("You are deleting an ordered event!!");
          const remaining = allOrders.filter((event) => event._id !== id);
          setAllOrders(remaining);
        }
      });
  };

  return (
    <div className="bg-info py-5">
      <Container>
        <h2>This is My manage event page.</h2>

        {userOrders.map((order) => (
          <div
            className="card mb-3 mx-auto"
            style={{ maxWidth: "700px" }}
            key={order._id}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={order.order.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body text-start px-5 px-md-3">
                  <h4 className="card-title">{order.order.eventName}</h4>

                  <div className="row-col ">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(order._id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default MyEvents;
