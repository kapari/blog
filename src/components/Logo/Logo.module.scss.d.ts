declare namespace LogoModuleScssNamespace {
  export interface ILogoModuleScss {
    logo: string;
    logo__content: string;
    logo__path: string;
  }
}

declare const LogoModuleScssModule: LogoModuleScssNamespace.ILogoModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LogoModuleScssNamespace.ILogoModuleScss;
};

export = LogoModuleScssModule;
