import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      setUser(user);
    }
  }, []);

  const sendDataToBackend = async () => {
    try {
      const response = await axios.post(
        "https://1dcf-171-243-48-203.ngrok-free.app/api/data",
        {
          telegram_id: 1234,
          data: "data",
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Telegram Mini App</h1>
      {user && <p>Your Telegram ID: {user.id}</p>}
      {user && <p>Hello, {user.first_name}!</p>}
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter your data"
      />
      <button onClick={sendDataToBackend}>Send Data</button>
    </div>
  );
}

export default App;
