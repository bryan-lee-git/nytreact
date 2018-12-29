import React from 'react';
import moment from "moment";
import { Card, Button, Col, Row } from "react-materialize";

const SearchResult = (props) => {
    return (
        <Col s={12}>
            <Card>
                <h5>{props.title}</h5>
                {props.author ? <p>{props.author} - {moment(props.date).format("MM/DD/YYYY")}</p> : <p>{moment(props.date).format("MM/DD/YYYY")}</p>}
                <br/>
                <p>{props.snippet}</p>
                <br/>
                <hr/>
                <br/>
                <Row>
                    <Col s={4} offset="s1">
                        <a rel="noopener noreferrer" target="_blank" href={props.url}>
                            <Button>View Article</Button>
                        </a>
                    </Col>
                    <Col s={4} offset="s2">
                        <Button>Save Article</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
}

export default SearchResult;
