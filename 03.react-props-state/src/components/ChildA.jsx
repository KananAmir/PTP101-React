import ChildB from "./ChildB"

const ChildA = ({ title }) => {
    return (
        <div
            style={{
                backgroundColor: 'orange',
                padding: '10px'
            }}>
            ChildA
            <ChildB title={title} />
        </div>
    )
}

export default ChildA