import {CssBaseline} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies/Movies";
import Actors from "./Actors/Actors";
import NotFound from "./NotFound/NotFound";
import NavBar from "./NavBar/NavBar";
import { Movie } from "@mui/icons-material";
import Profile from "./Profile/Profile";

const App = () => {
    return (
      <div>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <main>
            <div>
              <Routes>
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/" element={<Movies />} />
                <Route path="/actors/:id" element={<Actors />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/profile/:id" element={<Profile/>}/>
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </div>
    );
}

export default App;
