import { getDocs, query, collection, orderBy } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import Layout from "./Layout";

const App = () => {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [currentRound, setCurrentRound] = useState("");

  useEffect(() => {
    const q1 = query(collection(db, "pets2022"), orderBy("seed"));
    const q2 = query(collection(db, "games2022"), orderBy("id"));
    const q3 = query(collection(db, "currentRound2022"));
    const getPets = async () => {
      const loadData = await getDocs(q1);
      setData(loadData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPets();

    const getGames = async () => {
      const loadData = await getDocs(q2);
      setGames(loadData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getGames();

    const getCurrentRound = async () => {
      const loadData = await getDocs(q3);
      setCurrentRound(loadData.docs[0].data().round);
    };
    getCurrentRound();
  }, []);

  return (
    <Layout
      data={data}
      games={games}
      currentRound={currentRound}
      setCurrentRound={setCurrentRound}
    />
  );
};

export default App;
