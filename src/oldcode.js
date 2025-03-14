*
//old version post



const CreateData = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    yearPublished: '',
  });

  const API_KEY = 'postmanrulz'; // Replace with a valid API key
  const API_URL = 'https://proxy.corsfix.com/?https://library-api.postmanlabs.com/books';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        API_URL,
        {
          title: formData.title,
          author: formData.author,
          genre: formData.genre,
          yearPublished: formData.yearPublished ? parseInt(formData.yearPublished, 10) : 2000,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY, // Use a valid API key
          },
        }
      );

      alert('Book created successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error creating data:', error);
      console.error('Full error response:', error.response?.data || 'No response from server');

      alert(`Failed to create book. ${JSON.stringify(error.response?.data || 'Unknown error')}`);
    }
  };

  return (
    <div>
      <h2>Create New Book</h2>
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
      <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
      <input type="number" name="yearPublished" placeholder="Year Published" value={formData.yearPublished} onChange={handleChange} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateData;





const[data, setData]= useState([]);
const [loading, setLoading] = useState
(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating a delay to show loading state
        setTimeout(async () => {
          const response = await fetch('https://proxy.corsfix.com/?https://library-api.postmanlabs.com/books?title="abc"');
          const result = await response.json();
          setData(result);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
*/
  return (
    <div>
      <h1>API Data</h1>
      {loading ? (
        <p>Loading...</p>


















      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiExample;

const HkmStreakApi= () => {
  const[data, setData]= useState([]);
  useEffect( () => {
     const fetchData = async () => {
      try{
           const response = await fetch('https://proxy.corsfix.com/?https://library-api.postmanlabs.com/books');
           const result = await response.json();
           setData(result);
      }
      catch (error){
            console.error('error cartching data', error);
            }
    
            

     };
     fetchData();
     }, []);
   return (
    <div>
      <h1>HKMSTREAK-API</h1>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}  {item.id}</li>
        ))}
      </ol>
    </div>
  );
};

export default HkmStreakApi;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */


import React, { useState } from 'react';
import axios from 'axios';

const CreateData = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    yearPublished: '',
  });

  const API_KEY = 'postmanrulz'; // Replace with your actual API key

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        'https://library-api.postmanlabs.com/books',
        {
          title: formData.title,
          author: formData.author,
          genre: formData.genre,
          yearPublished: parseInt(formData.yearPublished, 10), // Ensure it's a number
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key':API_KEY , // Add the API key here
          },
        }
      );

      alert('Book created successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error creating data:', error);
      console.error('Error details:', error.response?.data || 'No details');

      alert(
        `Failed to create book. ${error.response?.data?.message || 'Check API format'}`
      );
    }
  };

  return (
    <div>
      <h2>Create New Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />
      <input
        type="number"
        name="yearPublished"
        placeholder="Year Published"
        value={formData.yearPublished}
        onChange={handleChange}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateData;
