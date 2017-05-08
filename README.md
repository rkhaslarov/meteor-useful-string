rkhaslarov:useful-string
=================

Javascript implementation of MD5 function for MeteorJS.

# Usage

string.capitalize - returns a copy of the string with the first character in uppercase and all subsequent characters in lowercase.

```js
"hello".capitalize() // "Hello"
```

string.camelize - returns a copy of the string in camel case notation, also you can change delimiter, default is '_'.

```js
"hello_hello".camelize() // "HelloHello"
"hello-hello".camelize('-') // "HelloHello"
```

string.replaceAll - returns string with all matches is replaced.

```js
"hello-hello".replaceAll('h', 'b') // "bello-bello"
```

string.contains - returns true if current string contains substring otherwise returns false.

```js
"hello".contains('lo') // true
```

string.quote - returns a copy of string which surrounded with some char, default is '"'.

```js
"hello".quote() // ""hello""
```

string.unquote - this method does the opposite of string.quote.

```js
"'hello'".unquote("'") // "hello"
```

string.chars - returns array of chars of current string.

```js
"hello".chars() // ["h", "e", "l", "l", "o"]
```

string.lines - returns array of lines of current string.

```js
"hello\nhello".lines() // ["hello", "hello"]
```

string.reverse - returns reverse string.

```js
"hello".reverse() // "olleh"
```

string.base64Encode - returns base64 encoded string.

```js
"hello".base64Encode() // "aGVsbG8="
```

string.base64Decode - decode base64 encoded string.

```js
"aGVsbG8=".base64Encode() // "hello"
```

string.md5 - returns md5 hash of string. 

```js
"Hello".md5() // "8b1a9953c4611296a827abf8c47804d7"
```

string.stripTags - returns a copy of string without html tags.

```js
"<p>hello</p>".stripTags() // "hello"
```

string.swapCase - returns a copy of string where each chars case is swaped.

```js
"Hello".swapCase() // "hELLO"
```

string.isAlpha - checks if characters of string is alphabetic. 

```js
"Hello".isAlpha() // true
```

string.isAlphaNumeric - checks if characters of string is alphabetic or numeric. 

```js
"Hello".isAlphaNumeric() // true
```

string.isNumeric - checks if characters of string is numeric. 

```js
"Hello".isNumeric() // false
```

string.isUpper - checks if characters of string is in upper case. 

```js
"Hello".isUpper() // false
```

string.isLower - checks if characters of string is in lower case. 

```js
"hello".isLower() // true
```

string.isBlank - checks if string is blank. 

```js
" ".isBlank() // true
```

string.format - printf realization in js (added in 1.0.1). 

```js
"Hello {0}".format("friend") // Hello friend
```

string.toBoolean - converts string to boolean (added in 1.0.2). 

```js
"false".toBoolean() // false
```