import { makeStyles } from "@material-ui/core/styles";

const useMyStyle = makeStyles((theme) => ({
  root: (props) => ({
    width: 600,
    height: 750,
    background: props.bgColor,
    border: `15px solid ${
      props.primaryOrSecondary == "primary"
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    }`,
  }),
}));

export { useMyStyle };
