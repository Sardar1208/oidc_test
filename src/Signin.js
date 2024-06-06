"use client";

import React, { useEffect } from "react";
import { UserManager, WebStorageStateStore } from "oidc-client";
import oidcConfig from "./oidc_config";

const userManager = new UserManager({
  ...oidcConfig,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});

const SignIn = () => {
  useEffect(() => {
    userManager
      .getUser()
      .then((user) => {
        console.log("user: ", user);
        if (!user) {
          userManager
            .signinRedirect({ redirect_uri: 'http://localhost:3000/callback' })
            .catch((err) => {
              console.error("Alert", err);
            });
        } else {
          console.log("User logged in:", user);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={() => userManager.signinRedirect()}>Sign In</button>
    </div>
  );
};

export default SignIn;
