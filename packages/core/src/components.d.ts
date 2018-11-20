/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface HolaBase {}
  interface HolaBaseAttributes extends StencilHTMLAttributes {}

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
  interface HolaButtonAttributes extends StencilHTMLAttributes {
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
  interface HolaCardAttributes extends StencilHTMLAttributes {}

  interface HolaColumns {}
  interface HolaColumnsAttributes extends StencilHTMLAttributes {}

  interface HolaContainer {}
  interface HolaContainerAttributes extends StencilHTMLAttributes {}

  interface HolaFooter {}
  interface HolaFooterAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'HolaBase': Components.HolaBase;
    'HolaButton': Components.HolaButton;
    'HolaCard': Components.HolaCard;
    'HolaColumns': Components.HolaColumns;
    'HolaContainer': Components.HolaContainer;
    'HolaFooter': Components.HolaFooter;
  }

  interface StencilIntrinsicElements {
    'hola-base': Components.HolaBaseAttributes;
    'hola-button': Components.HolaButtonAttributes;
    'hola-card': Components.HolaCardAttributes;
    'hola-columns': Components.HolaColumnsAttributes;
    'hola-container': Components.HolaContainerAttributes;
    'hola-footer': Components.HolaFooterAttributes;
  }


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

  interface HTMLElementTagNameMap {
    'hola-base': HTMLHolaBaseElement
    'hola-button': HTMLHolaButtonElement
    'hola-card': HTMLHolaCardElement
    'hola-columns': HTMLHolaColumnsElement
    'hola-container': HTMLHolaContainerElement
    'hola-footer': HTMLHolaFooterElement
  }

  interface ElementTagNameMap {
    'hola-base': HTMLHolaBaseElement;
    'hola-button': HTMLHolaButtonElement;
    'hola-card': HTMLHolaCardElement;
    'hola-columns': HTMLHolaColumnsElement;
    'hola-container': HTMLHolaContainerElement;
    'hola-footer': HTMLHolaFooterElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
