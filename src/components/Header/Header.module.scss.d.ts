declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    brandLink: string;
    content: string;
    logo: string;
    name: string;
    nav__item: string;
    nav__link: string;
    nav__list: string;
  }
}

declare const HeaderModuleScssModule: HeaderModuleScssNamespace.IHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderModuleScssNamespace.IHeaderModuleScss;
};

export = HeaderModuleScssModule;
