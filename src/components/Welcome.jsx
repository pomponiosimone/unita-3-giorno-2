import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Welcome () {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-content-center">
<Col md={12}> <h2>Benvenuto</h2>
</Col>
<Col md={12} > <h4>Shop di materiali per la pelle</h4>
</Col>

            </Row>
            
        </Container>
    )
}
export default Welcome