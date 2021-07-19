import { createMuiTheme } from '@material-ui/core/styles';



const createMyMuiTheme = () => createMuiTheme({
    palette: {
        // type: "light",
        primary: {
            main: "#2399e8"
        },
        secondary: {
            main: "#e85d5d"
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: 'blue',
            }
        },
        MuiIconButton: {
            root: {
                color: '#e01f1f',
            }
        }
    }
});


export default createMyMuiTheme