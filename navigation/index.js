import React from "react";

import { AuthenticatedUserProvider } from "../auth/AuthenticatedUserProvider";
import RootNavigator from "./RootNavigator";

/**
 * Wrap all providers here
 */

const Routes = () => {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
};

export default Routes;
