import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="custom-cursor h-3 w-3 bg-zinc-100 rounded-full fixed z-40 " style={{ left: cursorPosition.x, top: cursorPosition.y }} />
    );
}

export default CustomCursor;
