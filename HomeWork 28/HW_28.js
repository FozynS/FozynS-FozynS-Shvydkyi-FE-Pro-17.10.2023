const autocomplete = (array, element) => {
    const result = array.filter((item) => item.includes(element));
    
    return result;
}

autocomplete(['aaa', 'abc', 'abb', 'cca'], 'a') // ['aaa', 'abc', 'abb', 'cca'];
autocomplete(['aaa', 'abc', 'abb', 'cca'], 'aa') // ['aaa'];
autocomplete(['aaa', 'abc', 'abb', 'cca'], 'ab') // ['abc', 'abb'];
autocomplete(['aaa', 'abc', 'bbb', 'cca'], 'b') // ['abc', 'bbb'];
autocomplete(['aaa', 'abc', 'bbb', 'cca'], 'b') // ['abc', 'bbb'];