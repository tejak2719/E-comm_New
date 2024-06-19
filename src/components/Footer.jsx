import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="social-media" style={{ marginBottom: '10px' }}>
            <a href="https://github.com/tejak2719" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
              <img 
                src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" 
                alt="GitHub Tejak2719" 
                className="social-icon" 
                style={{ width: '30px', height: '30px' }}
              />
            </a>
            <a href="https://github.com/vmrt01" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
              <img 
                src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" 
                alt="GitHub Vmrt01" 
                className="social-icon" 
                style={{ width: '30px', height: '30px' }}
              />
            </a>
          </div>
          <p>&copy; 2024 STRK N VMRT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;