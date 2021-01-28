import Header from "./components/Header";
import Tabs from "./components/Tabs";
import VideoList from "./components/VideoList";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [searchText, setSearchText]= useState("");

  const handleSearch = (string) => {
    setSearchText(string);
  }

  return (
    <Router>
      <div>
        <Header />
        <Search handleSearch={handleSearch}/>
        <Tabs />
        <Switch>
          <Route path="/covid">
            <VideoList searchText={searchText} covid />
          </Route>
          <Route path="/all">
            <VideoList searchText={searchText} />
          </Route>
          <Route exact path="/">
            <Redirect to="/covid" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
