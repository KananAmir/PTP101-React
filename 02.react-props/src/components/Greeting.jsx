
// const Greeting = (props) => {

//     console.log("props", props);

//     return (
//         <div style={{margin: '2rem 0'}}>
//             <p>Hello, {props.user}, {props.age} years old</p>
//         </div>
//     )
// }

// export default Greeting

// const Greeting = (props) => {

//    const {user, age} = props;

//     return (
//         <div style={{margin: '2rem 0'}}>
//             <p>Hello, {user}, {age} years old</p>
//         </div>
//     )
// }

// export default Greeting

const Greeting = ({ user, age }) => {

    return (
        <div style={{ margin: '2rem 0' }}>
            <p>Hello, {user}, {age} years old</p>
        </div>
    )
}

export default Greeting