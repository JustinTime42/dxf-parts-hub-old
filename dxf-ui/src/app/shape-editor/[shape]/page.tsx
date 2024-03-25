'use client'
import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import {shapes} from '../../utils/shapes';

type ShapeEditorProps = {
  params: {
    slug: string;
  };
};

const ShapeEditor: React.FC<ShapeEditorProps> = ({ params }: { params: { shape: string } }) => {


  // Rest of the code
  const shape = shapes.find((shape) => shape.name === params.shape);
  const [innerDiameter, setInnerDiameter] = useState(0);
  const [outerDiameter, setOuterDiameter] = useState(0);
  const [spacing, setSpacing] = useState(0);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [fileName, setFileName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      innerDiameter,
      outerDiameter,
      spacing,
      rows,
      cols,
      fileName,
    };

    try {
      await fetch(`http://127.0.0.1:5000/api/generate_gasket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  if (!shape) {
    return <div>Shape not found</div>;
  }
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Inner Diameter"
          value={Number(innerDiameter)}
          onChange={(e) => setInnerDiameter(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Outer Diameter"
          value={Number(outerDiameter)}
          onChange={(e) => setOuterDiameter(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Spacing"
          value={Number(spacing)}
          onChange={(e) => setSpacing(Number(e.target.value))}
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