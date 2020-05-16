import React from 'react'
import Header from './Header/Header';
import Content from './Content/Content'

const Course = ({ course }) => {

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>
    )
}

export default Course