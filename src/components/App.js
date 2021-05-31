import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(stickyNote => 
        (<Note key={stickyNote.key}
         head={stickyNote.title} 
         body={stickyNote.content} />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
