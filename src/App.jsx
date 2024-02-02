import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import Summary from "./components/Summary";
import { useState } from "react";
import PostItemProvider from "./store/Post-item-data";

function App() {
  const [mediaPostItem, setMediaPostItem] = useState("Home");
  const [item, setItem] = useState("");
  const handelSummeryClick = (e, item) => {
    setMediaPostItem(e.target.innerHTML);
    setItem(item);
  };
  return (
    <PostItemProvider>
      <div className="container1">
        <SideBar
          mediaPostItem={mediaPostItem}
          setMediaPostItem={setMediaPostItem}
        ></SideBar>
        <div className="content">
          <Header></Header>
          {mediaPostItem === "Home" ? (
            <PostList summeryClick={handelSummeryClick}></PostList>
          ) : (
            <Summary item={item}></Summary>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostItemProvider>
  );
}

export default App;
