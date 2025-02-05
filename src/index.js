import React from "react";
import ReactDom from "react-dom/client";
import "./styles.css";
function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <Avatar imgName="./gig.jpg" />
      <Info />

      <Skills />
    </div>
  );
}
function Avatar(props) {
  return <img src={props.imgName} className="avatar"></img>;
}
function Info() {
  return (
    <div>
      <h1>Mahfuz Redewan</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, dicta
        sed quisquam provident at commodi omnis quia fugit, mollitia veritatis
        ipsa, quo aliquid facere dignissimos?
      </p>
    </div>
  );
}
function Skills() {
  return (
    <div className="skills">
      <Skill background="blue" language="HTML" emoji="👍" />
      <Skill background="#BF0603" language="Java Script" emoji="🦾" />
      <Skill background="#001427" language="React" emoji="😎" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: `${props.background}` }}>
      <span>{props.language}</span>
      <icon>{props.emoji}</icon>
    </div>
  );
}
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
