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

const skillsData = [
  {
    name: "HTML",
    level: "Advanced",
    color: "#001427",
  },
  {
    name: "CSS",
    level: "intermediate",
    color: "#223427",
  },
  {
    name: "Javasript",
    level: "noob",
    color: "#005c97",
  },
];
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
      {skillsData.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div style={{ backgroundColor: `${skillObj.color}` }}>
      <span>{skillObj.name}</span>
      <icon>
        {skillObj.level === "Advanced" && "💪"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "noob" && "👶"}
      </icon>
    </div>
  );
}
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
