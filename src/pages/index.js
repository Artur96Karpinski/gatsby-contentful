import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function Home() {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello!</h1>
      <h2>I'm Artur, a full-stack developer living in Turza Wielka</h2>
      <p>Need a developer? <Link to="/contact">Contect me.</Link></p> 
    </Layout>
  )
}

