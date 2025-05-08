import React from 'react';
import FlowingMenu from './FlowingMenu';

export default function Flavors() {
    const demoItems = [
        { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
    ];

    return (
        <div style={{ zIndex: 1, position: 'relative', overflow: 'hidden' }}>
            {/* Heading Section */}
            <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                marginBottom: '20px'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    background: 'linear-gradient(135deg, #a259f7 0%, #7c3aed 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                    marginBottom: '16px'
                }}>
                    Explore Our Unique Flavors
                </h1>
                <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1.125rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: 1.6
                }}>

                    Discover a variety of flavors crafted to perfection. Each flavor is designed to bring a unique experience to your daily routine. Choose your favorite and enjoy the difference!
                </p>
            </div>

            {/* Flowing Menu Section */}
            <div style={{
                height: '600px',
                width: '500px',
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
            }}>
                <FlowingMenu items={demoItems} />
            </div>
        </div>
    );
}
