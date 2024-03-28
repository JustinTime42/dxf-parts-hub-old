'use client'
import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import {shapes} from '../../utils/shapes';
import Image from 'next/image';

type ShapeEditorProps = {
  params: {
    shape: string;
  };
};

const ShapeEditor: React.FC<ShapeEditorProps> = ({ params }: { params: { shape: string } }) => {

  const [shape, setShape] = useState(shapes.find((shape) => shape.name === params.shape) || null);
  const [dimensions, setDimensions] = useState<{[key: string]: number | string}>({});
  const [spacing, setSpacing] = useState('');
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [fileName, setFileName] = useState('');
  const [svgFile, setSvgFile] = useState('');


  useEffect(() => {
    if (params.shape) {
      setShape(shapes.find((shape) => shape.name === params.shape) || null);
    }
  }, [params.shape]);

  const handleSubmit = async (shouldMakeFile: boolean) => {
    const numbers: { [key: string]: number } = {}; 
    Object.keys(dimensions).forEach((key) => {
      numbers[key] = Number(dimensions[key]);
    });
    const numSpacing = spacing ? Number(spacing) : 0;
    console.log({...numbers, numSpacing, rows, cols, fileName});
    try {
      const file = await fetch(`/api/generate_gasket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...numbers, spacing: numSpacing, rows, cols, fileName, shouldMakeFile}),
      });
      // save the returned file
      const blob = await file.blob();
      
      if (shouldMakeFile) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.dxf` || 'untitled.dxf';
        a.click();
      }     
      else {
        setSvgFile(URL.createObjectURL(blob));
      } 
    } catch (error) {
      alert('Error generating gasket');
    }
  };

  if (!shape) {
    return <div>Shape not found</div>;
  }
  return (
    <div>      
      <form>
        <div>
          {
            shape.dimensions &&
            shape.dimensions.map((dimension, index) => {
              return (
                <TextField
                  style={{margin: '1rem'}}
                  key={index}
                  label={dimension.label}
                  value={dimensions[dimension.name] || ''}
                  onChange={(e) => {
                      setDimensions({...dimensions, [dimension.name]: e.target.value})
                  }}
                />
              );
            
            })
          }
          <TextField
            style={{margin: '1rem'}}
            label="Spacing"          
            value={spacing || ''}
            onChange={(e) => setSpacing(e.target.value)}
          />
          <TextField
            style={{margin: '1rem'}}
            label="Rows"
            value={Number(rows)}
            onChange={(e) => setRows(Number(e.target.value))}
          />
          <TextField
            style={{margin: '1rem'}}
            label="Cols"
            value={Number(cols)}
            onChange={(e) => setCols(Number(e.target.value))}
          />
          <TextField
            style={{margin: '1rem'}}
            label="File Name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </div>   
        <div> 
          <Button 
            style={{margin: '1rem'}} 
            type="button" 
            variant="contained" 
            color="primary"
            onClick={() => handleSubmit(false)}
          >
            Preview DXF
          </Button>
          <Button 
            style={{margin: '1rem'}} 
            type="button" 
            variant="contained" 
            color="primary"
            onClick={() => handleSubmit(true)}
          >
            Generate DXF
          </Button>    
        </div>
      </form>
      <div>
        <Image 
          src={svgFile}  
          alt="gasket" 
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default ShapeEditor;