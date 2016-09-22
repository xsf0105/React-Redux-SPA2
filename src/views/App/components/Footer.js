import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import 'styles/components/Footer.css';

class Footer extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const { router } = this.context;
        return (
            <footer className="clearfix">
                <div className="col4"><a href="#" onClick={() => router.transitionTo('/')}>首页</a></div>
                <div className="col4"><a href="#" onClick={() => router.transitionTo('detail')}>服务1</a></div>
                <div className="col4"><a href="#" onClick={() => router.transitionTo('detail')}>服务1</a></div>
                <div className="col4"><a href="#" onClick={() => router.transitionTo('detail')}>服务1</a></div>
            </footer>
        );
    }
}

export default connect(state => {
    return {session: state.session};
})(Footer);

