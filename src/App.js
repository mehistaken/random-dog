import React, { useEffect, useState } from 'react';
import { getList } from './services/list';
import { Item } from './components/item';

const endpoint = 'https://dog.ceo/api/';
const random_count = 8; // max 50
const random_url = endpoint + 'breeds/image/random/' + random_count;

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList(random_url)
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setList(data.message);
        } else {
          throw new Error(data.status);
        }
      })
      .catch(error => {
        console.log('error: ' + error);
      });
  }, []);

  return (
    <div className="list">
      {list.map((item, idx) => <Item key={idx} src={item} />)}
    </div>
  );
}

export default App;