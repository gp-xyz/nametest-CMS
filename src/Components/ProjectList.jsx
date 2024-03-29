import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import NameNav from "./NameNav";
import Loading from "./Loading";

function ProjectList(props) {
  const [data, setData] = useState([]);
  const [sortColumn, setSortColumn] = useState("count");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    fetch("https://disco.pythonanywhere.com/rankings").then(
      res => res.json()
    ).then(
      dat => {
        let data1 = dat['tags'].map(item => item.project)
        const counts = data1.reduce((acc, cur) => {
          if (acc[cur]) {
            acc[cur]++;
          } else {
            acc[cur] = 1;
          }
          return acc;
        }, {});

        const objects = Object.entries(counts).map(([name, count]) => ({ name, count }));
        objects.sort((a, b) => {
          if (sortColumn === "count") {
            return sortOrder === "asc" ? a.count - b.count : b.count - a.count;
          } else {
            return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
          }
        });
        setData(objects)
      }
    )
  }, [sortColumn, sortOrder])

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  }

  return (
    <div className="general-light ">
      <NameNav type="Project"/>
      <div className="bg-white rounded-md p-4 my-4 mx-2 ">
        <h1 className="text-lg font-medium mb-2">Projects (n={data.length})</h1>
        {(data.length === 0) ? (
          <Loading />
        ) : (
          <table className="table-auto ">
            <thead>
              <tr>
                <th className="text-left cursor-pointer" onClick={() => handleSort("name")}>Project Name</th>
                <th className="text-left cursor-pointer" onClick={() => handleSort("count")}>Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.name} className="text-gray-700 text-sm my-1">
                  <td><Link to={'/project/' + item.name} className="textlink">{item.name}</Link></td>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default ProjectList;
