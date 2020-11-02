# Grille perso

Une grille faite avec [Node-sass](https://www.npmjs.com/package/node-sass) dans le but d'apprendre un peu
mieux Sass et d'avoir de quoi se passer des frameworks css.  

Le dossier public contient la grille en min. Sa reste expérimentale, ne pas s'attendre à quelques choses de parfait.

## Basée sur [Bootstrap](https://getbootstrap.com/)

J'ai toujours utilisée Bootstrap mais simplement sa grille, pas le superflux, faire une grille étais donc une solution. Il y as pas ou peu de selecteur prioritaire telle que !important. Utilisée box-sizing:border-box en config général sinon border ne seront pas retirée des calculs.  
Comme sa :

```css
  * {
    box-sizing:border-box;
  }
```

Nombre de colonnes modifiables, goutières et step (pas) selon les besoins.

### Les media

|PointBreaks| min-width|max width|
|:--:|:----:|:----:|
|xs  |320px | 575px|
|sm  | 576px|767px |
|md  | 768px|991px |
|lg  | 992px|1199px |
|xl  |1200px| all|

### Les selecteurs
Considérée $ comme un PointBreaks et i pour l'itération == aux nombres de colonnes.  
*i d'offset est aux max de 8 et non 12 par exemple pour évité les débordements.  
k à une itération entre 1 à 5 pour **text-$-k** et une itération entre 0 à 5 pour les **marges**.

|Selecteurs           | Description (simplifiez)|
|:-------------------:|:------------------------:|
|d-$-none            |display:none             |
|d-$-block           |display:block            |
|d-$-inline          |display:inline           |
|d-$-inline-block    |display:inline-block     |
|$-center            |text-align:center;       |
|col-$-i             |longueur des colonnes    |
|offset-$-i*         |écard de colonnes        |
|text-$-k            |agrandir le texte        |
|m-$-k               |marge externe général    |
|my-$-k              |marge externe vertical   |
|mx-$-k              |marge externe horizontal |
|mt-$-k              |marge externe top        |
|mb-$-k              |marge externe bottom     |
|ml-$-k              |marge externe gauche     |
|mr-$-k              |marge externe droite     |
|p-$-k               |marge interne général    |
|py-$-k              |marge interne vertical   |
|px-$-k              |marge interne horizontal |
|pt-$-k              |marge interne top        |
|pb-$-k              |marge interne bottom     |
|pl-$-k              |marge interne gauche     |
|pr-$-k              |marge interne droite     |

Èvidement les **marges**, **colonnes**, **offset** et les **display** peuvent être de façon général sans breakpoints.

### Selecteurs sans breakpoints
|Selecteurs           | Description (simplifiez)|
|:-------------------:|:-----------------------:|
|fluid               |width:100%;height:auto   |         
|container            |comme son nom l'indique  |         
|row                  |pour placée vos colonnes |



__________________________________________________________
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
