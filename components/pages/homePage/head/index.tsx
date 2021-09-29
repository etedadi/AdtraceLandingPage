import React from "react";
import styles from './Head.module.scss'
import img1 from './images/Group-16228.png'
import Zoom from 'react-reveal/Zoom';
import {Button} from "antd";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";


export default function Head() {
  // @ts-ignore
  const tr = translations[useRouter().locale]
  return (
    <div className={styles.container}>
      <img src={img1.src} className={styles.img1}/>
      <Zoom clear cascade>
      <div className={styles.texts}>
        <h4>{tr['head-title']}</h4>
        <h3>{tr['head-title2']}</h3>
        <p>{tr['head-des']}</p>
        <div>
          <a href="https://panel.adtrace.io/signup">
            <Button className="btn-primary" style={{marginInlineStart: 0}}>
              {tr['head-btn1']}
            </Button>
          </a>
          <a href="https://panel.adtrace.io/login">
            <Button className="btn-primary">
              {tr['head-btn2']}
            </Button>
          </a>
        </div>
      </div>
      </Zoom>

    </div>
  )
}


