import React from "react";
import { Button, Card, Modal } from "react-bootstrap";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-dark fs-2 fw-bold d-flex justify-content-center align-items-center w-100 gap-5"
        >
          {props.movieName}
          {props.movieRate > 5 ? (
            <span className="text-light bg-success text-center rounded p-2">
              {props.movieRate}
            </span>
          ) : (
            <span className="text-light bg-danger text-center rounded p-2">
              {props.movieRate}
            </span>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Img variant="top" src={props.movieShot} />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Text className="text-danger fw-bold">
                <span className="text-primary fw-bold">release Date: </span>
                {props.movieRelease}
              </Card.Text>
              <Card.Text className="text-dark">
                <span className="text-primary fw-bold ">Vote Counts: </span>
                {props.movieVoteCount}
              </Card.Text>
              <Card.Text className="text-dark">
                <span className="text-primary fw-bold">Language: </span>
                {props.movieLang}
              </Card.Text>
            </div>
            <Card.Text className="fs-6 text-secondary">
              <span className="text-dark fw-bold">Overview:</span>
              {props.movieDetails}
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
