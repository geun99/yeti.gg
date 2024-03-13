import { get, getDatabase, ref } from "firebase/database";
import { useEffect } from "react";
import app from "../firebaseConfig";
import { initItem } from "../store/itemSlice";
import { useDispatch } from "react-redux";
import { initMonster } from "../store/monsterSlice";

const GetData = () => {
  const dispatch = useDispatch();

  const fetchItem = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "item");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      dispatch(initItem(data));
    } else {
      return null;
    }
  };
  const fetchMonster = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "monster");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      dispatch(initMonster(data));
    } else {
      return null;
    }
  };
  useEffect(() => {
    fetchMonster();
    fetchItem();
  }, []);
  return null;
};

export default GetData;
