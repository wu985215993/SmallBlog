import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import 'antd/dist/antd.css'
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const history = useHistory()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* 框架自带Link */}
          {/*  <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
             Docusaurus Tutorial - 5min ⏱️
          </Link> */}
          <Button
            type="primary"
            shape="round"
            onClick={() => history.push('/docs/intro')}
          >
            Docusaurus Tutorial - 5min ⏱️
          </Button>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="吴昌蔚的博客 blog.galactus.top"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
