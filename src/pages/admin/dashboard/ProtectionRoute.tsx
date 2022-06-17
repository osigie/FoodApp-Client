import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

type Props = {
  children: ReactNode;
};

const ProtectionRoute = (props: Props) => {
  const { admin } = useAppSelector((store) => store.admin);
  return <>{admin ? props.children : <Navigate to="/" />}</>;
};

export default ProtectionRoute;
