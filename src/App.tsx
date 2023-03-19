import './App.css'
import Navbar from './components/Navbar'
import { Routing } from './router'

// function App() {

//   return (
//     <div className="App">
//       <Navbar />
//       <main>
//         <Routing />
//       </main>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import { Footer, Loader } from './components'

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before loading the app
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader message="Welcome to church..." />
      ) : (
        <div>
          <div className="App font-sans">
            <Navbar />
            <main>
              <Routing />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;

