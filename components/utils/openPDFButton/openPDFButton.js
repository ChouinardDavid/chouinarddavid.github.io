import Button from '@material-ui/core/Button';
import styles from './openPDFButton.module.scss';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.success.main
    },
}));


const OpenPDFButton = (props) => {
    const { pdfFile, ...rest } = props;
    const classes = useStyles();

    const onClick = () => { window.open(pdfFile); };
    // className={classes.root}
    return (
        <Button
            size='large'
            variant="contained"
            onClick={onClick}
            className={classes.root}
        >
            Ouvrir
        </Button >
    );
};

export default OpenPDFButton;

