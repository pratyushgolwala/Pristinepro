import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#1f2937',
      color: '#fff',
      padding: '64px 24px 24px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '48px',
      }}>
        {/* Company Info */}
        <div>
          <h3 style={{ 
            color: '#6ee7b7', 
            fontSize: '1.5rem', 
            marginBottom: '16px' 
          }}>Pristine Pro</h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
            Premium wet tissues for superior hygiene protection. Safe, effective, 
            and environmentally conscious cleaning solutions for modern families.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ 
            color: '#6ee7b7', 
            fontSize: '1.25rem', 
            marginBottom: '16px' 
          }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Home', 'About', 'Flavors', 'Contact'].map((link) => (
              <li key={link} style={{ marginBottom: '12px' }}>
                <a href={`#${link.toLowerCase()}`} style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 style={{ 
            color: '#6ee7b7', 
            fontSize: '1.25rem', 
            marginBottom: '16px' 
          }}>Customer Service</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px', color: '#9ca3af' }}>
              1-800-CLEANWIPE
            </li>
            <li style={{ marginBottom: '12px', color: '#9ca3af' }}>
              support@cleanwipepro.com
            </li>
            <li style={{ marginBottom: '12px', color: '#9ca3af' }}>
              Live Chat Support
            </li>
            <li style={{ marginBottom: '12px', color: '#9ca3af' }}>
              Bulk Orders
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 style={{ 
            color: '#6ee7b7', 
            fontSize: '1.25rem', 
            marginBottom: '16px' 
          }}>Follow Us</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <li key={social} style={{ marginBottom: '12px' }}>
                <a href={`#${social.toLowerCase()}`} style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{
        borderTop: '1px solid rgba(156, 163, 175, 0.2)',
        marginTop: '48px',
        paddingTop: '24px',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#9ca3af',
          fontSize: '0.875rem',
          marginBottom: 0,
        }}>
          © 2025 Pristine Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}