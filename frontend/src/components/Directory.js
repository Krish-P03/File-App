import React from 'react';

const Directory = ({ directory, onOpen, onRename, onDelete }) => (
    <div>
        <span onClick={() => onOpen(directory._id)}>{directory.name}</span>
        <button onClick={() => onRename(directory._id)}>Rename</button>
        <button onClick={() => onDelete(directory._id)}>Delete</button>
    </div>
);

export default Directory;
