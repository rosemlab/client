export default function isString(value: any): boolean {
  return toString.call(value) === '[object String]'
}
