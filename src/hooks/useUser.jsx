// import axios from "axios";

import { useSetRecoilState } from "recoil";
import { getUserList } from "../services/user";
import { userListAtomState } from "../recoil/user/atom";

function useUser() {
  const setUserList = useSetRecoilState(userListAtomState);

  const onClickGetUserBtn = () => {
    const userList = getUserList();
    setUserList(userList);
  };

  return { onClickGetUserBtn };
}

export default useUser;
