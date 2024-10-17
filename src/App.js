// import React, { useEffect, useState } from 'react';
// import html2canvas from 'html2canvas';

// function App() {
//   const [verses, setVerses] = useState([]);
//   const [randomVerse, setRandomVerse] = useState(null);
//   const [backgroundImage, setBackgroundImage] = useState('');

//   // Array of background image URLs
//   const backgroundImages = [
//     'https://source.unsplash.com/1600x900/?nature,forest',
//     'https://source.unsplash.com/1600x900/?sunset',
//     'https://source.unsplash.com/1600x900/?mountains',
//     'https://source.unsplash.com/1600x900/?sky',
//     'https://source.unsplash.com/1600x900/?sea',
//   ];

//   // Fetch Bible verses
//   useEffect(() => {
//     fetch('/bible-verses.json')
//       .then((response) => response.json())
//       .then((data) => setVerses(data.verses))
//       .catch((error) => console.error('Error fetching the JSON:', error));
//   }, []);

//   // Generate a random verse
//   const generateRandomVerse = () => {
//     const randomIndex = Math.floor(Math.random() * verses.length);
//     setRandomVerse(verses[randomIndex]);

//     // Set a random background image
//     const randomBackgroundIndex = Math.floor(Math.random() * backgroundImages.length);
//     setBackgroundImage(backgroundImages[randomBackgroundIndex]);
//   };

//   // Download the verse as an image
//   const downloadVerseImage = () => {
//     const verseElement = document.getElementById('verse-container');
//     html2canvas(verseElement).then((canvas) => {
//       const link = document.createElement('a');
//       link.download = 'bible-verse.png';
//       link.href = canvas.toDataURL();
//       link.click();
//     });
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>Bible Verses Generator</h1>
//       <button 
//         onClick={generateRandomVerse}
//         style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           cursor: 'pointer',
//           marginBottom: '20px'
//         }}
//       >
//         Generate Random Verse
//       </button>

//       {randomVerse && (
//         <div
//           id="verse-container"
//           style={{
//             position: 'relative',
//             width: '80%',
//             margin: '20px auto',
//             padding: '50px',
//             backgroundImage: `url(${backgroundImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             color: 'black',
//             fontSize: '24px',
//             fontWeight: 'bold',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             borderRadius: '10px'
//           }}
//         >
//           <p>"{randomVerse.text}</p>
//           <p>- {randomVerse.book}-{randomVerse.chapter}:{randomVerse.verse}</p>
//         </div>
//       )}

//       {randomVerse && (
//         <button 
//           onClick={downloadVerseImage}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             cursor: 'pointer',
//             marginTop: '20px',
//           }}
//         >
//           Download Verse Image
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [verses, setVerses] = useState([]);
  const [randomVerse, setRandomVerse] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  // Array of background image URLs
  const backgroundImages = [
    'https://th.bing.com/th/id/R.8587dd29f2aa06a64b6b16d0c915af2e?rik=%2f23FbpZP2jpgbQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f4%2ff%2f1423900-cool-wallpaper-jesus-christ-2146x1390-for-ios.jpg&ehk=LhSY%2fxzYMhnostjD%2bWNQK2vWsgqZMOIsQ%2fz0MEwrDvU%3d&risl=&pid=ImgRaw&r=0',
    'https://www.thoughtco.com/thmb/ALR6WHb_AwlvkRJvtF9Qk5011qU=/3582x2592/filters:no_upscale():max_bytes(150000):strip_icc()/jesus-christ-crucified-on-the-cross-184929267-585957c25f9b586e022e22ea.jpg',
    'https://th.bing.com/th/id/OIP.gASMlPqsrIt_9q8Y76PZKgHaFj?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.pUCLOhrVZfmo6X3OrJWASgHaE8?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.QIT2OGzAJGKna6RyctbDqAHaEK?rs=1&pid=ImgDetMain',
  ];

  // Fetch Bible verses
  useEffect(() => {
    fetch('/bible-verses.json')
      .then((response) => response.json())
      .then((data) => setVerses(data.verses))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  // Generate a random verse
  const generateRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    setRandomVerse(verses[randomIndex]);

    // Set a random background image
    const randomBackgroundIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomBackgroundIndex]);
  };

  // Download the verse as an image
  const downloadVerseImage = () => {
    const verseElement = document.getElementById('verse-container');
    html2canvas(verseElement).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'bible-verse.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Bible Verses Generator</h1>
      <button 
        onClick={generateRandomVerse}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Generate Random Verse
      </button>

      {randomVerse && (
        <div
          id="verse-container"
          style={{
            position: 'relative',
            width: '80%',
            margin: '20px auto',
            padding: '50px',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            minHeight: '300px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p>"{randomVerse.text}"</p>
          <p>- {randomVerse.book}-{randomVerse.chapter}:{randomVerse.verse}

          </p>
        </div>
      )}

      {randomVerse && (
        <button 
          onClick={downloadVerseImage}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Download Verse Image
        </button>
      )}
    </div>
  );
}

export default App;
