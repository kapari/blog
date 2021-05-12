declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    header__brand: string;
    header__logo: string;
    header__name: string;
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
