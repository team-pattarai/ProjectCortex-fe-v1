import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import axios from 'axios';

type Factors = {
  phase: number;
  factorName: string;
  maxScore: number;
};
interface ScoreData {
  factors: Factors;
  score: number;
}

export default function MemberScoreCard() {
  return (
    <>
      <Card
        elevation={2}
        sx={{
          display: 'flex',
          textAlign: 'center',
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          padding: 2,
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Avatar
            alt="Raksha"
            //src={AvatarIcon}
            sx={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              marginBottom: '5%',
            }}
          />
          <Typography id="modal-modal-title" component="h2" variant="h5">
            Raksha V G - Phase I
          </Typography>
          <List id="modal-modal-description">
            <ListSubheader>
              <div className="d-flex justify-content-between">
                <span className="text-start">EVENT</span>
                <span>SCORE</span>
              </div>
            </ListSubheader>
            <ListItem>
              <ListItemText primary="INTACTO" />
              <div className="d-flex justify-content-end">
                <ListItemText primary="2" />
              </div>
            </ListItem>
            <ListItem>
              <ListItemText />
              <ListItemText
                primary="TOTAL"
                className="d-flex justify-content-start"
              />
              <ListItemText
                primary="42"
                className="d-flex justify-content-end"
              />
              <ListItemText
                primary="9"
                className="d-flex justify-content-end"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
}
