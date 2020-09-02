import requests
import time
import socket
import socks
# {'ip': '115.221.241.182', 'port': '9999'}

socks.set_default_proxy(socks.SOCKS5,'47.52.231.140',8080)
socket.socket = socks.socksocket

res = requests.get('http://httpbin.org/get')
print(res.text)