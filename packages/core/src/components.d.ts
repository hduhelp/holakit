/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HolaAssetsCdn {}
  interface HolaAssetsLocal {}
  interface HolaBadge {}
  interface HolaBase {}
  interface HolaButton {
    /**
    * When you need this to be a link, specify this as a url.
    */
    'href': string;
    /**
    * Add this if you want this acts like a form submit.
    */
    'submit': boolean;
    /**
    * The type of button when this element acts as `<button>`.
    */
    'type': string;
  }
  interface HolaCard {}
  interface HolaColumns {}
  interface HolaContainer {}
  interface HolaFooter {}
  interface HolaHero {}
  interface HolaInput {
    /**
    * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
    */
    'accept'?: string;
    /**
    * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
    */
    'autocapitalize': string;
    /**
    * Indicates whether the value of the control can be automatically completed by the browser.
    */
    'autocomplete': 'on' | 'off';
    /**
    * Whether auto correction should be enabled when the user is entering/editing the text value.
    */
    'autocorrect': 'on' | 'off';
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus': boolean;
    /**
    * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
    */
    'clearInput': boolean;
    /**
    * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
    */
    'clearOnEdit'?: boolean;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled': boolean;
    /**
    * A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.
    */
    'inputmode'?: string;
    /**
    * The maximum value, which must not be less than its minimum (min attribute) value.
    */
    'max'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
    */
    'maxlength'?: number;
    /**
    * The minimum value, which must not be greater than its maximum (max attribute) value.
    */
    'min'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
    */
    'minlength'?: number;
    /**
    * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string | undefined;
    /**
    * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'pattern'?: string;
    /**
    * Instructional text that shows before the input has a value.
    */
    'placeholder'?: string | null;
    /**
    * If `true`, the user cannot modify the value.
    */
    'readonly': boolean;
    /**
    * If `true`, the user must fill in a value before submitting a form.
    */
    'required': boolean;
    /**
    * Sets focus on the specified `hola-input`. Use this method instead of the global `input.focus()`.
    */
    'setFocus': () => Promise<void>;
    /**
    * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'size'?: number;
    /**
    * If `true`, the element will have its spelling and grammar checked.
    */
    'spellcheck': boolean;
    /**
    * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
    */
    'step'?: string;
    /**
    * The type of control to display. The default type is text.
    */
    'type': | 'date'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'time';
    /**
    * The value of the input.
    */
    'value'?: string | null;
  }
  interface HolaVmenu {}
}

declare global {


  interface HTMLHolaAssetsCdnElement extends Components.HolaAssetsCdn, HTMLStencilElement {}
  var HTMLHolaAssetsCdnElement: {
    prototype: HTMLHolaAssetsCdnElement;
    new (): HTMLHolaAssetsCdnElement;
  };

  interface HTMLHolaAssetsLocalElement extends Components.HolaAssetsLocal, HTMLStencilElement {}
  var HTMLHolaAssetsLocalElement: {
    prototype: HTMLHolaAssetsLocalElement;
    new (): HTMLHolaAssetsLocalElement;
  };

  interface HTMLHolaBadgeElement extends Components.HolaBadge, HTMLStencilElement {}
  var HTMLHolaBadgeElement: {
    prototype: HTMLHolaBadgeElement;
    new (): HTMLHolaBadgeElement;
  };

  interface HTMLHolaBaseElement extends Components.HolaBase, HTMLStencilElement {}
  var HTMLHolaBaseElement: {
    prototype: HTMLHolaBaseElement;
    new (): HTMLHolaBaseElement;
  };

  interface HTMLHolaButtonElement extends Components.HolaButton, HTMLStencilElement {}
  var HTMLHolaButtonElement: {
    prototype: HTMLHolaButtonElement;
    new (): HTMLHolaButtonElement;
  };

  interface HTMLHolaCardElement extends Components.HolaCard, HTMLStencilElement {}
  var HTMLHolaCardElement: {
    prototype: HTMLHolaCardElement;
    new (): HTMLHolaCardElement;
  };

  interface HTMLHolaColumnsElement extends Components.HolaColumns, HTMLStencilElement {}
  var HTMLHolaColumnsElement: {
    prototype: HTMLHolaColumnsElement;
    new (): HTMLHolaColumnsElement;
  };

  interface HTMLHolaContainerElement extends Components.HolaContainer, HTMLStencilElement {}
  var HTMLHolaContainerElement: {
    prototype: HTMLHolaContainerElement;
    new (): HTMLHolaContainerElement;
  };

  interface HTMLHolaFooterElement extends Components.HolaFooter, HTMLStencilElement {}
  var HTMLHolaFooterElement: {
    prototype: HTMLHolaFooterElement;
    new (): HTMLHolaFooterElement;
  };

  interface HTMLHolaHeroElement extends Components.HolaHero, HTMLStencilElement {}
  var HTMLHolaHeroElement: {
    prototype: HTMLHolaHeroElement;
    new (): HTMLHolaHeroElement;
  };

  interface HTMLHolaInputElement extends Components.HolaInput, HTMLStencilElement {}
  var HTMLHolaInputElement: {
    prototype: HTMLHolaInputElement;
    new (): HTMLHolaInputElement;
  };

  interface HTMLHolaVmenuElement extends Components.HolaVmenu, HTMLStencilElement {}
  var HTMLHolaVmenuElement: {
    prototype: HTMLHolaVmenuElement;
    new (): HTMLHolaVmenuElement;
  };
  interface HTMLElementTagNameMap {
    'hola-assets-cdn': HTMLHolaAssetsCdnElement;
    'hola-assets-local': HTMLHolaAssetsLocalElement;
    'hola-badge': HTMLHolaBadgeElement;
    'hola-base': HTMLHolaBaseElement;
    'hola-button': HTMLHolaButtonElement;
    'hola-card': HTMLHolaCardElement;
    'hola-columns': HTMLHolaColumnsElement;
    'hola-container': HTMLHolaContainerElement;
    'hola-footer': HTMLHolaFooterElement;
    'hola-hero': HTMLHolaHeroElement;
    'hola-input': HTMLHolaInputElement;
    'hola-vmenu': HTMLHolaVmenuElement;
  }
}

declare namespace LocalJSX {
  interface HolaAssetsCdn {}
  interface HolaAssetsLocal {}
  interface HolaBadge {}
  interface HolaBase {}
  interface HolaButton {
    /**
    * When you need this to be a link, specify this as a url.
    */
    'href'?: string;
    /**
    * Add this if you want this acts like a form submit.
    */
    'submit'?: boolean;
    /**
    * The type of button when this element acts as `<button>`.
    */
    'type'?: string;
  }
  interface HolaCard {}
  interface HolaColumns {}
  interface HolaContainer {}
  interface HolaFooter {}
  interface HolaHero {}
  interface HolaInput {
    /**
    * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
    */
    'accept'?: string;
    /**
    * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
    */
    'autocapitalize'?: string;
    /**
    * Indicates whether the value of the control can be automatically completed by the browser.
    */
    'autocomplete'?: 'on' | 'off';
    /**
    * Whether auto correction should be enabled when the user is entering/editing the text value.
    */
    'autocorrect'?: 'on' | 'off';
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus'?: boolean;
    /**
    * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
    */
    'clearInput'?: boolean;
    /**
    * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
    */
    'clearOnEdit'?: boolean;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled'?: boolean;
    /**
    * A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.
    */
    'inputmode'?: string;
    /**
    * The maximum value, which must not be less than its minimum (min attribute) value.
    */
    'max'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
    */
    'maxlength'?: number;
    /**
    * The minimum value, which must not be greater than its maximum (max attribute) value.
    */
    'min'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
    */
    'minlength'?: number;
    /**
    * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string | undefined;
    /**
    * Emitted when the input loses focus.
    */
    'onHolaBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the value has changed.
    */
    'onHolaChange'?: (event: CustomEvent<{ value: string }>) => void;
    /**
    * Emitted when the input has focus.
    */
    'onHolaFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when a keyboard input ocurred.
    */
    'onHolaInput'?: (event: CustomEvent<KeyboardEvent>) => void;
    /**
    * Emitted when the input has been created.
    */
    'onHolaInputDidLoad'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the input has been removed.
    */
    'onHolaInputDidUnload'?: (event: CustomEvent<void>) => void;
    /**
    * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'pattern'?: string;
    /**
    * Instructional text that shows before the input has a value.
    */
    'placeholder'?: string | null;
    /**
    * If `true`, the user cannot modify the value.
    */
    'readonly'?: boolean;
    /**
    * If `true`, the user must fill in a value before submitting a form.
    */
    'required'?: boolean;
    /**
    * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'size'?: number;
    /**
    * If `true`, the element will have its spelling and grammar checked.
    */
    'spellcheck'?: boolean;
    /**
    * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
    */
    'step'?: string;
    /**
    * The type of control to display. The default type is text.
    */
    'type'?: | 'date'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'time';
    /**
    * The value of the input.
    */
    'value'?: string | null;
  }
  interface HolaVmenu {}

  interface IntrinsicElements {
    'hola-assets-cdn': HolaAssetsCdn;
    'hola-assets-local': HolaAssetsLocal;
    'hola-badge': HolaBadge;
    'hola-base': HolaBase;
    'hola-button': HolaButton;
    'hola-card': HolaCard;
    'hola-columns': HolaColumns;
    'hola-container': HolaContainer;
    'hola-footer': HolaFooter;
    'hola-hero': HolaHero;
    'hola-input': HolaInput;
    'hola-vmenu': HolaVmenu;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hola-assets-cdn': LocalJSX.HolaAssetsCdn & JSXBase.HTMLAttributes<HTMLHolaAssetsCdnElement>;
      'hola-assets-local': LocalJSX.HolaAssetsLocal & JSXBase.HTMLAttributes<HTMLHolaAssetsLocalElement>;
      'hola-badge': LocalJSX.HolaBadge & JSXBase.HTMLAttributes<HTMLHolaBadgeElement>;
      'hola-base': LocalJSX.HolaBase & JSXBase.HTMLAttributes<HTMLHolaBaseElement>;
      'hola-button': LocalJSX.HolaButton & JSXBase.HTMLAttributes<HTMLHolaButtonElement>;
      'hola-card': LocalJSX.HolaCard & JSXBase.HTMLAttributes<HTMLHolaCardElement>;
      'hola-columns': LocalJSX.HolaColumns & JSXBase.HTMLAttributes<HTMLHolaColumnsElement>;
      'hola-container': LocalJSX.HolaContainer & JSXBase.HTMLAttributes<HTMLHolaContainerElement>;
      'hola-footer': LocalJSX.HolaFooter & JSXBase.HTMLAttributes<HTMLHolaFooterElement>;
      'hola-hero': LocalJSX.HolaHero & JSXBase.HTMLAttributes<HTMLHolaHeroElement>;
      'hola-input': LocalJSX.HolaInput & JSXBase.HTMLAttributes<HTMLHolaInputElement>;
      'hola-vmenu': LocalJSX.HolaVmenu & JSXBase.HTMLAttributes<HTMLHolaVmenuElement>;
    }
  }
}


