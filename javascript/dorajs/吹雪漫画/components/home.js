module.exports = {
    type: 'topTab',
    searchRoute: $route('tag'),
    fetch () {
        let items = []
        let list_ = [
            '国产漫画-/manhua/guochan',
            '日本漫画-/manhua/riben',
            '欧美漫画-/manhua/oumei',
            '港台漫画-/manhua/gangtai',
            '韩国漫画-/manhua/hanguo',
            '杂志漫画-/manhua/zazhi',
        ]
        list_.map(item =>{
            item = item.split('-')
            items.push({
                title : item[0],
                style : 'list',
                route : $route('tag',{
                    tag : item[1]
                })
            })
        })
        return items
    }
}