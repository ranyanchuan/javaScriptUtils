# javaScriptUtils
javascript常用工具方法

##### 数组对象深度copy
```js
export function arrayObjctClone(array) {
  return array.map((item) => {
    return { ...item };
  });
}
```
##### 对象深克隆
```js
// 数组深克隆 值不能为 null
export function deepClone(data) {
  return JSON.parse(JSON.stringify(data));
}
```

##### 生成唯一字符串
```js
/**
 * 生成唯一字符串
 */
export function uuid() {
    const s = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i += 1) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = '-';
    s[13] = '-';
    s[18] = '-';
    s[23] = '-';
    return s.join('');
}
```
##### 将一个对象中值包含数字字符转换成number
```js
/**
 * 将一个对象中值包含数字字符转换成number
 *
 */
export function objStringToNumber(obj) {
    // 判断值是否为数组
    if (Array.isArray(obj)) {
        obj.map((childItem, index) => {
            if (typeof childItem === 'object') {
                objStringToNumber(childItem);
            } else {
                if ((typeof childItem !== 'number')) {
                    const temp = Number(childItem);
                    if (temp) obj[index] = temp;
                }
            }
        })
    } else {
        for (const item in obj) {
            if (typeof obj[item] === 'object') {
                objStringToNumber(obj[item]);
            } else {
                if (obj[item] && (typeof obj[item] !== 'number')) {
                    const temp = Number(obj[item]);
                    if (temp) obj[item] = temp;
                }
            }
        }
    }
    return obj;
}
```
##### 生成10位以内的验证码
```js
/**
 * 生成10位以内的验证码
 * @param num
 */
export function numValidate(num) {
    return Math.random().toString().slice(-num);
}
```
##### 生成中文随机字符串
```js
/**
 * 生成随机字符串
 * len 要生成字符串的长度
 */
export function randomText(len) {
    let i = 0;
    let str = '';
    const base = 20000;
    const range = 1000;
    while (i < len) {
        i++;
        const lower = parseInt(Math.random() * range);
        str += String.fromCharCode(base + lower);
    }
    return str;
};

```
##### 浏览器全屏
```js
export function fullScreen() {
    let el = document.documentElement;
    let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if(typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    };
}
```
##### 浏览器退出全屏
```js
export function exitScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
    else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    if(typeof cfs != "undefined" && cfs) {
        cfs.call(el);
    }
}

```

##### 数组对象排序
```js
// 对象排序
// array.sort(compareObj(field, sortOrder))

export function compareObj(propertyName, sortOrder) {
  return function (object1, object2) {
    const value1 = object1[propertyName] || '';
    const value2 = object2[propertyName] || '';
    if (value2 < value1) {
      return sortOrder === 'asc' ? -1 : 1;
    } else if (value2 > value1) {
      return sortOrder === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  };
}

```

##### 生成指定区间内的整数
```js
export function getBetweenNum(starNum, endNum, num = 1) {
  const result = [];
  for (let i = starNum; i <= endNum; i += num) {
    result.push(i);
  }
  return result;
}
```


