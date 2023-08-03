import React, { useState, useEffect } from 'react';
function App() {
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setDogImage(data.message);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="App">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <img src={dogImage} alt="A Random Dog" />
                </div>
            )}
        </div>
    );
}

export default App;
