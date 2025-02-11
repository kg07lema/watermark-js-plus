export type ContentTypeType = 'text' | 'image' | 'multi-line-text' | 'rich-text'

export type TextAlignType = 'center' | 'end' | 'left' | 'right' | 'start'

export type TextBaselineType = 'alphabetic' | 'hanging' | 'ideographic' | 'top' | 'bottom' | 'middle'

export type CreateWatermarkModeType = 'default' | 'blind'

export type DecodeBlindWatermarkModeType = 'canvas' | 'html' | 'svg'

export type TranslatePlacementType = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'right' | 'middle'

export interface WatermarkDom extends HTMLDivElement {
  __WATERMARK__?: string;
  __WATERMARK__INSTANCE__?: any;
}

export interface WatermarkOptions {
  width: number;
  height: number;
  rotate: number;
  translatePlacement: TranslatePlacementType;
  translateX?: number;
  translateY?: number;
  contentType: ContentTypeType;
  content: string;
  image?: string;
  imageWidth: number;
  imageHeight: number;
  richTextWidth?: number;
  richTextHeight?: number;
  lineHeight: number;
  zIndex: number;
  backgroundPosition: string;
  backgroundRepeat: string;
  fontSize: number;
  fontFamily: string;
  textAlign?: TextAlignType;
  textBaseline?: TextBaselineType;
  fontColor: string;
  globalAlpha: number;
  fontWeight: string;
  mode: CreateWatermarkModeType;
  mutationObserve: boolean;
  unique: boolean;
  parent: Element | string;
  onSuccess: Function;
  onBeforeDestroy: Function;
  onDestroyed: Function;
}

export interface DecodeBlindWatermarkOptions {
  url: string;
  fillColor: string;
  compositeOperation: string;
  mode: DecodeBlindWatermarkModeType;
  onSuccess: Function;
}

export interface CustomContentSVGType {
  element: Element,
  width: number,
  height: number
}
