// import { useEffect, useRef, useState } from "react";
// import QrScanner from "qr-scanner";

// export default function QrReader() {
//   const videoRef = useRef(null);
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       const scanner = new QrScanner(
//         videoRef.current,
//         (res) => {
//           setResult(res.data);
//         },
//         { preferredCamera: "environment" }
//       );
//       scanner.start();
//       return () => scanner.stop();
//     }
//   }, []);

//   useEffect(() => {
//     if (result) {
//       window.location.href = result; // QR кодоор уншсан URL руу чиглүүлэх
//     }
//   }, [result]);

//   return <video ref={videoRef} style={{ width: "100%" }} />;
// }
