import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function NavBar(): React.ReactElement {
    const [value, setValue] = useState(0)
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            position: 'fixed',
            width: "100%"
        },
    });
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="ABOUT" />
                <Tab label="PORTFOLIO" />
                <Tab label="CONTACT" />
            </Tabs>
        </Paper>
    )
}

export default NavBar