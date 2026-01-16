import ChildC from "./ChildC"

const ChildB = ({ title }) => {
    return (
        <div style={{
            backgroundColor: 'lightblue',
            padding: '10px'
        }}>
            ChildB
            <ChildC title={title} />
        </div>
    )
}

export default ChildB