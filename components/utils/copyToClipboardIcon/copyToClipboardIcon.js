import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const CopyToClipboardIcon = (props) => {
    const { textToCopy } = props;
    const textinitial = "Copier l'adresse courriel";
    const textclick = 'Adresse copiée';
    const [toolTipsText, setToolTipsText] = useState(textinitial);

    const onClick = () => {
        globalThis.navigator.clipboard.writeText(textToCopy);
        setToolTipsText(textclick);
    };

    const onClose = () => {
        setToolTipsText(textinitial);
    };

    return (
        <Tooltip title={toolTipsText} onClose={onClose} placement='top' arrow>
            <IconButton onClick={onClick} size='small'>
                <span className='fa-stack'>
                    <FontAwesomeIcon
                        icon={faSquare}
                        color='black'
                        className='fa-stack-2x'
                    />
                    <FontAwesomeIcon
                        icon={faCopy}
                        color='black'
                        className='fa-stack-1x'
                    />
                </span>
            </IconButton>
        </Tooltip>
    );
};

export default CopyToClipboardIcon;
