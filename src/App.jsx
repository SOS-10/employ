import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Updated with your specific hero images
  const myCards = [
    { 
      id: 1, 
      title: "SPIDERMAN", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZfZYpn66oh7hMFtUHQgLtCDcw81VacAtuA&s" 
    },
    { 
      id: 2, 
      title: "IRONMAN", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_x4QdZrKLzVFDDkd0fpTeBWv8Jy1-VbicmA&s" 
    },
    { 
      id: 3, 
      title: "BATMAN",  
      img: "https://wallpapers-clan.com/wp-content/uploads/2025/07/dc-comics-batman-stylized-art-desktop-wallpaper-preview.jpg" 
    },
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Navbar matching the dark theme */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">HERO HQ</a>
          <div className="ms-auto d-flex gap-4">
            <a className="nav-link text-white-50" href="#">Home</a>
            <a className="nav-link text-white-50" href="#">Gallery</a>
            <a className="nav-link text-white-50" href="#">About</a>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <h1 className="text-center text-white mb-5 fw-bold" style={{ letterSpacing: '2px' }}>
          HERO GALLERY
        </h1>
        
        {/* Bootstrap grid system used for dynamic card display */}
        <div className="row g-4 justify-content-center">
          {myCards.map((hero) => (
            <div key={hero.id} className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden" style={styles.cardBox}>
                <img 
                  src={hero.img} 
                  className="card-img-top" 
                  alt={hero.title} 
                  style={styles.imageStyle} 
                />
                <div className="card-body text-center p-4">
                  <h3 style={styles.heroTitle}>{hero.title}</h3>
                  <button className="btn btn-dark rounded-pill px-4 mt-2 fw-bold shadow-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: '#1a1d21', // Dark grey background
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    overflowX: 'hidden' // Critical for removing horizontal white space
  },
  navbar: {
    backgroundColor: '#111315',
    borderBottom: '1px solid #2d3136'
  },
  cardBox: {
    backgroundColor: '#f8f9fa', // Light grey card background
    width: '100%',
    maxWidth: '350px'
  },
  imageStyle: {
    height: '250px',
    objectFit: 'cover'
  },
  heroTitle: {
    color: '#1a1d21',
    fontWeight: '800',
    fontSize: '1.5rem'
  }
};

export default App;