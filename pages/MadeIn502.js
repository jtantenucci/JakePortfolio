import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import React from 'react';
import styles from "../styles/Home.module.css";



export default function MadeIn502() {
    return (
        <>
            <Toolbar />
            <div className={styles.main}>
                <h1>Made In 502</h1>
            </div>
        </>
    );
  }