import { createMuiTheme } from '@material-ui/core/styles';

const createMyMuiTheme = () =>
    createMuiTheme({
        overrides: {
            MuiButton: {
                contained: {
                    backgroundColor: '#4caf50',
                },
            },
        },
    });

export default createMyMuiTheme;
