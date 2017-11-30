# your own Promise
I will introduce the simplified Promise achievement.

## version 1
``` javascript
function Promise(fn){
    let deferreds = []

    this.then = (onFullfied) => {
        deferreds.push(onFullfied)
    }

    let resolve = (value) => {
        deferreds.forEach((deferred) => {
            deferred(value)
        })
    }

    fn(resolve)
}
```

_above is the simplest Promise in the world, which only includes the then and resolve method_

and now we may use the first Promise to do the basic things:
## demo 1.0
``` javascript
let p1 = new Promise(resolve => {
    //trigger when retrieve the result
    resolve(result)
})

p1.then(value => identifyTheValue(value))
p1.then(value => renderToUI(value))
```

now the Promise can trigger multiple then when resolve invoked

_but sometimes Promise may need chain invoke when defining 'then' :_

## version 2
``` javascript
function Promise(fn){
    let deferreds = []

    this.then = (onFullfied) => {
        deferreds.push(onFullfied)

        return this
    }

    let resolve = (value) => {
        deferreds.forEach((deferred) => {
            deferred(value)
        })
    }

    fn(resolve)
}
```

## demo 2.0
``` javascript
let p1 = new Promise(resolve => {
    //trigger when retrieve the result
    resolve(result)
})

p1.then(value => identifyTheValue(value))
  .then(value => renderToUI(value))
```

slightly better, right? but our Promise has a critical problem:
if the 'resolve' method is invoked before the invoke of 'then' method, the inner deferred methods defined by 'then' will never be invoked. that's because deferred methods are not reday yet when resolve is invoked:

## demo 2.1
``` javascript
let p1 = new Promise(resolve => {
    //if we immediately invoke the resolve
    resolve(result)
})

//below methods will not invoked
p1.then(value => identifyTheValue(value))
  .then(value => renderToUI(value))
```

and we may forece the deferred methods invoked after excuting the currently javascript loop:

## version 3
``` javascript
function Promise(fn){
    let deferreds = []

    this.then = (onFullfied) => {
        deferreds.push(onFullfied)

        return this
    }

    let resolve = (value) => {
        deferreds.forEach((deferred) => {
            setTimeout(() => { deferred(value) }, 0)
        })
    }

    fn(resolve)
}
```