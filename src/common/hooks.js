import { useEffect, useState, useCallback } from "react";
import {
  add,
  remove,
  edit,
  get,
  editUser,
  addUser,
} from "../services/asyncData";
import { USER } from "../constants/constants";

export function useData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    get(url).then((data) => {
      setData(data.data);
      changeLoading();
    });
  }, [url]);

  let deleteData = useCallback(
    (dataId) => {
      remove(dataId, url).then((res) => {
        setData(data.filter((item) => item.id !== res.data.id));
      });
    },
    [data, url]
  );
  function changeLoading() {
    setLoading(false);
  }
  function saveData(item) {
    if (!item.id) {
      add(item, url).then((res) => {
        setData([...data, res.data]);
      });
    } else {
      edit(item, url).then((res) => {
        setData(
          data.map((item) => (item.id === res.data.id ? res.data : item))
        );
      });
    }
  }
  function saveUser(item) {
    return editUser(item, url);
  }

  function newUser() {
    setLoading(true);
    addUser(USER, url).then((res) => {
      setData([...data, res.data]);
      changeLoading();
    });
  }

  return {
    data,
    setData,
    deleteData,
    saveData,
    saveUser,
    newUser,
    loading,
  };
}

export function useShowMore(data) {
  const [renderedItems, setRenderedItems] = useState(10);

  function showMore() {
    if (data.length - renderedItems >= 10) {
      setRenderedItems(renderedItems + 10);
    } else {
      setRenderedItems(renderedItems + (data.length - renderedItems));
    }
  }
  function backToMinimal() {
    setRenderedItems(10);
  }
  return {
    renderedItems,
    showMore,
    backToMinimal,
  };
}
