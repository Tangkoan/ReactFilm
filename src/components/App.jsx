import {CssBaseline} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies/Movies";
import Actors from "./Actors/Actors";
import NotFound from "./NotFound/NotFound";

const App = () => {
    return (
      <div>
        <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Movies/>}/>
                    <Route path="/actors/:id" element={<Actors/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
      </div>
    );
}

export default App;
