import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import React from 'react';
import styles from "../styles/Home.module.css";

export default function SpinItForward() {
    return (
        <>
            <Toolbar />
            <div className={styles.main}>
                <h1>SpinItForward</h1>
            </div>
        </>
    );
  }