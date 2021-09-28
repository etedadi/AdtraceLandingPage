import React, {useState} from "react";
import {useRouter} from "next/router";
import useWindowSize from "../../../utills/useWindowSize/index"
import { Menu } from 'antd';
import { CheckOutlined, PieChartOutlined, GlobalOutlined, WarningOutlined, TeamOutlined, UserOutlined, MobileOutlined , MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import * as images from '../../../assets/images'
import styles from "./Navbar.module.scss"
import translations  from "../../../assets/translations/layout/navber"
import Link from "next/link";



export default function Navbar(props:any) {
  const {locale, pathname}:any = useRouter()
  // @ts-ignore
  const tr = translations[locale]
  const [current, setCurrent] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const size:any = useWindowSize();
  const mobile =  size.width < 576

  const handleClick = (e:any) => {
    console.log('click ', e);
    setMobileMenuOpen(false)
  };

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
          {!mobile &&
          <Menu.Item key="mail" >
            <Link href="/">
              <img src={images.AdTraceIcon} style={{height: 46}}/>
            </Link>
          </Menu.Item>
          }
          <Menu.SubMenu key="possibilities"  title={tr.possibilities}>
            <Menu.Item key="setting:1"><CheckOutlined className="icon20" /><Link href="/#possibility1">{tr.pItem1}</Link></Menu.Item>
            <Menu.Item key="setting:2"><PieChartOutlined className="icon20" /> <Link href="/#possibility2">{tr.pItem2}</Link></Menu.Item>
            <Menu.Item key="setting:3"><WarningOutlined  className="icon20" /> <Link href="/#possibility3">{tr.pItem3}</Link></Menu.Item>
            <Menu.Item key="setting:4"><TeamOutlined className="icon20" /> <Link href="/#possibility4">{tr.pItem4}</Link></Menu.Item>
            <Menu.Item key="setting:5"><UserOutlined className="icon20" /> <Link href="/#possibility5">{tr.pItem5}</Link></Menu.Item>
            <Menu.Item key="setting:6"><MobileOutlined className="icon20" /> <Link href="/#possibility6">{tr.pItem6}</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="customers" >
            <Link href="/#customers">
            {tr.customers}
            </Link>
          </Menu.Item>
          <Menu.Item key="blog" >
            <Link href="/blog" locale="fa">
              {tr.blog}
            </Link>
          </Menu.Item>
          <Menu.Item key="faq" >
            <Link href="/FAQs" locale="fa">
            {tr.faq}
            </Link>
          </Menu.Item>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              {tr.documents}
            </a>
          </Menu.Item>
          <Menu.Item key="about-us" >
            <Link href="/#aboutUs">
              {tr.aboutUs}
            </Link>
          </Menu.Item>
          <Menu.Item key="contact-us" >
            <Link href="/#contactUs">
              {tr.contactUs}
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      <div
        className={styles.left}
        style={{visibility: !useRouter().pathname.includes('/FAQs') &&
          !pathname.includes('/privacy') &&
          !pathname.includes('/post') &&
          !pathname.includes('/blog') ? "visible" : 'hidden' }}
      >
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

