import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ChatCopilot from "./components/ChatCopilot/ChatCopilot";
import NoteSection from "./components/NoteSection/NoteSection";
import CollapsiblePanel from "./components/CollapsiblePanel/CollapsiblePanel";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <CollapsiblePanel title="Chats">
        {/* Content like list of chats */}
      </CollapsiblePanel>
      <ChatCopilot />
      <NoteSection />
      <CollapsiblePanel title="Notes">
        {/* Content like tree structure of notes */}
      </CollapsiblePanel>
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
