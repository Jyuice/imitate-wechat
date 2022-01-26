import "antd-mobile/dist/antd-mobile.css";
// import '~antd/dist/antd.css';
import "./App.scss";
import '@chatui/core/es/styles/index.less';
// 引入chatUI样式
import '@chatui/core/dist/index.css';
import PubSub from "pubsub-js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Tabbar from "./components/common/Tabbar";
import Navbar from "./components/common/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Loading from "./pages/loading/Loading";
import React, { lazy, Suspense } from "react";
const AddFriend = lazy(() => import('./pages/addFriend/AddFriend'))
const SelectGroup = lazy(() => import('./pages/group/SelectGroup'))
const Sign = lazy(() => import('./pages/sign/Sign'))
const AddressBook = lazy(() => import('./pages/adressBook/AddressBook'))
const NewFriends = lazy(() => import('./pages/adressBook/NewFriends'))
const Discover = lazy(() => import('./pages/discover/Discover'))
const Moment = lazy(() => import('./pages/moment/Moment'))
const PostMoment = lazy(() => import('./pages/moment/PostMoment'))
const Individual = lazy(() => import('./pages/individual/Individual'))
const ChatPage = lazy(() => import('./pages/chatPage/ChatPage'))
const Setting = lazy(() => import('./pages/individual/setting/Setting'))
const ChangeInfo = lazy(() => import('./pages/individual/changeInfo/ChangeInfo'))
const ChangeName = lazy(() => import('./pages/individual/changeInfo/ChangeName'))
const BusinessCard = lazy(() => import('./pages/businessCard/BusinessCard'))
const Search = lazy(() => import('./pages/search/Search'))

function App(props) {

  const [isShowNav, setIsShowNav] = React.useState(false)

  function getIsIndividual(msg) {
    setIsShowNav(!msg)
  }

  PubSub.subscribe(`HIDE NAVBAR`,(msg, data) => {
    setIsShowNav(!data)
  })

  return (
      <Router>
      <div className="App">
        {isShowNav ? <Navbar /> : ''}

        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/loading" component={Loading}></Route>

          <Suspense fallback={<Loading/>}>
            <Route path="/sign" component={Sign}></Route>
            <Route exact path="/addressbook" component={AddressBook}></Route>
            <Route path="/addressbook/newfriends" component={NewFriends}></Route>
            <Route exact path="/discover" component={Discover}></Route>
            <Route exact path="/discover/moment" component={Moment}></Route>
            <Route path="/discover/moment/post" component={PostMoment}></Route>
            <Route exact path="/individual" component={Individual}></Route>
            <Route exact path="/home/chat" component={ChatPage}></Route>
            <Route exact path="/home/add" component={AddFriend}></Route>
            <Route exact path="/home/selectgroup" component={SelectGroup}></Route>
            <Route exact path="/home/search" component={Search}></Route>
            <Route path="/home/chat/business" component={BusinessCard}></Route>
            <Route path="/individual/setting" component={Setting}></Route>
            <Route path="/individual/changeInfo" component={ChangeInfo}></Route>
            <Route path="/individual/changeName" component={ChangeName}></Route>
          </Suspense>
        </Switch>
        <Redirect to="/login"/>

        <Tabbar getIsIndividual={getIsIndividual} />
      </div>
    </Router>
  );
}

export default App;
