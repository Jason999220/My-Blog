## CSS Learning

#### has 應用

###### 在 hover 時，被觸碰的會呈現淺藍色字體並出現下底線，反之呈現灰色字體

```
a:hover {
  color: #2ecce0;
  border-bottom: 2px solid #2ecce0;
}

nav:has(a:hover) a:not(:hover) {
  color: #8f8f8f;
}
```

#### border transparent

###### 以下兩者功能相同

###### 前者有個不可見的透明底線，保留邊框位置

###### 後者有個不可見的有色底線，保留邊框位置

```
  border-bottom: 2px solid transparent;

  border-bottom: 2px solid rgba(255, 255, 255, 0);
```
