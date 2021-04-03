import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
	query (
		$slug: String!
	){
		markdownRemark (
			fields: {
				slug: {
					eq: $slug
				}
			}
		){
			frontmatter {
				title
				date
			}
			html
		}
		contentfulBlogPost(slug: {eq: $slug}){
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				raw
			}
		}
	}
`
// raw -> json
export default function Blog(props) {
	if(props.data.markdownRemark){
		return (
			<Layout>
				<Head title={props.data.markdownRemark.frontmatter.title}/>
				<h1>{props.data.markdownRemark.frontmatter.title}</h1>
				<p>{props.data.markdownRemark.frontmatter.date}</p>
				<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
			</Layout>
		)
	}
	else{
		return (
			<Layout>
				<h1>{props.data.contentfulBlogPost.title}</h1>
				<p>{props.data.contentfulBlogPost.publishedDate}</p>
				{documentToReactComponents(props.data.contentfulBlogPost.body.raw)}
			</Layout>
		)
	}

}