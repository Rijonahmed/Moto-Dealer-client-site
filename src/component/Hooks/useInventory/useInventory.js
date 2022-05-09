import { useEffect, useState } from "react";


const useInventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://lit-beach-00194.herokuapp.com/inventory')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])


  return [items, setItems]

};

export default useInventory;