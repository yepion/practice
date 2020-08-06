import json


# json_str = '[{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}]'
#
# print(type(json_str))
# data = json.loads(json_str)
# print(type(data))
# print(data)
# print(data[0]['a'])
# print(data[0].get('g',25))

with open('data.json','r',encoding='utf-8') as f:
    data = json.load(f)
    print(data)
    json.dumps()