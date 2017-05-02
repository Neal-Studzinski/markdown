import store from '../store.js';


let initialState = {
    draft: '',
    showConfirmationMessage: false
};

export default function AppReducer(currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "UPDATE_DRAFT":
        var newState = {
            draft:action.rawText
        };
        return Object.assign({}, currentState, newState);

    case "SUBMIT_NOTES":
        let newState = {
            draft : currentState.draft

        }
        console.log('draft', newState.draft);
        console.log('length', newState.draft.length);
        if (newState.draft.length > 50) {
            $.ajax({
                type: 'POST',
                url: 'https://api.backendless.com/68949845-B4E0-193D-FFA9-CDED0DACCC00/7765F30C-6FB7-1900-FFA4-4BB1A69E2000/data/Markdown',
                headers: {
                    // 'application-id': '68949845-B4E0-193D-FFA9-CDED0DACCC00',
                    // 'secret-key': '7765F30C-6FB7-1900-FFA4-4BB1A69E2000',
                    'application-type': 'REST',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    'Notes': newState.draft
                }),
                success: (data,status,xhr) => {
                    store.dispatch({type: 'SHOW_CONFIRMATION'});
                    store.dispatch({type: 'EMPTY_MARKDOWN_NOTES'});
                }
            })
            return Object.assign({}, currentState, newState);

        }else {
            return currentState;
        }

    case 'EMPTY_MARKDOWN_NOTES':
        var newState = {
            draft : '',
            markdownPreview : ''
        };
        return Object.assign({}, currentState, newState)

    case 'DISMISS_CONFIRMATION':
        var newState = {
            showConfirmationMessage: false
        }
        return Object.assign({}, currentState, newState)

    case 'SHOW_CONFIRMATION':
        var newState = {
            showConfirmationMessage: true
        }
        return Object.assign({}, currentState, newState)

    default:
        return currentState

  }



}
