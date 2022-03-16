import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import React from 'react';
import styles from "../styles/Home.module.css";

export default function RayusRadiology() {
    return (
        <>
            <Toolbar />
            <div className={styles.main}>
                <h1>Rayus Radiology</h1>
            </div>
        </>
    );
  }