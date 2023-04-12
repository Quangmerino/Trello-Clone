export const mapOrder = (array:object[], order:any, key:any) => {
    array.sort((a:any, b:any) => order.indexOf(a[key] - order.indexOf(b[key])))
    return array;
}