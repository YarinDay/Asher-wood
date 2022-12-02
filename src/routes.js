import { About } from "./pages/about";
import { HomePage } from "./pages/home-page";
import { Projects } from "./pages/projects";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/projects",
    component: <Projects />,
  },
  {
    path: "/about",
    component: <About />,
  }
];

export default routes;
