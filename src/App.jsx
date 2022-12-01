import { HashRouter, Route, Routes } from "react-router-dom";
import { BlogPage } from "./Components/BlogPage";
import { HomePage } from "./Components/HomePage";
import { Menu } from "./Components/Menu";
import { NotFoundPage } from "./Components/NotFoundPage";
import { Post } from "./Components/Post";
import { ProfilePage } from "./Components/ProfilePage";
function App() {


  return (
  <>
  <HashRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/blog/:id" element={<Post/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </HashRouter>
  </>
  );
}

export default App;
