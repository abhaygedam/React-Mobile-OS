import logo from './logo.svg';
import './App.css';
// import Join from "./component/join"
// import Setting from "./component/setting"
// import Login from "./component/login"
// import Help from "./component/help"
// import Home from "./component/home"
// import Download from "./component/download"
// import Contact from "./component/contact"
// import Search from './component/search';


import Dynamic from './component/dynamic';

function App() {
  return (
    <>
    <div style={{
      display: "flex",
    }}>
        <Dynamic name={"JOIN US"} colour={"skyblue"} />
         <Dynamic name={"SETTINGS"} colour={"rgb(57, 79, 85)"} />
    </div>

    <div style={{
      display: "flex",
    }}>
       <Dynamic name={"LOGIN"} colour={"rgb(236, 188, 124)"} />
         <Dynamic name={"CONTACT US"} colour={"#802828"} />
      </div>
      
      <div style={{
      display: "flex",
    }}>
       <Dynamic name={"SEARCH"} colour={"#8dbb68"} />
         <Dynamic name={"HELP"} colour={"#422052"} />
      </div>
      
      <div style={{
      display: "flex",
    }}>
       <Dynamic name={"HOME"} colour={"#ee9edd"} />
         <Dynamic name={"DOWNLOAD"} colour={"#555223"} />
    </div>
    </>
  );
}

export default App;
