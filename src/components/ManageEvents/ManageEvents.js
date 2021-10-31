/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ManageEvents.css";

const ManageEvents = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    fetch("https://dry-badlands-77252.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://dry-badlands-77252.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          confirm("You are deleting an ordered event!!");
          const remaining = orders.filter((event) => event._id !== id);
          setOrders(remaining);
        }
      });
  };

  const handleStatus = (id) => {
    const url = `https://dry-badlands-77252.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("updated Successfully");
        }
        window.location.reload();
      });
  };

  return (
    <div className="manageEvents py-5">
      <Container>
        <h2>Manage All Booked Events By Users</h2>

        {orders.map((order) => (
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
                  <h5 className="card-title">
                    <span className="text-secondary">Event Name:</span>
                    <br />
                    {order.order.eventName}
                  </h5>
                  <h5 className="card-title">
                    <span className="text-secondary">Ordered by:</span>
                    <br />
                    {order.name}
                  </h5>

                  <div className="row-col ">
                    {order.status ? (
                      <button
                        onClick={() => handleStatus(order._id)}
                        className="btn btn-success me-3"
                      >
                        Approved
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStatus(order._id)}
                        className="btn btn-warning me-3"
                      >
                        Pending
                      </button>
                    )}

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

export default ManageEvents;
