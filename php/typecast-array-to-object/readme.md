# typecast-array-to-object

It converts the array to an instance of [`stdClass`](http://php.net/manual/en/reserved.classes.php).

Handy because it is a shorthand for making an stdClass and assigning properties to it.

```php
// without typecasting
function x() {
    $x = new StdClass;
    $x->porn = 'tube';

    return $x;
}

// with typecasting
function x() {
    return (object) [
        'porn' => 'tube'   
    ];
}
```
