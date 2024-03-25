import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import { shapes } from '../app/utils/shapes';
import Link from 'next/link';

const ShapeSelector: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={2}>
        {shapes.map((image, index) => (
          <Grid item key={index}>
            <Paper elevation={3}>
              <Link href={`/shape-editor/${image.name}`} passHref>
              <Image src={`/shapes/${image.image_path}`} alt={`Image ${index}`} width={256} height={256} />
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShapeSelector;