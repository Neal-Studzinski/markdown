import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import container from '../containers/all.js'
import marked from 'marked';

class EnterPost extends React.Component {
    constructor(props) {
        super(props);
        this.enterText = this.enterText.bind(this);
    }

    enterText(e) {
        this.auto_grow(e.target);
        this.props.dispatch({ type: 'UPDATE_DRAFT', rawText: e.target.value });
    }

    createMarkup(rawText) {
        return {__html: marked(rawText)};
    }

    auto_grow(element) {
        element.style.height = '5px';
        element.style.height = element.scrollHeight + 'px';
    }

    render() {
        var marked = require('marked');
        return (
            <div className = 'post-editor'>
                <h2>New Blog Post</h2>
                <div className = 'editor-container'>
                    <section className = 'post-entry'>
                        <textarea
                            className = 'post-input'
                            onChange = {this.enterText}
                            id = 'post-raw-text'
                            name = 'post raw text in markdown'
                            rows = '1'
                            cols = '60'
                            placeholder = 'type post in markdown'
                        />
                    </section>
                    <section className = 'markdown-preview-section'>
                        <article
                            className = 'markdown-article'
                            dangerouslySetInnerHTML = {this.createMarkup(this.props.draft)}
                        />
                    </section>
                </div>
            </div>
        );
    }
}

export default connect(container.allState)(EnterPost);
