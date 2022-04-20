import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
   <div className={`${styles.subSection} flex-col text-center`}>
   <div>
    <h1 className={`${styles.h1Text}`}>
      Download the Source Code
    </h1>
    <p className={`${styles.pText}`}>
      Get full source code on Github
    </p>
   </div>
   <a href='https://github.com/mnnkhndlwl/nft-marketplace_react-native' target="_blank"
   className={`${styles.btnPrimary}`}
   >
     Source Code
   </a>
   <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
   </div>
    </div>
  )
}

export default Download