import { P1 } from "../P1";
import { P1DetailA } from "../P1DetailA";
import { P1DetailB } from "../P1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <P1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <P1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <P1DetailB />
  }
];
