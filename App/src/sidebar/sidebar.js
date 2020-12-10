import React from "react";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebaritem/sidebaritem";
import SidenavbarComponent from "../Sidenavbar";

// Import style
import './sidebar.scss';


class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null
    };
  }
  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    // If notes is not null, return the list of notes
    if (notes) {
      return (
        
        <div className="sidebarContainer">
          <Button onClick={this.newNoteBtnClick} className="newNoteBtn">
            {/* If adding a new note event is true, then output Cancel. 
              If event is false, then output New Note */}
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          
          {this.state.addingNote ? (
            // If there's a new note, return a div; else, return null
            <div>
              <input
                type="text"
                className="newNoteInput"
                placeholder="Enter note title"

                // OnKeyUp, pass event to update state for updateTitle with the event's value
                onKeyUp={e => this.updateTitle(e.target.value)}
              ></input>
              <Button
                className="newNoteSubmitBtn"
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>

            // Return null if there's no new note
          ) : null}

          {/* List of Notes maps individual notes previously saved */}
          <List>
            {notes.map((_note, _index) => {
              // For each note and its index, return HTML
              return (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItemComponent>
                  <Divider>
                    {/* Dividing line between each sidebaritem component */}
                  </Divider>
                </div>
              );
            })}
          </List>
        </div>
        
      );
    } else {
      return <div></div>;
    }
  }

  /* Function below flips the state of addingNote. 
  If true, it flips to false and vice versa.
  It also resets the title so a new note event does not get the last note's title */ 
  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  // Set state of title to match the new value (txt)
  updateTitle = txt => {
    this.setState({ title: txt });
  };

  // Pass the state of the new note to the sidebar
  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };

  // Get the states of selectNote and deleteNote functions from App.js
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = note => this.props.deleteNote(note);
}

export default SidebarComponent;
