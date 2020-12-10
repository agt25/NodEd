import React from "react";
import Sidenavbar from './Sidenavbar';
import SidebarComponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";
import "./App.scss";
import SidenavbarComponent from "./Sidenavbar";

// Require firebase database
const firebase = require("firebase");



// Until a successful initial mount, the state of the app's components is null
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  /* Source: Tutorial of Firebase Integration: 
  CodeAcademy: https://www.youtube.com/watch?v=I250xdtUvy8
  NodEd does not use Quill */

  // Render all the components of the app
  render() {
    return (
      <div className="app-container">
        <SidenavbarComponent></SidenavbarComponent>
        <SidebarComponent
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        ></SidebarComponent>
        {
          /* If a note from the note list has been selected, highlight it and
          return the text editor */
           
          // Ternary operator checks if a note has been selected 
          this.state.selectedNote ? (
          <EditorComponent
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
            noteUpdate={this.noteUpdate}
          ></EditorComponent>
          // Else, if note selected, return null
        ) : null}
      </div>
    );
  }

  // Whenever the app compontent is loaded successfully, this gets called automatically by React.
  // If successful, goes to Firebase and updates the state of the null components
  // On Snapshot calls the serverUpdate function when notes inside the notes collection are updated 
  // The array is called to return the data
  // Update the state with the updated note
  componentDidMount = () => {
    firebase.default
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        // Update state of notes to note content
        this.setState({ notes: notes });
      });
      // Avoid the "can't unmount react error" by explicitly returning true
      this._isMounted = true;
  }


  // Select note by update state to selection's index and note content
  selectNote = (note, index) =>
    this.setState({ selectedNoteIndex: index, selectedNote: note });

  // Update the note object to Firebase 
  noteUpdate = (id, noteObj) => {
    firebase.default
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
        // Firebase function that updates timestamp on the server
        timestamp: firebase.default.firestore.FieldValue.serverTimestamp()
      });
  };

  // Add new note to Firebase
  newNote = async title => {
    const note = {
      title: title,
      body: ''
    };

    // Await a Firebase call to the collection, then add
    const newFromDB = await firebase.default
      .firestore()
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.default.firestore.FieldValue.serverTimestamp()
      });
    
    // Save the note id which Firebase automatically generates for each note
    const newID = newFromDB.id;

    // Update all of the notes we already have in the array as stated by "..."
    // And add the current new note
    await this.setState({ notes: [...this.state.notes, note] });

    /* Find the index of the new note inside that note variable. 
    indexOf finds the index. 
    But first filter through all the notes,
    and find the one that matches the id of current note's id */ 
    const newNoteIndex = this.state.notes.indexOf(
      this.state.notes.filter(_note => _note.id === newID)[0]
    );

    // Update the currently selected note to the one just created
    this.setState({
      selectedNote: this.state.notes[newNoteIndex],
      selectedNoteIndex: newNoteIndex
    });
  };

  // Delete Note takes the note object's index
  deleteNote = async note => {
    const noteIndex = this.state.notes.indexOf(note);

    // Set the updated state of the notes list
    // Return all the notes on sidebar.js as long as they are not the deleted note
    await this.setState({
      notes: this.state.notes.filter(_note => _note !== note)
    });

    /* If the note to be deleted is selected (highlighted), then set state for selected note to null.
    This will deselect the note.
    And it prohibits the deleted note from trying to re-appear as selected on the sidebar */ 
    if (this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null }); 
    } 
    
    /* If the array of notes is greater than 1, 
    and if the note to deleted isn't currently selected, 
    update the index of all notes to be - 1 */ 
    else {
      this.state.notes.length > 1 ? 
      this.selectNote(
            this.state.notes[this.state.selectedNoteIndex - 1],
            this.state.selectedNoteIndex - 1
          )
          /* Else (: ternary operator) if the array of notes isn't greater than 1,
          a.k.a the collection of notes is empty since the last note was deleted, 
          update index to null and deleted everything */
        : this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    // Update firebase
    firebase.default
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  };
}
export default App;
