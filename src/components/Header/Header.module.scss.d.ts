declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    brandLink: string;
    content: string;
    el: string;
    logo: string;
    name: string;
    navItem: string;
    navLink: string;
    navList: string;
  }
}

declare const HeaderModuleScssModule: HeaderModuleScssNamespace.IHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderModuleScssNamespace.IHeaderModuleScss;
};

export = HeaderModuleScssModule;
