import Button from '@material-ui/core/Button';
import styles from './openPDFButton.module.scss';




const OpenPDFButton = (props) => {
    const { pdfFile, ...rest } = props;

    const onClick = () => { window.open(pdfFile, "myWindow"); };

    return (
        <Button
            size='large'
            variant="contained"
            onClick={onClick}
        >
            Ouvrir
        </Button >
    );
};

export default OpenPDFButton;

