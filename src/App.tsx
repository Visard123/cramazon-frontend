import { useEffect, useState } from "react";

import "./App.css";

type Item = {
  id: number;
  title: string;
  image: string;
  price: number;
};

type Order = {
  id: number;
  userId: number;
  itemId: number;
  item: Item;
  quantity: number;
};

type User = {
  id: number;
  name: string;
  email: string;
  orders: Order[];
};
function App() {
  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    fetch("http://localhost/:4000/users/loli@mail")
      .then((resp) => resp.json())
      .then((user) => setUser(user));
  }, []);

  if (user === null) <h1>Loading...!</h1>;

  return (
    <div className="App">
      <h1>Hello {user.name}</h1>
      <h2>Here are your orders</h2>

      <ul></ul>
    </div>
  );
}

export default App;
