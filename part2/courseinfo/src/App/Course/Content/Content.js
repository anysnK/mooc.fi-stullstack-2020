import React from 'react'
import Part from './Part';
import Total from './Total';

const Content = ({ course }) => {

    console.log('course: ', course)

    let parts = course.parts.map((part) => <Part key={part.name} part={part}>  </Part>)

    return (
        <div id="Content">
            <table>
                <tbody>
                    {parts}
                </tbody>
            </table>
            <p>---------</p>
            <div>
                <Total course={course} />
            </div>
        </div>
    )
}

export default Content