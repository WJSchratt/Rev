import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    artistName: '',
    pastProjects: '',
    socialMedia: '',
    upcomingEvents: '',
    artFiles: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'artFiles') {
      setFormData({
        ...formData,
        artFiles: Array.from(files)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Artist Submission Form</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="artistName">Artist Name</label>
            <input
              type="text"
              id="artistName"
              name="artistName"
              value={formData.artistName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pastProjects">Past Projects</label>
            <textarea
              id="pastProjects"
              name="pastProjects"
              value={formData.pastProjects}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="socialMedia">Social Media Links</label>
            <input
              type="text"
              id="socialMedia"
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="upcomingEvents">Upcoming Events</label>
            <textarea
              id="upcomingEvents"
              name="upcomingEvents"
              value={formData.upcomingEvents}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="artFiles">Any Art or Stuff or Things (Images)</label>
            <input
              type="file"
              id="artFiles"
              name="artFiles"
              onChange={handleChange}
              multiple
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 My Modern Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
