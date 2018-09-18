# magecart-shim
An electron app to assess magecart impact

### checkout this repo
```git clone https://github.com/kempy007/magecart-shim.git```

### use browser developer tools to find card data form
* open your favourite browser hit F12, browse to target website to be evaluated, dig through code to find form data, make notes

### edit source files to reflect target
* edit line 7 of 'page-shim.html' and change src= to website to be evaluated.

* edit line 5 & 7 of 'js-shim.js' to the form id that is collecting card data.
* edit line 32 of 'js-shim.js' to to relevant jquery or vue.js library if required to prevent electron conflicts.
* optional: edit line 17 of 'js-shim.js' to an endpoint under your control with TLS.

### install electron dependencies
* cd to project directory.
```npm install``

### run app
```npm start```
* go through checkout process, validate data has been skimmed, if not debug and reiterate.

License is free as in beer
