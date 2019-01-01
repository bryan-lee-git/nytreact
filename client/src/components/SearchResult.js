import React from 'react';
import moment from "moment";
import { Card, Button, Col, Row } from "react-materialize";
import { SearchContext } from "../pages/Search";

const SearchResult = (props) => {
    return (
        <SearchContext.Consumer>
            {(context) => {
                return (
                    <Col s={12}>
                        <Card className="article-card">
                            <h5>{props.title}</h5>
                            {props.author ? <p>{props.author} - {moment(props.date).format("MM/DD/YYYY")}</p> : <p>{moment(props.date).format("MM/DD/YYYY")}</p>}
                            <br/>
                            <p>{props.snippet}</p>
                            <br/>
                            <Row>
                                <Col s={4} offset="s1">
                                    <a rel="noopener noreferrer" target="_blank" href={props.url}>
                                        <Button className="btn-large">View Article</Button>
                                    </a>
                                </Col>
                                <Col s={4} offset="s2">
                                    <Button onClick={context.saveArticle} data-headline={props.title} data-author={props.author} data-date={props.date} data-snippet={props.snippet} data-url={props.url} className="btn-large">Save Article</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                )
            }}
        </SearchContext.Consumer>
    );
}

export default SearchResult;
