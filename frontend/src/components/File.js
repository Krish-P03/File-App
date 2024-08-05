import React from 'react';

const File = ({ file, onRename, onDelete }) => (
    <div>
        <span>{file.name}</span>
        <button onClick={() => onRename(file._id)}>Rename</button>
        <button onClick={() => onDelete(file._id)}>Delete</button>
    </div>
);

export default File;
