// storage封装
const STORAGE_KEY = 'mimall'
export default {
    // 存储值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    // 获取某一模块下面的属性user下面的userName
    getItem(key, module_name) {
        // mimall	{"user":{"userName":"jack","age":30,"sex":1}}
        if (module_name) {
            let val = this.getItem(module_name) //user是模块名称  val拿到的是一个对象
            if (val) return val[key]
        }
        return this.getStorage()[key] //获取到user信息
    },
    // 获取我们整个浏览器里的缓存信息
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            if(!val[module_name]) return;
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}