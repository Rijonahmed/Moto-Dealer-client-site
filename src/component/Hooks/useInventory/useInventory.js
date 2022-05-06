import { useEffect, useState } from "react";


const useInventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('bikeinfo.json')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])


  return [items]

};

export default useInventory;