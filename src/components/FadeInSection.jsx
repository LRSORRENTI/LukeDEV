import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        const target = domRef.current;
        if (target instanceof Element) {
            observer.observe(target);
        }

        return () => {
            if (target instanceof Element) {
                observer.unobserve(target);
            }
            observer.disconnect();
        };
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
