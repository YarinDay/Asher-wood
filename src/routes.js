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
  }
];

export default routes;
