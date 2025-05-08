import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const [width, setWidth] = useState(0);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(5);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(3);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  // Render the grid
  return (
    <div ref={ref} className='masonry' style={{ height: Math.max(...heights), position: 'relative' }}>
      <AnimatePresence>
        {gridItems.map((item) => (
          <motion.div
            key={item.id + (item.text || '')}
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: item.x } : { opacity: 0, x: -80 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "spring",
              mass: 2,
              stiffness: 120,
              damping: 30,
              duration: 2 // even slower animation
            }}
            style={{
              position: 'absolute',
              left: 0,
              top: item.y,
              width: item.width,
              height: item.height,
            }}
          >
            {item.image ? (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 12,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg,rgb(228, 220, 241) 0%,rgb(164, 72, 249) 50%,rgb(255, 255, 255) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    delay: 1.1, // matches the box animation duration
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  style={{
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 28,
                    fontFamily: "'Montserrat', 'Segoe UI'",
                    textAlign: 'center',
                    padding: 16,
                    letterSpacing: 1.2,
                    lineHeight: 1.2,
                    width: '100%',
                    textShadow: '0 2px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  {item.text}
                </motion.span>
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Masonry;