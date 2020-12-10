import React from "react";
import debounce from "../helper";

// Import text editor
import { Editor } from '@tinymce/tinymce-react'; 


// Import style
import './editor.scss';


// Extend React Component
class EditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
      id: ""
    };
  }

   /* Life cycle hook to update the value inside the text editor.
  Only works for the first note to load on the DOM */ 
  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    });
  }

  /* If the id of the current selection is not the id of the one displaying, 
  Call set state again */ 
  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id
      });
    }
  };

  
  // Return the text editor column of the app
  render() {
    const { classes } = this.props;

    return (
      <div className="editorContainer">
        {/* Retrive/show note title as well as allow user to update it */}
        <input
          className="titleInput"
          placeholder="Note title..."
          value={this.state.title ? this.state.title : ""}
          onChange={e => this.updateTitle(e.target.value)}
        ></input>
        <div className="border"></div>
        
        {/* Return the Text Editor.
        Custom plugins and settings specified below */}

        <Editor
          apiKey='la8dq0sua7phv87s1npyb5689o6t799gn92bxo55pfnp8f50'
          value={this.state.text}
          onEditorChange={this.updateBody}
          height="100%"
          init={{
            skin: 'snow',
            icons: 'thin',
            powerpaste_html_import: "merge",
            menubar: 'file edit view insert format tools tc help',
            plugins: [
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table wordcount",
              "textpattern lists",
              'lists code emoticons',
              'codesample',
              'powerpaste',
              'autolink',
              'textcolor colorpicker',
              'media',
              'media mediaembed',
              'imagetools',
              'pagebreak',
              'export',
              'tinymcespellchecker',
              'linkchecker',
              'toc',
              'searchreplace',
              'quickbars',
              'hr',
              'link',
              'fonts',
            ],
            quickbars_image_toolbar: true,
            spellchecker_language: 'en_us',
            mediaembed_max_width: 450,
            codesample_languages: [
              { text: 'HTML/XML', value: 'markup' },
              { text: 'JavaScript', value: 'javascript' },
              { text: 'CSS', value: 'css' },
              { text: 'PHP', value: 'php' },
              { text: 'Ruby', value: 'ruby' },
              { text: 'Python', value: 'python' },
              { text: 'Java', value: 'java' },
              { text: 'C', value: 'c' },
              { text: 'C#', value: 'csharp' },
              { text: 'C++', value: 'cpp' }
            ],
            textpattern_patterns: [
              {start: '#', format: 'h1'},
              {start: '##', format: 'h2'},
              {start: '###', format: 'h3'},
              {start: '####', format: 'h4'},
              {start: '#####', format: 'h5'},
              {start: '######', format: 'h6'},
              {start: '*', end: '*', format: 'italic'},
              {start: '**', end: '**', format: 'bold'},
              {start: '~', end: '~', cmd: 'createLink', value: 'https://tiny.cloud'},
              {start: '- ', cmd: 'InsertUnorderedList'},
              {start: '1. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
              {start: '1) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
              {start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
              {start: 'a) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
              {start: 'i. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }},
              {start: 'i) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }},
            ],
            toolbar:
              "undo redo | formatselect | fontselect fontsizeselect bold italic forecolor backcolor | alignleft aligncenter alignright | bullist numlist outdent indent | help | " +
              'emoticons codesample pagebreak toc searchreplace quicktable latex hr'
              
          }}
        ></Editor>
      </div>
    );
  }

  // Async function updateBody updates text with values
  // But it calls the update function first which calls debounce
  updateBody = async val => {
    await this.setState({ text: val });
    this.update();
  };

  // Update title and title's state
  updateTitle = async txt => {
    await this.setState({ title: txt });
    this.update();
  };

  // Wait for user to stop tying for 1 second before dabatase is called to update
  // Debounce imported from helper.js
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text
    });
  }, 1000);
}

export default EditorComponent;

