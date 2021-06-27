import React from "react";
import { useRef } from "react";
import firebase from "./firebase";
import "./Proinsert.css";
import { useAuth } from "./contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Proinsert() {
  const history = useHistory();
  const index = useRef();
  const cat = useRef();
  const pic1 = useRef();
  const pic2 = useRef();
  const pic3 = useRef();
  const pic4 = useRef();
  const name = useRef();
  const price = useRef();
  const size1 = useRef();
  const size2 = useRef();
  const size3 = useRef();
  const size4 = useRef();
  const size5 = useRef();
  const color = useRef();
  const desc = useRef();
  const cu = useAuth();
  console.log(cu);
  const handles = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Products")
      .push({
        index: index.current.value,
        cat: cat.current.value,
        picture: [
          pic1.current.value,
          pic2.current.value,
          pic3.current.value,
          pic4.current.value,
        ],
        name: name.current.value,
        price: price.current.value,
        size: ["S", "M", "L", "XL", "XXL"],
        color: color.current.value,
        description: desc.current.value,
      });
    history.push("/Items");
  };
  return (
    <div className="promain">
      <form onSubmit={handles}>
        <input ref={index} type="number" />
        <input ref={cat} type="text" />
        <input ref={pic1} type="file" accept="image/*" />
        <input ref={pic2} type="file" accept="image/*" />
        <input ref={pic3} type="file" accept="image/*" />
        <input ref={pic4} type="file" accept="image/*" />
        <input ref={name} type="text" />
        <input ref={price} type="number" />
        <input ref={color} type="text" />
        <textarea ref={desc} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
