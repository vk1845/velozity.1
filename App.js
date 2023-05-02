import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import velocity from "./components/velocity";
import { gql, useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(gql`
    query Company {
      company {
        ceo
        name
        founder
        employees
        headquarters {
          city
          state
        }
      }
    }
  `);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log(data);
  return (
    <div className="velozity">
      <Navbar />
     
    </div>
  );
}

export default App;
