import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
// import * as tflite from '@tensorflow/tfjs-tflite';
const tflite = dynamic(() => import("@tensorflow/tfjs-tflite"), { ssr: false });


function OralCancer() {

    const fileInputRef = useRef(null);

    useEffect(async () => {
        const tfliteModel = await tflite.loadTFLiteModel('/oralCancer.tflite');
    }, [])

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

        fetch('/api/predict', {
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
        <div className="mx-10 my-14 rounded-lg shadow-md bg-white">
            <input type="file" name="image" ref={fileInputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default OralCancer;