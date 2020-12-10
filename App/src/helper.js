
/* Debounce function waits for user to stop typing for about a second or so, 
before the database is updated. 
The function ensures http requests aren't sent with each keystroke */ 

export default function debounce(a, b, c) {
    var d, e;
    return function() {
      function h() {
        d = null;
        c || (e = a.apply(f, g));
      }
      var f = this,
        g = arguments;
      return (
        clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
      );
    };
  }
  
  /* Remove the HTML tags from the preview of the updated note, which Quill and other libraries store. 
  The preview is seen on the All Notes List sidebar */ 
  export function removeHTMLTags(str) {
    return str.replace(/<[^>]*>?/gm, "");
  };