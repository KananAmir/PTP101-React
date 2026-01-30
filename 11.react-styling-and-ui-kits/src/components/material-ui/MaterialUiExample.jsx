import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

const MaterialUiExample = () => {

    const [bool, setBool] = useState(false);

    const handleClick = () => {
        setBool(!bool);
    }

    return (
        <>
            <Button onClick={handleClick} variant="outlined" size="large">Click Me</Button>

            {bool && <Alert variant="filled" severity="success">
                This is a filled success Alert.
            </Alert>}
        </>
    )
}


export default MaterialUiExample