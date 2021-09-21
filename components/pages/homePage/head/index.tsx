import React from "react";
import styles from './Head.module.scss'
import img1 from './images/Group-16228.png'
import {Button} from "antd";




export default function Head() {
  return (
      <div className={styles.container}>
        <img src={img1.src} className={styles.img1}/>
        <div className={styles.texts}>
          <h4>پلتفرم اتریبیوشن و آنالیتیکس موبایلی</h4>
          <h3>دقیق بسنجید و بهینه هزینه کنید</h3>
          <p>ادتریس به عنوان رهبر بازار ترکرهای داخلی سعی می‌کند داده‌های امن، دقیق و معتبر در اختیار صاحبان اپلیکیشن قراردهد. ادتریس منبع نصب اپلیکیشن را شناسایی، از تقلب در نصب جلوگیری و بهترین و موثرترین شبکه تبلیغاتی برای نصب اپلیکیشن را شناسایی می‌کند</p>
          <div>
            <Button className="btn-primary">
              ورود
            </Button>

            <Button className="btn-primary">
              ثبت نام
            </Button>

          </div>
        </div>

      </div>
  )
}


