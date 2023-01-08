import { About } from "./pages/about";
import { HomePage } from "./pages/home-page";
import { Projects } from "./pages/projects";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/projects",
    component: <Projects />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/",
    component: <HomePage />,
  }
];

export default routes;
