import data from "../selectpage/Data3";
import "./Content.css";
import React from "react";
import firebase from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Item from "./Item";
function Content(props) {
  let i = 0;
  const properties = [];
  firebase
    .database()
    .ref("Products")
    .on("value", (snapshot) => {
      const i = snapshot.val();
      for (let id in i) {
        properties.push(i[id]);
      }
    });
  return (
    <div className="wrapper">
      {properties.map((value) => {
        console.log("in");
        if (value.index % 4 === 0) {
          i = Number(value.index);
          if (properties.length % 4 === 0) {
            return (
              <Item
                one={i}
                two={i + 1}
                three={i + 2}
                four={i + 3}
                sign={1}
                notindex={props.notindex}
                key={properties[value.index].index}
              />
            );
          } else if (properties.length % 4 === 1) {
            if (value.index < properties.length - 1) {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  three={value.index + 2}
                  four={value.index + 3}
                  sign={1}
                  notindex={props.notindex}
                  key={properties[value.index].index}
                />
              );
            } else {
              return (
                <Item
                  one={value.index}
                  sign={2}
                  notindex={props.notindex}
                  key={properties[value.index].index}
                />
              );
            }
          } else if (properties.length % 4 === 2) {
            if (value.index < properties.length - 2) {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  three={value.index + 2}
                  four={value.index + 3}
                  sign={1}
                  notindex={props.notindex}
                  key={properties[value.index].index}
                />
              );
            } else {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  sign={2}
                  notindex={props.notindex}
                  key={properties[value.index].index}
                />
              );
            }
          } else if (properties.length % 4 === 3) {
            if (value.index < properties.length - 3) {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  three={value.index + 2}
                  four={value.index + 3}
                  sign={1}
                  notindex={props.notindex}
                  key={properties[value.index].index}
                />
              );
            } else {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  three={value.index + 2}
                  sign={2}
                  notindex={props.notindex}
                  key={properties[value.index].index}
                />
              );
            }
          }
        }
      })}
    </div>
  );
}
export default Content;
