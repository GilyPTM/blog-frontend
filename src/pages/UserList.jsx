import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import UserTableRow from "../components/UserTableRow";
import configData from "../config.json";
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("primesc datele");
    axios
      .get(configData.SERVER_URL)
      .then(({ data }) => {
        setUsers(data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return users.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default UserList;
