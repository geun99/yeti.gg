import { createSlice } from "@reduxjs/toolkit";

let originData = [];

let monsters = createSlice({
  name: "monster",
  initialState: [],
  reducers: {
    initMonster(state, action) {
      originData = [...action.payload];
      return action.payload;
    },
    lvSort(state) {
      const copy = [...originData];
      copy.sort((a, b) => a.level - b.level);
      return copy;
    },
    nameSort(state) {
      const copy = [...originData];
      copy.sort((a, b) => a.name.localeCompare(b.name));
      return copy;
    },
    victoriaFilter(state) {
      const copy = [...originData];
      let arr = [];
      copy.forEach((a, i) => {
        if (a.continent === "빅토리아 아일랜드" || a.continent === "둘 다") {
          arr.push(a);
        }
      });
      return arr;
    },

    elnathFilter(state) {
      const copy = [...originData];
      let arr = [];
      copy.forEach((a, i) => {
        if (a.continent === "엘나스 산맥" || a.continent === "둘 다") {
          arr.push(a);
        }
      });
      return arr;
    },
  },
});
export let { initMonster, lvSort, nameSort, victoriaFilter, elnathFilter } =
  monsters.actions;

export default monsters;
