import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function AboutPage(){
	return (
		<Layout>
			<Head title="About"/>
			<h1>About Me</h1>
			<p>I currently work full-time as full-stack developer in Billennium.</p>
			<p><Link to="/contact"> Want to work with me? Reach out.</Link></p>
		</Layout>
	)
}