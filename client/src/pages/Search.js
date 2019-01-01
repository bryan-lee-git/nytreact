import React from 'react';
import moment from "moment";
import NYT from "../utils/nyt-API";
import Article from "../utils/articles-API";
import SearchResult from "../components/SearchResult";
import { Col, Row, Container, Input, Card } from "react-materialize";
export const SearchContext = React.createContext();


class Search extends React.Component {

    state = {
        query: "",
        limit: "",
        start: "",
        end: "",
        results: "",
        errorMsg: "Enter a search query above to find New York Times articles!"
    }

    searchArticles = () => {
        NYT.getArticles(this.state.query, this.state.limit, this.state.start, this.state.end).then(response => {
            if (response.data.response.docs) {
                console.log(response.data.response.docs)
                this.setState({ results: response.data.response.docs });
            }
        }).catch(err => {
            if (err) {
                this.setState({errorMsg: "Your request did not return any results! Please try again."})
            }
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        if (name === "start" || name === "end") {
            this.setState({
                [name]: moment(value).format("YYYYMMDD")
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.searchArticles();
    }

    saveArticle = (event) => {
        const { headline, author, date, snippet, url } = event.target.dataset;
        Article.saveArticle({
            headline,
            author,
            date,
            snippet,
            url
        }).then(data => {
            console.log(data);
        })
    }

    render() {

        return (
            <SearchContext.Provider value={{state: this.state, saveArticle: this.saveArticle}}>
                <Container className="center-align">
                    <Row>
                        <Col s={12}>
                            <h1>NYT Article Search</h1>
                        </Col>
                    </Row>
                    <Card className="z-depth-5">
                        <Row>
                            <Col s={12}>
                                <form>
                                    <Input onChange={this.handleInputChange} placeholder="Enter a Search Term" s={3} label="Search Term" name="query" />
                                    <Input onChange={this.handleInputChange} s={3} type="number" label="Number of Records" defaultValue="5" name="limit" />
                                    <Input onChange={this.handleInputChange} type="date" label="Start Date" s={3} name="start" />
                                    <Input onChange={this.handleInputChange} type="date" label="End Date" s={3} name="end" />
                                    <Input onClick={this.onSubmit} className="btn" type="submit" s={12}></Input>
                                </form>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="bottom-row z-depth-5">
                        <Row>
                            <Col s={12}>
                                <h3>Search Results {this.state.query ? `for ${this.state.query}` : ""}</h3>
                            </Col>
                            {this.state.results !== "" ? this.state.results.map((article, index) => (
                                <SearchResult key={index} title={article.headline.main} author={article.byline.original} date={article.pub_date} snippet={article.snippet} url={article.web_url}/>
                            )) : <div>{this.state.errorMsg}</div>}
                        </Row>
                    </Card>
                </Container>
            </SearchContext.Provider>
        );
    }
}

export default Search;