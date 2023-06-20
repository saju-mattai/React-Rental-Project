import React, { useState } from "react";
import {
  Button,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

const BikeOrder = () => {
  const [showModal, setShowModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [reasonOptions] = useState([
    "Changed my mind",
    "Found a better deal",
    "No longer need it",
    "Ordered by mistake",
    "Other",
  ]);

  const handleCancel = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCancelReason("");
  };

  const handleConfirmCancel = () => {
    // Perform cancellation logic here
    console.log("Cancelled reason:", cancelReason);
    setShowModal(false);
    setCancelReason("");
  };

  return (
    <div>
      <h1>Bike Order</h1>
      <Button color="primary" onClick={handleCancel}>
        Cancel Order
      </Button>

      <MDBModal isOpen={showModal} toggle={handleCloseModal}>
        <MDBModalHeader>Cancel Order</MDBModalHeader>
        <MDBModalBody>
          <p>Please select a reason for cancelling your bike order:</p>
          <select
            className="form-control"
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
          >
            <option value="">Select a reason</option>
            {reasonOptions.map((reason, index) => (
              <option key={index} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </MDBModalBody>
        <MDBModalFooter>
          <Button color="danger" onClick={handleConfirmCancel}>
            Confirm Cancel
          </Button>
          <Button color="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
};

export default BikeOrder;
