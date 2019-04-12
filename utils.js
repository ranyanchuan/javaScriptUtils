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


/**
 /**
 * 将对象中的 日期字符串转换成日期对象
 * 使用instanceof检测date是否为Date类型，结果为true
 * 使用Date的getTime()方法，Invalid Date对象返回的是一个NaN，
 */
export function char2Date(obj) {
    // 判断值是否为数组
    if (obj && Array.isArray(obj)) {
        obj.map((childItem, index) => {
            if (typeof childItem === 'object') {
                char2Date(childItem);
            } else {
                if ((typeof childItem === 'string')) {
                    const date = new Date(childItem);
                    if (date instanceof Date && !isNaN(date.getTime())) {
                        obj[index] = date;
                    }

                }
            }
        })
    } else {
        for (const item in obj) {
            if (typeof obj[item] === 'object') {
                char2Date(obj[item]);
            } else {
                if (obj[item] && (typeof obj[item] === 'string')) {
                    const date = new Date(obj[item]);
                    if (date instanceof Date && !isNaN(date.getTime())) {
                        obj[item] = date;
                    }
                }
            }
        }
    }
    return obj;
}


/**
 * 生成10位以内的验证码
 * @param num
 */
export function numValidate(num) {
    return Math.random().toString().slice(-num);
}


/**
 * 数组对象去重
 * @param arr 对象数组,key对象唯一标识 类型为字符串
 */
export function arrayObjClear(arr, key) {
    let result = [];
    const obj = {};
    for (let i = 0; i < arr.length; i += 1) {
        if (!obj[arr[i][key]]) {
            result.push(arr[i]);
            obj[arr[i][key]] = true;
        }
    }
    return result;
}


/**
 * 解构 对象下是对象
 * @param arr 对象数组,key对象唯一标识 类型为字符串
 */
export function objDctValue(data) {
    const result = {}
    for (const key in data) {
        let value = "";
        if (data[key] && data[key].value) {
            value = data[key].value;
        }
        result[key] = value;
    }
    return result;
}
