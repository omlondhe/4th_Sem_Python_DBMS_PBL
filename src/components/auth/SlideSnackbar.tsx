import { Alert, Slide, SlideProps } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

interface TransitionsSnackbarTypes {
  showSnackbar: boolean;
  setShowSnackbar: Function;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

export default function TransitionsSnackbar({
  showSnackbar,
  setShowSnackbar,
  message,
  severity,
}: TransitionsSnackbarTypes) {
  return (
    <Snackbar
      autoHideDuration={4000}
      open={showSnackbar}
      onClose={() => setShowSnackbar(false)}
      TransitionComponent={SlideTransition}
      key={Date.now()}
    >
      <Alert
        onClose={() => setShowSnackbar(false)}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
