import forEach from 'lodash/forEach'
import { OBSERVABLE_KEY } from './index'
import {
  NON_ENUMERABLE_DESCRIPTOR,
  PERMISSIVE_DESCRIPTOR,
} from './GenericPropertyDescriptor'
import defineProperty from './defineProperty'
import defineComputedProperty from './defineComputedProperty'
import observeProperty from './observeProperty'
import observeProperties from './observeProperties'
import Observable from './Observable'

const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
const nativeDefineProperty = Object.defineProperty

export type ObservablePropertyKey = string | number

export default class ObservableObject implements Object {
  [index: number]: any
  [key: string]: any

  private [OBSERVABLE_KEY]: Observable

  public constructor(object: object) {
    nativeDefineProperty(this, OBSERVABLE_KEY, {
      ...NON_ENUMERABLE_DESCRIPTOR,
      value: new Observable(this),
    })

    forEach(object, (value: any, property: string | number) => {
      const descriptor = getOwnPropertyDescriptor(object, property)

      if (null == descriptor || true === descriptor.configurable) {
        ObservableObject.defineProperty(
          this,
          property,
          null == descriptor ? { ...PERMISSIVE_DESCRIPTOR, value } : descriptor
        )
      } else {
        nativeDefineProperty(this, property, descriptor)
      }
    })
  }

  public static create(object: object): ObservableObject {
    return new ObservableObject(object)
  }

  public static defineProperty: Function = defineProperty

  public static defineComputedProperty: Function = defineComputedProperty

  public static observeProperty: Function = observeProperty

  public static observeProperties: Function = observeProperties
}
