import "./App.css";
import Header from "./Component/Header";
import Box from "@mui/material/Box";
import FormStepper from "./Component/FormStepper";
import RefreshRow from "./Component/RefreshRow";
import UIForm from "./Component/UIForm";
import Footer from "./Component/Footer";

function App() {
  return (
    <div style={{ padding: "18px" }}>
      <Header />
      <Box
        boxShadow={5}
        borderRadius={3}
        sx={{ mt: 1, pt: 2, pl: 1, pr: 1, pb: 6 }}
      >
        <FormStepper />
        <RefreshRow />
        <UIForm />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
