# typeof
> ### return the the type of operator

|    Type        |    Result                    |
|:---------------|:----------------------------:|
| Undefined      | 'undefined                   |
| Null           | 'object'                     |
| Boolean        | 'boolean'                    |
| Number         | 'number'                     |
| String         | 'string'                     |
| Symbol         | 'symbol'                     |
| Function       | 'function'                   |
| _Host Object_ like window frames document etc | 
|                |           Implement By Host  |        
| _Other Object_ | 'object                      |
        

<b style='color:orange;'>Temporal Dead Zone errors</b>

``` javascript
typeof theVariable; let theVariable;
```

will throw an Exception:  _Uncaught ReferenceError:_ newLetVariable23 is not defined


but the following code works fine:
``` javascript
let newLetVariable23a;typeof newLetVariable23a;
"undefined"
```

# instanceof
> ### test whether the prototype property of constructor appears anywhere in the prototype chain of an object

used in custom type and nested type in host enviroment like Array, Date, RegExp, Map

``` javascript
/hello/ instanceof RegExp        //true
[1, 2] instanceof Array         //true
```

> pay attention that primitive literal notation is different from corresponding Object type:
``` javascript
'literal notation' instanceof String            //false
new String('object type') instanceof String     //true
```

# isPrototypeOf
> ### test the prototype is prototype of the instance

``` javascript
RegExp.prototype.isPrototypeOf(/hello/)     //true
Object.prototype.isPrototypeOf(/hello/)     //true
```