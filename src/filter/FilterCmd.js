import Item from "./FilterItem";
import "./Filter.css";
import data from "../selectpage/Data3";
import firebase from "../firebase";

function FilterCmd(props) {
  let i = 0;
  let j = 0;
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
  properties.map((index) => {
    if (
      index.color === props.ind.state.color &&
      index.cat === props.ind.state.cat &&
      index.name === props.ind.state.brand
    ) {
      index.size.map((size) => {
        if (size === props.ind.state.siz) {
          i = i + 1;
        }
      });
    }
  });
  if (i === 0) {
    return (
      <div className="No">
        <p className="Notxt">No matching Product to your filter :( </p>
        <p className="Notxt">Try other filters :)</p>
      </div>
    );
  } else {
    return (
      <div className="wrapper_1">
        {properties.map((value) => {
          if (
            data.properties[value.index].color === props.ind.state.color &&
            data.properties[value.index].cat === props.ind.state.cat &&
            data.properties[value.index].name === props.ind.state.brand
          ) {
            if (
              properties[value.index].size[0] === props.ind.state.siz ||
              properties[value.index].size[1] === props.ind.state.siz ||
              properties[value.index].size[2] === props.ind.state.siz ||
              properties[value.index].size[3] === props.ind.state.siz ||
              properties[value.index].size[4] === props.ind.state.siz
            ) {
              if (i % 4 === 0) {
                j = j + 1;
                return (
                  <Item
                    one={value.index}
                    two={value.index + 1}
                    three={value.index + 2}
                    four={value.index + 3}
                    sign={1}
                    notindex={-1}
                    key={properties[value.index].index}
                  />
                );
              } else if (i % 4 === 1) {
                if (j < i - 1) {
                  j = j + 1;
                  return (
                    <Item
                      one={value.index}
                      two={value.index + 1}
                      three={value.index + 2}
                      four={value.index + 3}
                      sign={1}
                      notindex={-1}
                      key={properties[value.index].index}
                    />
                  );
                } else {
                  j = j + 1;
                  return (
                    <Item
                      one={value.index}
                      sign={2}
                      notindex={-1}
                      key={properties[value.index].index}
                    />
                  );
                }
              } else if (i % 4 === 2) {
                if (j < i - 2) {
                  j = j + 1;
                  return (
                    <Item
                      one={value.index}
                      two={value.index + 1}
                      three={value.index + 2}
                      four={value.index + 3}
                      sign={1}
                      notindex={-1}
                      key={properties[value.index].index}
                    />
                  );
                } else {
                  j = j + 1;
                  return (
                    <Item
                      one={value.index}
                      two={value.index + 1}
                      sign={3}
                      notindex={-1}
                      key={properties[value.index].index}
                    />
                  );
                }
              } else if (i % 4 === 3) {
                if (j < i - 3) {
                  j = j + 1;
                  return (
                    <Item
                      one={value.index}
                      two={value.index + 1}
                      three={value.index + 2}
                      four={value.index + 3}
                      sign={1}
                      notindex={-1}
                      key={properties[value.index].index}
                    />
                  );
                } else {
                  j = j + 1;
                  return (
                    <Item
                      one={value.index}
                      two={value.index + 1}
                      three={value.index + 2}
                      sign={4}
                      notindex={-1}
                      key={properties[value.index].index}
                    />
                  );
                }
              }
            }
          }
        })}
      </div>
    );
  }
}
export default FilterCmd;
