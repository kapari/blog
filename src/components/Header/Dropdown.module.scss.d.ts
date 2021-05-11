declare namespace DropdownModuleScssNamespace {
  export interface IDropdownModuleScss {
    dropdown: string;
    dropdown__arrow: string;
    dropdown__items: string;
    dropdown__link: string;
    dropdown__toggle: string;
    isExpanded: string;
    isVisible: string;
  }
}

declare const DropdownModuleScssModule: DropdownModuleScssNamespace.IDropdownModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DropdownModuleScssNamespace.IDropdownModuleScss;
};

export = DropdownModuleScssModule;
