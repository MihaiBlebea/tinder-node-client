import React, { Component } from 'react';
import { Navigation } from './components/components';
import { MainLayout } from './layouts/layouts';
import { HomePage, GirlPage, GirlsPage, NewsPage } from './pages/pages';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation />

                    <MainLayout>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/girls" component={GirlsPage} />
                        <Route path="/girl/:id" component={GirlPage} />
                        <Route path="/news" component={NewsPage} />
                    </MainLayout>
                </div>
            </Router>
        );
    }
}

export default App;
