import React, {useState} from "react";
import {useRouter} from "next/router";
import useWindowSize from "../../../utills/useWindowSize"
import { Menu } from 'antd';
import { CheckOutlined, PieChartOutlined, GlobalOutlined, WarningOutlined, TeamOutlined, UserOutlined, MobileOutlined , MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import * as images from '../../../assets/images'
import styles from "./Navbar.module.scss"
import translations  from "../../../assets/translations/layout/navber"
import Link from "next/link";



export default function Navbar(props:any) {
  // @ts-ignore
  const tr = translations[useRouter().locale]
  const [current, setCurrent] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleClick = (e:any) => {
    console.log('click ', e);
    setCurrent(e.key)
  };
  const size:any = useWindowSize();
  const mobile =  size.width < 576

  return (
    <div id="Navbar" className={styles.navbar} style={props.transparent ? {background: 'transparent'} : {}} >
      <div>
        <i className={styles.menuButton} onClick={()=> setMobileMenuOpen(!mobileMenuOpen)}>
          {mobile ? mobileMenuOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> : null }
        </i>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          style={mobile ? mobileMenuOpen ? {height: 'auto'} : {height: 0} : {height: 80}}
          mode={mobile ? "inline" : "horizontal"}
        >
          <Menu.Item key="mail" >
            <Link href="/">
              <img src={images.AdTraceIcon} style={{height: 46}}/>
            </Link>
          </Menu.Item>
          <Menu.Item key="about-us" >
            <Link href="/about-us">
              {tr.aboutUs}
            </Link>
          </Menu.Item>
          <Menu.SubMenu key="possibilities"  title={tr.possibilities}>
            <Menu.Item key="setting:1"><CheckOutlined className="icon20" /><span>{tr.pItem1}</span></Menu.Item>
            <Menu.Item key="setting:2"><PieChartOutlined className="icon20" /> <span>{tr.pItem2}</span></Menu.Item>
            <Menu.Item key="setting:3"><WarningOutlined  className="icon20" /> <span>{tr.pItem3}</span></Menu.Item>
            <Menu.Item key="setting:4"><TeamOutlined className="icon20" /> <span>{tr.pItem4}</span></Menu.Item>
            <Menu.Item key="setting:5"><UserOutlined className="icon20" /> <span>{tr.pItem5}</span></Menu.Item>
            <Menu.Item key="setting:6"><MobileOutlined className="icon20" /> <span>{tr.pItem6}</span></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="customers" >
            {tr.customers}
          </Menu.Item>
          <Menu.Item key="blog" >
            <Link href="/blog" locale="fa">
              {tr.blog}
            </Link>
          </Menu.Item>
          <Menu.Item key="faq" >
            {tr.faq}
          </Menu.Item>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              {tr.documents}
            </a>
          </Menu.Item>
          <Menu.Item key="contact-us" >
            {tr.contactUs}
          </Menu.Item>
        </Menu>
      </div>
      <div className={styles.left}>
        <Link href={useRouter().pathname} locale={useRouter().locale === "fa" ? "en" : "fa"}>
         <span className={styles.locale}>
           <GlobalOutlined />
           <span> {useRouter().locale === "fa" ? "en" : "fa"}</span>
        </span>
        </Link>
      </div>


    </div>
  )
}

