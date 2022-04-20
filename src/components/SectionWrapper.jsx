import React from 'react'
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title,description,showBtn,mockupImg,banner,reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
        <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`} >
        <div className={`${styles.descDiv}`}>
             <h1 className={`${styles.h1Text}`}>{title}</h1>
             <p className={`${styles.descriptionText}`}>{description}</p>
             {showBtn && (
                 <Button 
                     assetUrl={assets.expo}
                     link="deployed nft marketplace"
                 />
             )}
        </div>
        <div
          className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}
        >
          <img src={mockupImg} alt="mockup" className="w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain" />
        </div>
        </div>
        
    </div>
  )
}

export default SectionWrapper