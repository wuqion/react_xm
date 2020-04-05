import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ArticleEdit extends Component {
    render() {
        return (
            <div>
                Edit
                <Link to="/admin/article">首页</Link>
            </div>
        )
    }
}
