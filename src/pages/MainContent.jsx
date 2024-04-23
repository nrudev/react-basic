import React from "react";
import { Button } from "@mui/material";
import UserTable from "../components/UserTable";
import useUser from "../hooks/useUser";
import classes from "../styles/MainContent.module.css";

function MainContent() {
  const { onClickGetUserBtn } = useUser();

  return (
    <>
      <Button className={classes.getUserBtn} variant="contained" onClick={onClickGetUserBtn}>
        사용자 정보 가져오기
      </Button>
      <UserTable />
    </>
  );
}

export default MainContent;
