import React, { Component, useState, useRef } from 'react';
import './BarCodeScanner.css';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';

function BarCodeScanner() {
  const qrRef = useRef(null);
  const [ScanResultWebCam, setScanResultWebCam] = useState('');

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
      console.log('Scan completed');
    }

  };

  return (
    <div className='scan-container'>
      <div className='hide'></div>
      <div className='container'>
        <header>
          <div>Scane Here</div>
        </header>

        <div className='box1'>
          <QrReader
            delay={300}
            style={{ width: '100%' }}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
          />
        </div>

        <div className='box2'>
          <h2>Scanned by web cam: {ScanResultWebCam}</h2>
        </div>
        <button className='btn'>scane</button>
      </div>
    </div>
  );
}

export default BarCodeScanner;
