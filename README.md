# bun_17react

 Version: 0.9.2

 Author  :

 date    : 2024/08/30

 update : 2024/09/01 

***

Bun + React + Express


***
### build

* build, dev-start, watch

```
bun run build
bun run dev

#watch-mode
bun run watch
```

***
* vercel.json

```
{
    "version": 2,
    "public": true,
    "builds": [
      {
        "src": "public/**/*",
        "use": "@vercel/static"
      },        
      {
        "src": "dist/index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      { "handle": "filesystem" },
      {
        "src": "/.*",
        "dest": "/dist/index.js"
      }
    ]
}
```
***
### blog


***
# License

* MIT

***

