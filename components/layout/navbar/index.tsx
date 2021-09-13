import React, {useState} from "react";
import {useRouter} from "next/router";
import { Menu } from 'antd';
import { CheckOutlined, PieChartOutlined, WarningOutlined, TeamOutlined, UserOutlined, MobileOutlined } from '@ant-design/icons';
import * as images from '../../../public/images'
import styles from "./Navbar.module.scss"



export default function Navbar() {
  const router = useRouter()
  const [current, setCurrent] = useState('')

  const handleClick = (e:any) => {
    console.log('click ', e);
    setCurrent(e.key)
  };
  const mobile =  typeof window !== "undefined" ? window.innerWidth < 576 : undefined
  console.log('xxx', images)
  return (
    <div id="Navbar" className={styles.navbar}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode={mobile ? "inline" : "horizontal"}>
        <Menu.Item key="mail" >
          <img src={images.AdTraceIcon}/>
        </Menu.Item>
        <Menu.Item key="about-us" >
          درباره ما
        </Menu.Item>
        <Menu.SubMenu key="possibilities"  title="امکانات">
            <Menu.Item key="setting:1"><CheckOutlined className="icon20" /><span>اتریبیوشن</span></Menu.Item>
            <Menu.Item key="setting:2"><PieChartOutlined className="icon20" /> <span>آنالیتیکس</span></Menu.Item>
            <Menu.Item key="setting:3"><WarningOutlined  className="icon20" /> <span>جلوگیری از تقلب موبایلی</span></Menu.Item>
            <Menu.Item key="setting:4"><TeamOutlined className="icon20" /> <span>دسته‌بندی مشتریان</span></Menu.Item>
            <Menu.Item key="setting:5"><UserOutlined className="icon20" /> <span>مدیریت حساب کاربری</span></Menu.Item>
            <Menu.Item key="setting:6"><MobileOutlined className="icon20" /> <span>پشتیبانی از انواع پلتفرم‌ها</span></Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="customers" >
          مشتریان
        </Menu.Item>
        <Menu.Item key="blog" >
          بلاگ
        </Menu.Item>
        <Menu.Item key="faq" >
          سوالات متداول
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            مستندات
          </a>
        </Menu.Item>
        <Menu.Item key="contact-us" >
          تماس با ما
        </Menu.Item>
      </Menu>
    </div>
  )
}