import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Movies from "./MovieDetail"
import React from 'react';
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        fetch("https://api.chucknorris.io/jokes/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        categories: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({

                    });
                }
            )
    }
    render() {
        const { categories } = this.state;
        return (
            <Router>
                <div className="columns">
                    <div className="column is-2">
                        <aside className="menu">
                            <p className="menu-label">
                                Categories
                </p>
                            <ul className="menu-list">
                                <li><a href="/">Dashboard</a></li>
                                {categories.map(cat => (<Link to={`/movies/${cat}`} key={cat}>{cat}</Link>))}
                            </ul>
                        </aside>
                    </div>
                    <div className="column is-10">

                        <Switch>
                            <Route path="/movies/:category">
                                <Movies></Movies>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Category
