import React from "react";
import Link from "next/link";
import * as images from "./images"
import styles from './Blogs.module.scss'
import {Col, Row, Tooltip} from "antd";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";

export default function Blogs({posts}:any) {
  // @ts-ignore
  const tr = translations[useRouter().locale]
  return (
    <div className={styles.container}>
      <h3>
        {tr['blog-title']}
      </h3>
      <Row>
        {posts.map((item:any) =>
          <Col key={item.id} lg={8} className={styles.card}>
            <Link href={`post/${item.id}`}>
            <img src={item._embedded['wp:featuredmedia'][0].source_url} />
            </Link>
          </Col>
        )}
      </Row>

    </div>
  )

}