try `ng serve` performance with and without `loader` setting.

Compare:
`ng serve -c=development` (no `loader`)
vs
`ng serve -c=development-slow` (with `"loader": {".webp": "file"}`)

![img.png](img.png)
