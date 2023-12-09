import "./App.css";

import Toolbar from "./components/toolbar";
import Logo from "./components/logo";
import Graph from "./components/graph";
import Sidebar from "./components/sidebar";
import MessageDialog from "./components/message-dialog";
import Titlebar from "./components/titlebar";
import { onMount } from "solid-js";

// Preload
import { View } from "../netron/source/view"
import { BrowserHost } from "../netron/source/browser"


function App() {

  onMount(async () => {
    const host = new BrowserHost();

    host.require = async (id) => {
      console.log(id);
      /* @vite-ignore */
      return import("." + id + ".js");
    }

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
