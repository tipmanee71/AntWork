import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';
import {  deepPurple } from '@mui/material/colors';

export default function CardTemporary() {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary">
           คะแนนรีวิว Review score
          </Typography>
         <Typography variant="body2" color="text.secondary" style={{ fontWeight: 'bold' }}>
            ราคาประมาณจ้างงาน
         </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            <Typography variant="body2" color="text.secondary" style={{ marginLeft: '10px' }}>
              John Doe {/* Replace with the actual name */}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}