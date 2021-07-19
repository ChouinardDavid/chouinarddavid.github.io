
import { faCopy, faStack } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const FancyIcon = React.forwardRef((props, ref) => {
    return (
        <span ref={ref} className="fa-stack">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
            <FontAwesomeIcon icon={faCopy} className="fa-stack-1x" />
        </span>
    );
});

export default FancyIcon;