import data from "../selectpage/Data3";
import "./Content.css";
import React from "react";
import Item from "./Item";
const Content = (props) => {
  const properties = data.properties;
  return (
    <div className="wrapper">
      {properties.map((value) => {
        if (value.index % 4 === 0) {
          if (data.properties.length % 4 === 0) {
            return (
              <Item
                one={value.index}
                two={value.index + 1}
                three={value.index + 2}
                four={value.index + 3}
                sign={1}
                notindex={props.notindex}
                key={data.properties[value.index]._id}
              />
            );
          } else if (data.properties.length % 4 === 1) {
            if (value.index < data.properties.length - 1) {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  three={value.index + 2}
                  four={value.index + 3}
                  sign={1}
                  notindex={props.notindex}
                  key={data.properties[value.index]._id}
                />
              );
            } else {
              return (
                <Item
                  one={value.index}
                  sign={2}
                  notindex={props.notindex}
                  key={data.properties[value.index]._id}
                />
              );
            }
          } else if (data.properties.length % 4 === 2) {
            if (value.index < data.properties.length - 2) {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  three={value.index + 2}
                  four={value.index + 3}
                  sign={1}
                  notindex={props.notindex}
                  key={data.properties[value.index]._id}
                />
              );
            } else {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  sign={2}
                  notindex={props.notindex}
                  key={data.properties[value.index]._id}
                />
              );
            }
          } else if (data.properties.length % 4 === 3) {
            if (value.index < data.properties.length - 3) {
              return (
                <Item
                  one={value.index}
                  two={value.index + 1}
                  three={value.index + 2}
                  four={value.index + 3}
                  sign={1}
                  notindex={props.notindex}
                  key={data.properties[value.index]._id}
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
                  key={data.properties[value.index]._id}
                />
              );
            }
          }
        }
      })}
    </div>
  );
};
export default Content;
