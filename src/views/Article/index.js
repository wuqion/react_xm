import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ArticleList extends Component {
    render() {
        return (
            <div>
                Article
                <Link to="/admin/article/edit/33">详情</Link>
            </div>
        )
    }
}
