
import { makeStyles } from '@material-ui/core/styles';

export const themeObj: any = {
    palette: {
        primary: {
            dark: '#303f9f',
            light: '#7986cb',
            main: '#3f51b5',
        },
        type: 'dark',
    },
};

export const useStyles = makeStyles((theme) => {
    return {
        main: {
            marginTop: theme.spacing(8),

            width: '100%',
        },
        paper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        bottmLink: {
            color: 'white',
            textDecoration: 'none'
        }
    };
});