/// <reference types="jquery" />
interface PrintConf {
  title?: null | string
  doctype?: '<!doctype html>'
  globalStyles?: boolean
  mediaPrint?: boolean
  stylesheet: null | string
  noPrintSelector: JQuery.Selector
  iframe: boolean | JQuery.Selector
  manuallyCopyFormValues?: boolean
  append?: JQuery.Selector
  prepend?: JQuery.Selector
}
interface JQuery<TElement extends Node = HTMLElement> extends Iterable<TElement> {
  print (conf: PrintConf): this
  exportToExcel (name: string): this
  viewer <T> (conf: T): this
}
