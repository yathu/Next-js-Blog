---
layout: blog
title: tes new post
date: 2023-02-18T11:45:46.045Z
---
t﻿est post code wffwfwfw

```javascript
function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInput(){
  console.log('Saving data');
}
const processChange = debounce(() => saveInput());
```