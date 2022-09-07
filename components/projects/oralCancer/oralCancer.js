import { useRef } from 'react';

function OralCancer() {

    const fileInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fileInputRef.current) {
            console.error("please wait");
            return;
        }
        if (!fileInputRef.current.files[0]) {
            console.error("please select a file");
            return;
        }
        const file = fileInputRef.current.files[0];
        const formData = new FormData();

        formData.append('image', file);

        fetch('http://localhost:5000/predict', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <div className="mx-10 my-14 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <input type="file" name="image" ref={fileInputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default OralCancer;