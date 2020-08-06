module.exports = {
    type: 'topTab',
    searchRoute : $route('tag'),
    fetch () {
        let items = []
        let li = [
            '全部类型=-0-0-0-0-0-0-0-0-0-',
            '偷拍自拍=-4-0-0-0-0-0-0-0-0-',
            '制服诱惑=-5-0-0-0-0-0-0-0-0-',
            '青春少女=-6-0-0-0-0-0-0-0-0-',
            '成人动漫=-11-0-0-0-0-0-0-0-0-',
        ]

        li.map(data =>{
            data = data.split('=')
            items.push({
                title : data[0],
                route : $route('tag',{tag : data[1]})
            })
        })
        return items
    }
}