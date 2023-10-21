import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  return <div>{loading ? <h1>Loading...</h1> : <h2>false</h2>}</div>;
}

export default App;
