import React from "react";
import { useRef, useState } from "react";
import firebase from "./firebase";
import "./Proinsert.css";
import { useAuth } from "./contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { storage } from "./firebase";
let i = 0;
export default function Proinsert() {
  const history = useHistory();
  const index = useRef();
  const cat = useRef();

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
  const [img, changeimg] = useState();
  const [img2, changeimg2] = useState();
  const [img3, changeimg3] = useState();
  const [img4, changeimg4] = useState();

  const [url1, changeurl] = useState("");
  const [url2, changeurl2] = useState("");
  const [url3, changeurl3] = useState("");
  const [url4, changeurl4] = useState("");
  const imgup = (e) => {
    changeimg(e.target.files[0]);
  };
  const imgup2 = (e) => {
    changeimg2(e.target.files[0]);
  };
  const imgup3 = (e) => {
    changeimg3(e.target.files[0]);
  };
  const imgup4 = (e) => {
    changeimg4(e.target.files[0]);
  };
  const handles = (e) => {
    e.preventDefault();
    if (i === 0) {
      i = 1;
      storage
        .ref(`images/${img.name}`)
        .put(img)
        .on(
          "state_change",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(img.name)
              .getDownloadURL()
              .then((url) => {
                changeurl(url);
              });
          }
        );
    }
    if (i === 1) {
      i = 2;
      storage
        .ref(`images/${img2.name}`)
        .put(img)
        .on(
          "state_change",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(img2.name)
              .getDownloadURL()
              .then((url) => {
                changeurl2(url);
              });
          }
        );
    }
    if (i === 2) {
      i = 3;
      storage
        .ref(`images/${img3.name}`)
        .put(img)
        .on(
          "state_change",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(img3.name)
              .getDownloadURL()
              .then((url) => {
                changeurl3(url);
              });
          }
        );
    }
    if (i === 3) {
      i = 4;
      storage
        .ref(`images/${img4.name}`)
        .put(img)
        .on(
          "state_change",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(img4.name)
              .getDownloadURL()
              .then((url) => {
                changeurl4(url);
              });
          }
        );
    }
    if (i === 4) {
      i = 0;
      firebase
        .database()
        .ref("Products")
        .push({
          index: index.current.value,
          cat: cat.current.value,
          picture: [{ url1 }, { url2 }, { url3 }, { url4 }],
          name: name.current.value,
          price: price.current.value,
          size: ["S", "M", "L", "XL", "XXL"],
          color: color.current.value,
          description: desc.current.value,
        });
      history.push("/Items");
    }
  };
  console.log(url1);
  return (
    <div className="promain">
      <form onSubmit={handles}>
        <input ref={index} type="number" />
        <input ref={cat} type="text" />
        <input type="file" onChange={imgup} />
        <input type="file" onChange={imgup2} />
        <input type="file" onChange={imgup3} />
        <input type="file" onChange={imgup4} />
        <input ref={name} type="text" />
        <input ref={price} type="number" />
        <input ref={color} type="text" />
        <textarea ref={desc} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
