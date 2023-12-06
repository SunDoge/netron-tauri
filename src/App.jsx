import "./App.css";
import "../netron/source/grapher.css";

import Toolbar from "./components/toolbar";
import Logo from "./components/logo";
import Graph from "./components/graph";
import Sidebar from "./components/sidebar";
import MessageDialog from "./components/message-dialog";
import Titlebar from "./components/titlebar";

// Preload
import { View } from "../netron/source/view"
import { BrowserHost } from "../netron/source/browser"
import { onMount } from "solid-js";


function App() {

  onMount(async () => {
    const host = new BrowserHost();
    window.__view__ = new View(host);
    window.__view__.start();
    console.log('start view')
  })

  return (
    <>
      <Graph />
      <Sidebar />
      <Toolbar />
      <Logo />
      <MessageDialog />
      <Titlebar />
      <div id="menu" class="menu"></div>
      <div id="menu-button" class="menu-button">&#8801;</div>
    </>
  );
}

export default App;
