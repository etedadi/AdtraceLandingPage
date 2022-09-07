import styles from "./Post.module.scss";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";
var moment = require('moment-jalaali')

export default function Post({item}: any) {
  const {locale} = useRouter()

  return (
    <Link href={`post/${item.id}`}>
      <div className={styles.card}>
        <img src={item._embedded['wp:featuredmedia']?.[0].source_url}/>
        <div>
          <h3>{item.title?.rendered}</h3>
          <p>
            {ReactHtmlParser(item.excerpt?.rendered)}
          </p>
          <span>{moment(item.date).format(locale === 'fa' ? 'jYYYY/jM/jD' : 'YYYY/M/D')}</span>
        </div>
      </div>
    </Link>
  )
}