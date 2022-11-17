import {useState} from "react";
import {generatePlant} from "./PlantGenerator"
import Button from '@mui/material/Button';
import {Box, Typography} from "@mui/material";


function App() {
    const [text, setText] = useState(generatePlant());

    function handleClick() {
        setText(generatePlant());
    }

    return (
        <div style={{textAlign: 'center'}}>
            <Box pt={10} m={0}>
                <Typography variant="h3" gutterBottom fontFamily={'Alef'}>
                    {text}
                </Typography>
                <Box pt={15}>
                    <Button onClick={handleClick} variant="contained" size="large" style={{
                        width: 150,
                        position: 'absolute',
                        top: 250,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        left: 0,
                        right: 0,
                    }}>צור חדש</Button>
                </Box>
            </Box>
        </div>
    );
}


export default App;
