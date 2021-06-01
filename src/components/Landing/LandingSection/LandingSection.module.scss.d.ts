declare namespace LandingSectionModuleScssNamespace {
  export interface ILandingSectionModuleScss {
    content: string;
    content_image: string;
    el: string;
    heading: string;
    image: string;
    item: string;
    list: string;
  }
}

declare const LandingSectionModuleScssModule: LandingSectionModuleScssNamespace.ILandingSectionModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LandingSectionModuleScssNamespace.ILandingSectionModuleScss;
};

export = LandingSectionModuleScssModule;
