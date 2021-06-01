declare namespace LandingHeroModuleScssNamespace {
  export interface ILandingHeroModuleScss {
    content: string;
    el: string;
    title: string;
  }
}

declare const LandingHeroModuleScssModule: LandingHeroModuleScssNamespace.ILandingHeroModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LandingHeroModuleScssNamespace.ILandingHeroModuleScss;
};

export = LandingHeroModuleScssModule;
