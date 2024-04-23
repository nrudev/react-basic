export const getUserList = () => {
  // return axios.get("/users").then((res) => res.data);
  return [
    {
      id: 1,
      name: "Donghyun Baek",
      age: 32,
      birth: "1993-12-31",
      job: "프리랜서",
    },
    {
      id: 2,
      name: "Sammy Lee",
      age: 32,
      birth: "1993-12-31",
      job: "프로그래머",
    },
    {
      id: 3,
      name: "Heeseung Koo",
      age: 30,
      birth: "1995-08-12",
      job: "경비원",
    },
  ];
};
