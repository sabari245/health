// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as tflite from '@tensorflow/tfjs-tflite';


export default async function handler(req, res) {
  console.log(req.body);
  const tfliteModel = await tflite.loadTFLiteModel('/oralCancer.tflite');
  // Prepare input tensors.
  // const img = tf.browser.fromPixels(document.querySelector('img'));
  // const input = tf.sub(tf.div(tf.expandDims(img), 127.5), 1);

  // // Run inference and get output tensors.
  // let outputTensor = tfliteModel.predict(input);
  // console.log(outputTensor.dataSync());
  res.status(200).json({ name: 'John Doe' })
}
