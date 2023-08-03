import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import EditPostModal from "./EditPostModal";

function CarouselCard(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const developmentUri =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3500"
            : "https://www.ppi-mib.co.uk";

    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={`${developmentUri}/${props.post.image}`}
                />
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>
                        {props.post.title}
                    </Card.Title>
                    <Card.Text>{props.post.text}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                        style={{ textAlign: "left" }}
                    >
                        Edit Carousel
                    </Button>
                    <EditPostModal
                        show={modalShow}
                        post={props.post}
                        onHide={() => setModalShow(false)}
                    />
                </Card.Body>
            </Card>
        </>
    );
}

export default CarouselCard;
