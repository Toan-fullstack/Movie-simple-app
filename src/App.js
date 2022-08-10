import React from "react";
import { Fragment } from "react";
import PhotoListEx from "./components/gallery/PhotoListEx";

import HeaderMainEx from "./components/HeaderMainEx";
import { AuthProvider } from "./contexts/auth-contextEx";
import { GalleryProviderEx } from "./contexts/gallery-contextEx";

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProviderEx>
          <HeaderMainEx></HeaderMainEx>
          <PhotoListEx></PhotoListEx>
        </GalleryProviderEx>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
