import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    headerClickable({ history }) {
        return (
            <header className = 'page-header'>
                <h1 className = 'page-heading' onClick={() => history.push('/')}>
                Markup App
                </h1>
            </header>
        );
    }

    render() {
        return <Route render={this.headerClickable} />
    }
}

export default connect()(Header);
