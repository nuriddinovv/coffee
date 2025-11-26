import { Link } from "react-router";
import type { FC } from "react";

export const ErrorPage: FC = () => {
  return (
    <div>
      <Link to={"/"}>Error Page</Link>
    </div>
  );
};
