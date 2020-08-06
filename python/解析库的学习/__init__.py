from lxml import html
etree =html.etree

# text = '''
# <div>
# <ul>
#    <li class="item-0"><a href="link1.html">first item</a></li>
#    <li class="item-1"><a href="link2.html">second item</a></li>
#    <li class="item-inctive"><a href="link3.html">third item</a></li>
#    <li class="item-1"><a href="link4.html">forth item</a></li>
#    <li class="item-0"><a href="link5.html">fifth item</a></li>
# </ul>
# </div>
# '''
text = '''
<div>
<ul>
   <li class="item a" name="item"><a href="link1.html">first item</a></li>
</ul>
</div>
'''


html = etree.HTML(text)
result= html.xpath('//li[contains(@class,"item") and @name="item"]/a/text()')
print(result)
