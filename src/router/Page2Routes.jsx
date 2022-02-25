import { P2 } from "../P2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <P2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
