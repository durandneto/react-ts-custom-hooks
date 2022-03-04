import react, { useEffect, useState } from 'react';

const useArray = (defaultArray) => {
  const [array, setArray] = useState(defaultArray);
  const [itArray, setItArray] = useState(defaultArray[Symbol.iterator]());
  const [currentValue, setValue] = useState(-1);

  console.log('render useArray HOOK');

  function nextValue() {
    const it = itArray.next();
    setValue(it.value);
  }

  function updateWithHightPriority(_cb) {
    queueMicrotask(() => {
      console.log('trigger a re-render');
      _cb();
    });
  }
  function updateWithLowPriority(_cb, delay = 0) {
    setTimeout(() => {
      console.log('trigger a re-render');
      _cb();
    }, delay);
  }

  function push(item) {
    console.log('push');
    updateWithLowPriority(() => {
      console.log('SET updateWithLowPriority');
      setArray((prevState) => [...prevState, item + 2]); // 3
    });

    updateWithHightPriority(() => {
      console.log('SET updateWithHightPriority');
      setArray((prevState) => [...prevState, item + 1]); // 2
    });

    setArray((prevState) => [...prevState, item]); // 1
  }

  useEffect(() => {
    // nextValue();
  }, []);

  return { array, currentValue, nextValue, push };
};

export default useArray;
