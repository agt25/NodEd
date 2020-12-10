import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import trash from '../graphics/trash-Orange.png'

// Import Style
import './sidebaritem.scss'

class SidebarItemComponent extends React.Component {
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = note => {
      // Pop-up to confirm note item deletion 
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
        // Update prop to delete note if user clicks yes
      this.props.deleteNote(note);
    }
  };

  // Get the state of all components
  render() {
    const { _index, _note, selectedNoteIndex } = this.props;

    return (
      <div key={_index}>
          {/* Return a list of all the notes;
            If a list item is selected, highlight it */}
        <ListItem
          className="listItem"
          onClick={() => this.selectNote(_note, _index)}

          // An item is considered selected if the selectedNoteIndex is equal to _index
          selected={selectedNoteIndex === _index}
          alignItems="flex-start">
          <div
            className="textSection"
            onClick={() => this.selectNote(_note, _index)}>
             
            <ListItemText className="listItemText"
            // Display note titles for all notes in collection
              primary={_note.title}
              //secondary={removeHTMLTags(_note.body.substring(0, 30)) + "..."}
              ></ListItemText>
          </div>
          
          <div className="trash"> 
          <img src={trash} alt="Trash Icon" 
            // onClick event announces note deletion 
            onClick={() => this.deleteNote(_note)}
            className="deleteIcon"></img>
            </div>
        </ListItem>

      </div>
    );
  }
}

export default SidebarItemComponent;
