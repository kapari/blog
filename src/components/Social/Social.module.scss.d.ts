declare namespace SocialModuleScssNamespace {
  export interface ISocialModuleScss {
    hidden: string;
    link: string;
    list: string;
  }
}

declare const SocialModuleScssModule: SocialModuleScssNamespace.ISocialModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SocialModuleScssNamespace.ISocialModuleScss;
};

export = SocialModuleScssModule;
