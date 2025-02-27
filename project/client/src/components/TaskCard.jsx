import React from 'react';

const TaskCard = ({ title, desc, endDate, assignTo, assignedBy, status, createdAt, _id, role }) => {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '16px',
        maxWidth: '300px',
        margin: '10px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '8px'
    };

    const paragraphStyle = {
        margin: '4px 0'
    };

    const dateStyle = {
        color: '#555',
        fontStyle: 'italic'
    };

    return (
        <div style={cardStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <p style={paragraphStyle}>{desc}</p>
            <p style={paragraphStyle}>{status}</p>
            <p style={{ ...paragraphStyle, ...dateStyle }}>{new Date(createdAt).toLocaleDateString()}</p>
            <p style={{ ...paragraphStyle, ...dateStyle }}>{new Date(endDate).toLocaleDateString()}</p>
            {role === "admin" ? (
                <p style={paragraphStyle}>{assignTo.name}</p>
            ) : (
                <p style={paragraphStyle}>{assignedBy.name}</p>
            )}
        </div>
    );
};

export default TaskCard;
