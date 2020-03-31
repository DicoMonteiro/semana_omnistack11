## Comando para criar um projeto já no formato React - Web

 - npx create-react-app <nome do projeto>


 ## Comando para executar o projeto criado anteriormente, pois ele já vem configurado na sua criação dentro do package.json

 - npm start


## Deletado varios arquivos do projeto só deixando na pasta SRC os arquivos APP e INDEX, limpando toda a referencia com os demais arquivos deletados

## Deletando varios arquivos do projeto só deixando na pasta public os arquivos INDEX e FAVICON.ICO, limpando toda a referencia com os demais arquivos deletados


## Criando COMPONENTES para ser reutilizado em vários momentos da aplicação

Arquivo Header criado pra otimizar todo conteudo dentro dele, e ser importado em outros arquivos para serem utilizados


## Para configurar no autocomplete as informacoes de HTML que no projeto React não vem configurado, no VSCode

- Digigar o : Command + Shift + P

- Escrever : setting

- Selecionar a opção: OPEN setting (JSON)

- Adicionar no arquivo: "emmet.syntaxProfiles": { "javascript": "jsx" },
                        "emmet.includeLanguages": { "javascript": "javascriptreact" }


## Instalando a biblioteca REACT-ICONS que vai conter vários icones a serem usados, de pacotes de icons disponiveis na internet

npm install react-icons


## Instalando o pacote ou biblioteca de rotas

npm install react-router-dom


## Instalando o pacote ou biblioteca Cliente HTTP para realizar as chamadas do nosso back-end

npm install axios


 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
