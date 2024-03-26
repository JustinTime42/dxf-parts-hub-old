'use client'
import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import {shapes} from '../../utils/shapes';

type ShapeEditorProps = {
  params: {
    shape: string;
  };
};

const ShapeEditor: React.FC<ShapeEditorProps> = ({ params }: { params: { shape: string } }) => {

  const [shape, setShape] = useState(shapes.find((shape) => shape.name === params.shape) || null);
  const [dimensions, setDimensions] = useState<{[key: string]: number | string}>({});
  const [spacing, setSpacing] = useState<number | string>(0);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (params.shape) {
      setShape(shapes.find((shape) => shape.name === params.shape) || null);
    }
  }, [params.shape]);

  const handleSubmit = async (e: React.FormEvent) => {
    const numbers: { [key: string]: number } = {}; 
    Object.keys(dimensions).forEach((key) => {
      numbers[key] = Number(dimensions[key]);
    });
    console.log(numbers);
    e.preventDefault();
    try {
      await fetch(`http://127.0.0.1:5000/api/generate_gasket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...numbers, spacing, rows, cols, fileName}),
      });
      // Handle success
    } catch (error) {
      alert('Error generating gasket');
    }
  };

  if (!shape) {
    return <div>Shape not found</div>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {
          shape.dimensions &&
          shape.dimensions.map((dimension, index) => {
            return (
              <TextField
                key={index}
                label={dimension.label}
                value={dimensions[dimension.name] || ''}
                onChange={(e) => {
                    setDimensions({...dimensions, [dimension.name]: e.target.value})
                }}
                fullWidth
              />
            );
          
          })
        }
        <TextField
          label="Spacing"
          value={spacing || ''}
          onChange={(e) => setSpacing(e.target.value)}
          fullWidth
        />
        <TextField
          label="Rows"
          value={Number(rows)}
          onChange={(e) => setRows(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Cols"
          value={Number(cols)}
          onChange={(e) => setCols(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Generate Gasket
        </Button>
      </form>
    </div>
  );
};

export default ShapeEditor;