import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import BookingForm from './components/form/BookingForm';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Row className="booking-container">
          <Col md={11} id="select-booking" >
            <BookingForm />
          </Col>
        </Row>
        <div className="footer" style={{ display: "flex", paddingLeft: "3rem", fontSize: ".75em", paddingTop: "15px", color: "#000000", fontWeight: 400 }}>
          <p>© {new Date().getFullYear()} Anticafé. Tous droits réservés. </p>
          <p> Mentions légales</p>
          <p> - </p>
          <p>Conditions générales de vente</p>
        </div>
      </>
    )
  }
}

export default App;

