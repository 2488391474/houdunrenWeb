interface IData {
  expire: number;
  [key: string]: any;
}

export default {
  get(key: string) {
    const item = localStorage.getItem(key);
    if(item){
        const data = JSON.parse(item) as IData;
        if(data.expire < new Date().getTime()){
            localStorage.removeItem(key);
            return null
        }
        return data
    }

    return null
  },
  set(key: string, data: IData) {
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  },
};
