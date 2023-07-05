import React, { useEffect, useState } from "react";
import "./containerStyle.css";
import Card from "../core/card";
import Modal from "../core/modal";

function Container() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [isListReceived, setIsListReceived] = useState(false);
  const [joke, setJoke] = useState("");

  async function getCategories() {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const data = await response.json();
    setTopicList(data);
    setIsListReceived(true);
  }

  useEffect(() => {
    getCategories();
  }, []);

  function openModal(item) {
    setIsModalOpen(true);
    setModalLabel(item);
    getJoke(item);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function getNextJoke(label) {
    console.log(label);
    getJoke(label);
  }

  async function getJoke(category) {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await response.json();
    console.log(data.value);
    setJoke(data.value);
  }

  return (
    <div className="container">
      {isListReceived ? (
        topicList?.map((item, index) => (
          <Card key={index} label={item} onclick={() => openModal(item)} />
        ))
      ) : (
        <p className="loader"></p>
      )}
      {isModalOpen && (
        <Modal
          handleClick={() => getNextJoke(modalLabel)}
          label={modalLabel}
          joke={joke}
          closeModal={() => closeModal()}
        />
      )}
    </div>
  );
}

export default Container;
