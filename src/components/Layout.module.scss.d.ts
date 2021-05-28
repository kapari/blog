declare namespace LayoutModuleScssNamespace {
  export interface ILayoutModuleScss {
    el: string;
    main: string;
  }
}

declare const LayoutModuleScssModule: LayoutModuleScssNamespace.ILayoutModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LayoutModuleScssNamespace.ILayoutModuleScss;
};

export = LayoutModuleScssModule;
