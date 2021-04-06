import { useEffect, useState, useCallback } from "react";
import { add, remove, edit, get } from "../services/asyncData";

export function useData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    get(url).then((data) => setData(data.data));
  }, [url]);

  let deleteData = useCallback(
    (dataId) => {
      remove(dataId, url).then((res) => {
        setData(data.filter((item) => item.id !== res.data.id));
      });
    },
    [data, url]
  );

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

  return {
    data,
    setData,
    deleteData,
    saveData,
  };
}

export function useShowMore(data) {
  const [renderedItems, setRenderedItems] = useState(20);
  function showMore() {
    if (data.length - renderedItems >= 20) {
      setRenderedItems(renderedItems + 20);
    } else {
      setRenderedItems(renderedItems + (data.length - renderedItems));
    }
  }
  function backToMinimal() {
    setRenderedItems(20);
  }
  return {
    renderedItems,
    showMore,
    backToMinimal,
  };
}
