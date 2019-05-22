import React from 'react';
import { connect } from 'react-redux';
import { handleGetNotes } from '../actions/index';
import Note from '../components/Note';

class NotesList extends React.Component {
    componentDidMount = () => {
        this.props.handleGetNotes(this.props.token);
    };

    render() {
        return (
            <div>
                {this.props.notes.length > 0 ? this.props.notes.map(note => <Note key={note.id} data={note} />) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.noteReducer.notes,
        token: state.rootReducer.token
    }
}

export default connect(mapStateToProps, {handleGetNotes})