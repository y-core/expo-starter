type TPaths = {
  auth: {
    route: string;
    signin: string;
    signup: string;
    signout: string;
  };
};

export type ISharedConfig = {
  api: {
    paths: TPaths;
  };
};
