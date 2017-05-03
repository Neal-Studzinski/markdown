import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import container from '../containers/all.js'
import marked from 'marked';

class EnterPost extends React.Component {
    constructor(props) {
        super(props);
        this.enterText = this.enterText.bind(this);
        this.submitMarkdownNotes = this.submitMarkdownNotes.bind(this);
        this.dismissConfirmationMessage = this.dismissConfirmationMessage.bind(this);
        this.confirmationMessage = this.confirmationMessage.bind(this);
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

    submitMarkdownNotes() {
        const draft = this.props.draft;


        this.props.dispatch({
            type: "SUBMIT_NOTES",

        })
        console.log('Notes sumbitted to Backendless')
    }

    dismissConfirmationMessage() {
        this.props.dispatch({
            type: 'DISMISS_CONFIRMATION'
        });
    }

    confirmationMessage() {
        if (this.props.showConfirmationMessage == true) {
            return <div className ='confirmation-message'>You have submitted your note to the server
                <button onClick={this.dismissConfirmationMessage} className = 'dismiss-button'>Dismiss
                </button>
                </div>
        }else {
            return '';
        }
    }

    render() {
        var marked = require('marked');
        return (
            <div className = 'post-editor'>
                <h2>New Note</h2>
                <div className = 'editor-container'>
                    <section className = 'post-entry'>
                        <textarea
                            value = {this.props.draft}
                            className = 'post-input'
                            onChange = {this.enterText}
                            id = 'post-raw-text'
                            name = 'post raw text in markdown'
                            rows = '1'
                            cols = '60'
                            placeholder = 'type post in markdown'
                        />
                        <div className = 'submit-button-container'>
                            <button className = 'submit-button' type = 'submit' onClick = {this.submitMarkdownNotes}>submit
                            </button>
                        </div>
                        {this.confirmationMessage()}
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
