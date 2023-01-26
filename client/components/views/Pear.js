import React from "react";
import { NewItemForm } from "../forms";
import { Table, BarChart } from "./index";

const Pear = () => {
  return (
    <div>
      <h1 className="mb-5">Make your comPEARison 🍐</h1>
      <h2>Enter Details for a New Item Below:</h2>
      <NewItemForm />
      <Table />
      <BarChart />
    </div>
  );
};

export default Pear;
