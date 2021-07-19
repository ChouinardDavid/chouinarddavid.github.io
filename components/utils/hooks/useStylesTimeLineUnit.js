import { makeStyles } from '@material-ui/core/styles';




const useStylesTimeLineUnit = makeStyles(theme => ({
    root: {
        backgroundColor: 'red',
        color: props => props.color,
    },
}));



export default useStylesTimeLineUnit