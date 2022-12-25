import { useEffect, useState } from "react";


const useInventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://moto-dealer-server-site.vercel.app/inventory')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])


  return [items, setItems]

};

export default useInventory;