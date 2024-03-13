import { configureStore } from "@reduxjs/toolkit";
import items from "./store/itemSlice";
import monsters from "./store/monsterSlice";

export default configureStore({
  reducer: {
    item: items.reducer,
    monster: monsters.reducer,
  },
});
