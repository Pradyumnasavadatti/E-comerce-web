import data from "../selectpage/Data3";
import { useLocation } from "react-router-dom";
import Item from "../filter/FilterItem";
const Productcateg = () => {
  let i = 0;
  let j = 0;
  let a = [];
  let ind = useLocation();
  data.properties.map((index) => {
    if (index.cat === ind.state) {
      i = i + 1;
      a[i] = index.index;
    }
  });
  return (
    <div>
      <div className="wrapper_1">
        {data.properties.map((value) => {
          if (data.properties[value.index].cat === ind.state) {
            if (i % 4 === 0 && i !== 0) {
              j = j + 1;
              i = i - 4;
              return (
                <Item
                  one={a[i + 4]}
                  two={a[i + 3]}
                  three={a[i + 3]}
                  four={a[i + 1]}
                  sign={1}
                  notindex={-1}
                  key={data.properties[value.index]._id}
                />
              );
            } else if (i % 4 === 1) {
              if (j < i - 1) {
                j = j + 1;
                i = i - 4;
                return (
                  <Item
                    one={a[i + 4]}
                    two={a[i + 3]}
                    three={a[i + 2]}
                    four={a[i + 1]}
                    sign={1}
                    notindex={-1}
                    key={data.properties[value.index]._id}
                  />
                );
              } else {
                i = i - 1;
                j = j + 1;
                return (
                  <Item
                    one={a[i + 1]}
                    sign={2}
                    notindex={-1}
                    key={data.properties[value.index]._id}
                  />
                );
              }
            } else if (i % 4 === 2) {
              if (j < i - 2) {
                j = j + 1;
                i = i - 4;
                return (
                  <Item
                    one={a[i + 4]}
                    two={a[i + 3]}
                    three={a[i + 2]}
                    four={a[i + 1]}
                    sign={1}
                    notindex={-1}
                    key={data.properties[value.index]._id}
                  />
                );
              } else {
                j = j + 1;
                i = i - 2;
                return (
                  <Item
                    one={a[i + 2]}
                    two={a[i + 1]}
                    sign={3}
                    notindex={-1}
                    key={data.properties[value.index]._id}
                  />
                );
              }
            } else if (i % 4 === 3) {
              if (j < i - 3) {
                j = j + 1;
                i = i - 4;
                return (
                  <Item
                    one={a[i + 4]}
                    two={a[i + 3]}
                    three={a[i + 2]}
                    four={a[i + 1]}
                    sign={1}
                    notindex={-1}
                    key={data.properties[value.index]._id}
                  />
                );
              } else {
                j = j + 1;
                i = i - 3;
                return (
                  <Item
                    one={a[i + 3]}
                    two={a[i + 2]}
                    three={a[i + 1]}
                    sign={4}
                    notindex={-1}
                    key={data.properties[value.index]._id}
                  />
                );
              }
            }
          }
        })}
      </div>
    </div>
  );
};
export default Productcateg;
