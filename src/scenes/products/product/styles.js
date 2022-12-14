import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
    },
    media: {
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        justifyContent: 'space-between',
    },
}));