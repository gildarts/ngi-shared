# WebGadget

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.

## 使用方式
1. 手動將 `js/gadget.js` 放到自己專案中的 `assets/js/gadget.js`。
1. 參考以下範例修改 `index.html`。
```html
<html>
<head>
  <script src="assets/js/gadget.js"></script>
  <script>
    init({
      application: "dev.sh_d",
      oAuth: {
        clientID: 'client id',
        clientSecret: 'client secret string',
        account: '',
        password: ''
      },
      paramValues: {
      }
    });
  </script>
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

## Build

Run `ng build web-gadget` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build web-gadget`, go to the dist folder `cd dist/web-gadget` and run `npm publish`.
