import React from "react";

const data = [
  {
    name: "Alice Anderson",
    designation: "Founder",
    email: "alice.anderson@example.com",
    manager: null,
    children: [
      {
        name: "David HR",
        designation: "CHRO",
        email: "david.hr@example.com",
        manager: "Alice Anderson",
        children: [],
      },
      {
        name: "Eric CFO",
        designation: "CFO",
        email: "eric.cfo@example.com",
        manager: "Alice Anderson",
        children: [],
      },
    ],
  },
  {
    name: "Bob Barker",
    designation: "Founder",
    email: "bob.barker@example.com",
    manager: null,
    children: [
      {
        name: "Miachel Anderson",
        designation: "CHRO",
        email: "Anderson.m@example.com",
        manager: "Bob Barker",
        children: [],
      },
      {
        name: "Eric Carlos",
        designation: "CFO",
        email: "eric.carlos@example.com",
        manager: "Bob Barker",
        children: [],
      },
    ],
  }
  // Add other data objects for remaining employees
];

const EmployeeBlock = ({ name, designation }) => (
  <div className="employee-block">
    <p className="employee-name">{name}</p>
    <p className="employee-designation">{designation}</p>
  </div>
);

const OrgChart = ({ data }) => (
  <div className="org-chart">
    <EmployeeBlock name={data.name} designation={data.designation} />
    {data.children.map((child) => (
      <OrgChart key={child.name} data={child} />
    ))}
  </div>
);

const App = () => {
  return (
    <div className="app">
      <h1>Organizational Chart</h1>
      <OrgChart data={data[1]} />
    </div>
  );
};

export default App;
