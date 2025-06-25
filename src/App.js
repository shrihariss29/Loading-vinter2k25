
import sc from './sandClock.webp';
function App() {
  return (
    <div className="loading-container">
      <div className="loading-content">
          <img src={sc} alt="Sand clock" className="rotating-image"/>
        <h1>Vinterbash 2025</h1>
        <p>Website will be live from <strong>30th June 2025</strong></p>
      </div>
    </div>      
  );
}

export default App;
