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
##### 对象深拷贝 
```js
// 有 undefined、function、symbol 会被忽略
var syb = Symbol('obj');
var person = {
   name :'tino',
   say: function(){
      console.log('hi');
   },
   ok: syb,
   un: undefined
}
var copy = JSON.parse(JSON.stringify(persion));
// copy
// {name: "tino"}
```

##### 对象深拷贝
```js
// 深度拷贝
function deepCopy(obj){
	var result=Array.isArray(obj)?[]:{};
	for(var key in obj){
	    if(obj.hasOwnProperty(key)){
	       if(typeof obj[key] ==='object' && obj[key]!==null){
	           result[key]=deepCopy(obj[key]); // 递归复制
	       }else{
	          result[key]=obj[key]
	       }
	    }
    }
	return result;
}

```

##### 判断是否为回文

```js
function runWords(param){
   // 判断是否为回文
   if(!Oject.prototype.toString.call(param)){
     return false;
   }
   return param.split("").reverse().join("")===param;
}
```

##### 简单mvvvm
```js
const data={};
const input =document.getElementById("input");
const span=document.getElementById("span");
Object.defineProperty(data,'text',{
   set(value){
       input.value=value;
       span.innerText=value;
   }
   get(){
     
   }
})
```
##### 冒泡排序
```js
function sortBubbling(arr){
    // 判断是否为数组
    if(!Array.isArray(arr)){
        return arr;
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                // 大小交换 es6 最新写法
                [arr[i],arr[j]]=[arr[j],arr[i]];
            }

        }
    }
    return arr;
}

```

##### 快速排序
```js
function fastSort(arr){
    // 不是数组 或者 数组小于等于1
    if(!Array.isArray(arr) || arr.length<=1){
        return arr;
    }
    // 基准值
    let mid=Math.floor(arr.length/2);
    let midValue=arr.splice(mid,1)[0];
    let rightArray=[];
    let leftArray=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>midValue){
            rightArray.push(arr[i]); // 将值放到 右边
        }else{
            leftArray.push(arr[i]);   // 将值放到 左边
        }

    }
    return [...fastSort(leftArray),midValue,...fastSort(rightArray)]; // 数组合并
}

```
#####  `all`：布尔全等判断	
```js
const all=(arr,fn)=> arr.every(fn);
all([4, 2, 3], x => x > 1); // true
```

##### `allEqual`：检查数组各项相等
```js
const allEqual=arr=>arr.every(val=>val===arr[0]);
```
##### 生成具体树形结构的对象
```js
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));

const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]
```
#### 数组打平 
```js
function flatArray(arr){
    let result=[];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flatArray(item));
        }else{
            result.push(item)
        }
    }
    return result;
}

```

##### 插入排序
```js
function insertSort(arr){
    if(Array.isArray(arr)){
        for(let index=1;index<arr.length;index++){
            let preIndex = index - 1;
            let currentValue=arr[index];
    
            while(currentValue<arr[preIndex]){
                arr[preIndex + 1] = arr[preIndex];
                preIndex--;
            }
            arr[preIndex + 1] = currentValue;
    
        }
    }
}

```

	
		
		











