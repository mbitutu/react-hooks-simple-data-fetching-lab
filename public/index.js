import React, { useState, useEffect } from 'react';

function App() {
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        // Fetch the random dog image from the API
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                // Update the dogImage state with the received data
                setDogImage(data.message);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // The empty array [] as the second argument means this effect runs only once, similar to componentDidMount()

    return (
        <div>
            {dogImage ? (
                <img src={dogImage} alt="A Random Dog" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
