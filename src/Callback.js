import React, { useEffect } from "react";
import { UserManager } from "oidc-client";
import oidcConfig from "./oidc_config";

const userManager = new UserManager(oidcConfig);

const Callback = () => {
  useEffect(() => {
    userManager
      .signinRedirectCallback()
      .then((user) => {
        console.log("User signed in:", user);
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Signing you in...</h2>
    </div>
  );
};

export default Callback;
