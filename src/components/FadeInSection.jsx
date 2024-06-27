import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div
            className={`transition-opacity duration-[1200ms] ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default FadeInSection;