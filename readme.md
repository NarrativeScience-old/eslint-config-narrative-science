# Narrative Science ESLint Base

This package extends the [Airbnb Lint Package](https://github.com/airbnb/javascript)

## Use

This has been built primary for the internal use at Narrative Science. Make sure
it has been installed in your `package.json` file, and then create an `.eslintrc`
file that contains the following: 

```json
{
   "parser": "babel-eslint",
   "env": {
     "browser": true,
     "jquery": true,
     "node": true
   },
   "extends": "narrative-science",
   "ecmaFeatures": {
     "experimentalObjectRestSpread": true
   },
   "plugins": [
     "babel",
     "react"
   ],
 }
```

## Dependencies

This package requires that you have 
