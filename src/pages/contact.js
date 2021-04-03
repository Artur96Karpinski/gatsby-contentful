import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

export default function ContactPage(){
	return (
		<Layout>
			<Head title="Contact"/>
			<h1>Contact</h1>
			<p>The best way to reach me is via <a href="http://localhost:8000/">arturkarpinski@gmail.com</a></p>
		</Layout>
	)
}