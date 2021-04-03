import React from 'react'

import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

export default function NotFound(){
	return (
		<Layout>
			<Head title="404"/>
			<h1>Page not found</h1>
			<p><Link to="/">Go to home page</Link></p>
		</Layout>
	)
}