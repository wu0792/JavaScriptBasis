# prototype
> the basis of oo, change the default prototype chain can inherit the methods and fields from the constructors of prototype chain.

> the meaning of prototype chain is sharing inner members with other instance, calling the member of an instance will search the specific member recursively along the chain from sub to super.

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

> but the above inherit mode have something bad:
> for the sake of all Sub instances have the same prototype, so all fields defined in Super can be shared in Sub:

``` javascript
let Super = function(){
    this.colors = ['red', 'blue']
}

let Sub = function(){
}

Sub.prototype = new Super()

let sub1 = new Sub()
sub1.colors.push('white')
console.log(`sub1.colors.join(','):${sub1.colors.join(',')}`)       //red,blue,white

let sub2 = new Sub()
console.log(`sub2.colors.join(','):${sub2.colors.join(',')}`)
//red,blue,white
```

> so all the Sub instance may have the same colors values for they share the same reference derived from exactly one Super instance. To avoid the annoying problem, we may use the following [borrow the constructor] method:

``` javascript
let NewSub = function(){
    Super.call(this)
}

let newSub1 = new NewSub()
newSub1.colors.push('yellow')
console.log(`newSub1.colors.join(','):${newSub1.colors.join(',')}`)     //red,blue,yellow

let newSub2 = new NewSub()
console.log(`newSub2.colors.join(','):${newSub2.colors.join(',')}`)     //red,blue
```
> as you can see, this trick can make different Sub instance has their own fields derived from Sub, but this trick abandon the advantage of prototype chain, for the Sub doesn't have any matter with Super on method sharing etc.

> the following method combines the advantage of prototyp chain and field owned by sub instance:

``` javascript
let NewSub2 = function(){
    Super.call(this)
}

NewSub2.prototype = new Super()
NewSub2.prototype.constructor = NewSub2     //keep the sub type reference in super type

```

> and now all the instance of NewSub2 will share the methods defined in Super.prototype