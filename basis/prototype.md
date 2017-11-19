# prototype
> the basis of oo, change the default prototype chain can inherit the methods and fields from the constructors of prototype chain.

``` javascript
let Super = function(){
    this.superValue = false
}

Super.prototype.getSuperValue = function(){
    return this.superValue
}

let Sub = function(){
    this.subValue = true
}

Sub.prototype = new Super()

Sub.prototype.getSubValue = function(){
    return this.subValue
}

let subInstance = new Sub()
console.log(`subInstance.getSuperValue():${subInstance.getSuperValue()}`)         //false
console.log(`subInstance.getSubValue():${subInstance.getSubValue()}`)           //true

//here i can override the default getSuperValue in Super:
Sub.prototype.getSuperValue = function(){
    return true
}

//now the getSuperValueOf the instance will return true
console.log(`subInstance.getSuperValue():${subInstance.getSuperValue()}`)         //true
console.log(`subInstance.getSubValue():${subInstance.getSubValue()}`)           //true
```

> the meaning of prototype chain is sharing inner members with other instance, calling the member of an instance will search the specific member recursively along the chain from sub to super.