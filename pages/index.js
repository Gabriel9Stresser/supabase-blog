import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export function getStaticProps() {
  return {
    props: {
      posts: [],
    }
  }
}

export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <h1>Hello Word!</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}
