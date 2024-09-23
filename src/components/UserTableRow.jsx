import React from "react";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { format, parseISO } from "date-fns";
// import axios from "axios";
// import configData from "../config.json";
const UserTableRow = (props) => {
  //console.log(props.obj);
  const { nume, prenume, email } = props.obj;
  // const deleteUser = () => {
  //   axios
  //     .delete(configData.SERVER_URL + id)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         alert("User successfully deleted");
  //         window.location.reload();
  //       } else Promise.reject();
  //     })
  //     .catch((err) => alert("Something went wrong"));
  // };

  return (
    <tr>
      <td>{nume}</td>
      <td>{prenume}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserTableRow;
