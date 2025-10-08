import React from 'react';
import '../styles/NoticeCard.css';

export default function NoticeCard({title, message, accent = '#007BFF'}){
    return (
        <div className="notice-card" style={{ '--accent': accent }}>
            <h2 className="notice-title">{title}</h2>
            <p className="notice-message">{message}</p>
        </div>
    );
};

// export default NoticeCard;