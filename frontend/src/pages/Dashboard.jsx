import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col lg="4" className="mt-3">
            <Card className="w-100 h-100">
              <Card.Body>
                <Card.Title> Michael Jordan F. Adriano</Card.Title>
                <hr></hr>
                <Card.Text>
                  A career shifter from being an Electronics Engineer to become a Web developer or Full Stack developer.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard