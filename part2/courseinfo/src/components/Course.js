const Part = (props) => {
    return (
        <div>
            <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    // mapping through all parts:
    const courseParts = props.parts.map(part => {
        return (
            <Part key={part.id} parts={part}/>
        )
    })

    return (
        <div>
            {courseParts}
        </div>
    )
}

const Total = (props) => {
    // Counting the sum of all exercises:
    const sum = props.parts.reduce((accumulator, currentVal) => accumulator + currentVal.exercises, 0)

    return (
        <strong>Total of {sum} exercises</strong>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <h2>{course.name}</h2>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course