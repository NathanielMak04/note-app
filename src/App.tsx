import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <form className="note-form">
        <input placeholder="title" required />
        <textarea placeholder="content" rows={10} required />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default App;

