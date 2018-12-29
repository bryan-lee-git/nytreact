import React from 'react';
import { Col, Row, Container, Button, Icon, Card } from "react-materialize";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container className="center-align">
            <Row>
                <Col s={12}>
                    <h1>Welcome to the NYT Article Searcher!</h1>
                    <h5>Search through the New York Times Article Database for specific topics and save the articles you'd like to keep for later.</h5>
                </Col>
            </Row>
            <br/>
            <hr/>
            <br/>
            <br/>
            <Row>
                <Col s={6}>
                    <Card>
                        <Link to="/search">
                            <Icon center large>search</Icon><br/><br/>
                            <Button waves="light" className="btn-large">Search For Articles</Button>
                        </Link>
                    </Card>
                </Col>
                <Col s={6}>
                    <Card>
                        <Link to="/saved">
                            <Icon center large>save</Icon><br/><br/>
                            <Button waves="light" className="btn-large">View Saved Articles</Button>                                
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
