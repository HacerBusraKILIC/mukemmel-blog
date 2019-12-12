import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>BlogPost</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>


    <div className="hero">
      <h1 className="hero-title">Hacer Büşra KILIÇ</h1>

      <div className="hero-social-links">
        <Link href="https://twitter.com/hacerbusrakilic">
          <a className="hero-social-link">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/hacerbusrakilic/">
          <a className="hero-social-link">LinedIn</a>
        </Link>
      </div>
    </div>

    <div className="blog">
      <h2 className="blog-title">{post.title}

      </h2>
      <div className="blog-text">{ post.detail }</div>
      <div className="blog-date">{ post.date }</div>
    </div>


    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .hero-social-link:first-child {
        margin-right: 40px;
      }

      .hero-title {
        font-size: 48px;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }
      
      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
)

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://mukemmelmyblog.herokuapp.com/api/post/${query.postId}`)
  //const res = await fetch(`http://localhost:3000/api/post/${query.postId}`)
  const json = await res.json()
  return { post: json.post }
}

export default BlogPost
