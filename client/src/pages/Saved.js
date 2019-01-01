import React from 'react';
import { Col, Row, Container, Card } from "react-materialize";
import SavedResult from "../components/SavedResult";
import Article from "../utils/articles-API";
export const SaveContext = React.createContext();

class Saved extends React.Component {

    state = {
        results: "",
        errorMsg: "NO SAVED ARTICLES!"
    }

    getSaved = () => {
        Article.getSavedArticles().then(response => {
            console.log(response.data);
            this.setState({results: response.data})
        })
    }

    componentDidMount = () => {
        this.getSaved();
    }

    deleteArticle = (event) => {
        const id = event.target.dataset.id;
        Article.deleteArticle(id).then(data => {
            this.getSaved();
        })
    }


    render() {
        return (
            <SaveContext.Provider value={{state: this.state, deleteArticle: this.deleteArticle}}>
                <Container className="center-align">
                    <Row>
                        <Col s={12}>
                            <h1>Your Saved Articles</h1>
                        </Col>
                    </Row>
                    <Card className="bottom-row z-depth-5">
                        {this.state.results.length > 0 ? this.state.results.map((article, index) => (
                            <SavedResult key={index} id={article._id} title={article.headline} author={article.author} date={article.date} snippet={article.snippet} url={article.url}/>
                        )) : <div><h2>{this.state.errorMsg}</h2></div>}
                    </Card>
                </Container>
            </SaveContext.Provider>
        );
    }
}

export default Saved;
