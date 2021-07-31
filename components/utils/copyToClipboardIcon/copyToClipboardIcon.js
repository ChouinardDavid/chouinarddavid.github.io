
import { useState } from 'react';
import styles from './copyToClipboardIcon.module.scss';
import { faCopy, faStack } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@material-ui/core';
import useRemoveCssClass from '../hooks/useRemoveCssClass';
import Tooltip from '@material-ui/core/Tooltip';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Icon from '@material-ui/core/Icon';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.success.main
//     },
// }));




const CopyToClipboardIcon = (props) => {
    const { textToCopy, ...rest } = props;
    const textinitial = "Copier l'adresse courriel";
    const textclick = "Adresse copiée";
    const [toolTipsText, setToolTipsText] = useState(textinitial);
    // const classes = useStyles();

    // const removeMuiCssClass = useRemoveCssClass("MuiIconButton-root:hover");

    const onClick = () => {
        navigator.clipboard.writeText(textToCopy);
        setToolTipsText(textclick);
    };

    const onClose = () => { setToolTipsText(textinitial); }

    return (
        <Tooltip title={toolTipsText} onClose={onClose} placement="top" arrow>
            <IconButton onClick={onClick} size="small">
                {/* <span className={`${styles.iconContent} fa-stack`}> */}
                <span className="fa-stack">
                    <FontAwesomeIcon icon={faSquare} color="black" className="fa-stack-2x" />
                    <FontAwesomeIcon icon={faCopy} color="black" className="fa-stack-1x" />
                </span>
            </IconButton>
        </Tooltip>
    );
};

export default CopyToClipboardIcon;