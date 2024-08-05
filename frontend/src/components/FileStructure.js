import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Directory from './Directory';
import File from './File';

const FileStructure = () => {
    const [currentDir, setCurrentDir] = useState(null);
    const [directories, setDirectories] = useState([]);
    const [files, setFiles] = useState([]);
    const [newDirName, setNewDirName] = useState('');
    const [newFileName, setNewFileName] = useState('');
    const [newFileContent, setNewFileContent] = useState('');

    useEffect(() => {
        fetchDirectoryContents(currentDir);
    }, [currentDir]);

    const fetchDirectoryContents = async (dirId) => {
        try {
            const res = await axios.get(`/api/directory/${dirId}`);
            setDirectories(res.data.directories);
            setFiles(res.data.files);
        } catch (err) {
            console.error(err);
        }
    };

    const createDirectory = async () => {
        try {
            const res = await axios.post('/api/directory', { name: newDirName, parent: currentDir });
            setDirectories([...directories, res.data]);
            setNewDirName('');
        } catch (err) {
            console.error(err);
        }
    };

    const createFile = async () => {
        try {
            const res = await axios.post('/api/file', { name: newFileName, content: newFileContent, directory: currentDir });
            setFiles([...files, res.data]);
            setNewFileName('');
            setNewFileContent('');
        } catch (err) {
            console.error(err);
        }
    };

    const renameItem = async (type, id) => {
        const newName = prompt('Enter new name:');
        if (newName) {
            try {
                await axios.put(`/api/rename/${type}/${id}`, { newName });
                fetchDirectoryContents(currentDir);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const deleteItem = async (type, id) => {
        try {
            await axios.delete(`/api/delete/${type}/${id}`);
            fetchDirectoryContents(currentDir);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={newDirName}
                    onChange={(e) => setNewDirName(e.target.value)}
                    placeholder="New Directory Name"
                />
                <button onClick={createDirectory}>Create Directory</button>
            </div>
            <div>
                <input
                    type="text"
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)}
                    placeholder="New File Name"
                />
                <textarea
                    value={newFileContent}
                    onChange={(e) => setNewFileContent(e.target.value)}
                    placeholder="File Content"
                />
                <button onClick={createFile}>Create File</button>
            </div>
            <div>
                {directories.map((dir) => (
                    <Directory
                        key={dir._id}
                        directory={dir}
                        onOpen={setCurrentDir}
                        onRename={(id) => renameItem('directory', id)}
                        onDelete={(id) => deleteItem('directory', id)}
                    />
                ))}
                {files.map((file) => (
                    <File
                        key={file._id}
                        file={file}
                        onRename={(id) => renameItem('file', id)}
                        onDelete={(id) => deleteItem('file', id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FileStructure;
