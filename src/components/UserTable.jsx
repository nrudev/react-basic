import React from "react";
import { useRecoilValue } from "recoil";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { userListAtomState } from "../recoil/user/atom";

function UserTable() {
  const userList = useRecoilValue(userListAtomState);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>나이</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.birth}</TableCell>
              <TableCell>{row.job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
