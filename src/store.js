import { configureStore, createSlice } from "@reduxjs/toolkit";
import monster from "./data/monster";
import item from "./data/item";

let items = createSlice({
  name: "item",
  initialState: item,
  reducers: {
    weaponFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.inform.includes("분류 무기"));
      return copy;
    },
    accFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.inform.includes("장신구"));
      return copy;
    },
    armorFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.inform.includes("방어구"));
      return copy;
    },
    craftFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.inform.includes("제작"));
      return copy;
    },
    othersFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.inform.includes("기타"));
      return copy;
    },
    throwsFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.inform.includes("발사체"));
      return copy;
    },
    scrollFilter(state) {
      let copy = [...item];
      copy = copy.filter(
        (i) =>
          i.inform.includes("무기 주문서") || i.inform.includes("방어구 주문서")
      );
      return copy;
    },
    elixirFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.inform.includes("소비"));
      return copy;
    },
    archerFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.detail.includes("직업 궁수"));
      return copy;
    },
    rogueFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.detail.includes("직업 도적"));
      return copy;
    },
    magicianFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.detail.includes("직업 마법사"));
      return copy;
    },
    warriorFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.detail.includes("직업 전사"));
      return copy;
    },
    communalFilter(state) {
      let copy = [...item];
      copy = copy.filter((i) => i.detail.includes("직업 공용"));
      return copy;
    },
  },
});

let monsters = createSlice({
  name: "monster",
  initialState: monster,
  reducers: {
    lvSort(state) {
      const copy = [...monster];
      copy.sort((a, b) => a.level - b.level);
      return copy;
    },
    nameSort(state) {
      const copy = [...monster];
      copy.sort((a, b) => a.name.localeCompare(b.name));
      return copy;
    },
    victoriaFilter(state) {
      const copy = [...monster];
      let arr = [];
      copy.forEach((a, i) => {
        if (a.continent === "빅토리아 아일랜드" || a.continent === "둘 다") {
          arr.push(a);
        }
      });
      return arr;
    },

    elnathFilter(state) {
      const copy = [...monster];
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

export default configureStore({
  reducer: {
    item: items.reducer,
    monster: monsters.reducer,
  },
});

export let { lvSort, nameSort, victoriaFilter, elnathFilter } =
  monsters.actions;

export let {
  weaponFilter,
  accFilter,
  armorFilter,
  craftFilter,
  othersFilter,
  throwsFilter,
  scrollFilter,
  elixirFilter,
  archerFilter,
  rogueFilter,
  magicianFilter,
  warriorFilter,
  communalFilter,
} = items.actions;

export let itemFilters = [
  weaponFilter,
  accFilter,
  armorFilter,
  craftFilter,
  othersFilter,
  throwsFilter,
  scrollFilter,
  elixirFilter,
  archerFilter,
  rogueFilter,
  magicianFilter,
  warriorFilter,
  communalFilter,
];
