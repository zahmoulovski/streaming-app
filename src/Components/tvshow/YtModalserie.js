import React from 'react';
import {useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {dataserie} from '../data/Data';
import YoutubeEmbed from '../YoutubeID';

function MyVerticallyCenteredModal(props) {
  const {id}=useParams()

  const serieID=dataserie.find((e)=>e.id==id)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Trailer of {serieID.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YoutubeEmbed embedId={serieID.trailer} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function YtModalserie() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-danger" onClick={() => setModalShow(true)}>
      ▶ Trailer 
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default YtModalserie
