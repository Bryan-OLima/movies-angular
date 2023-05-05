# Movie Angular

## 
## Configurando

Para a aplicação poder funcionar corretamente, você vai precisar: 
 <ul>
    <li>Back-end rodando (você encontra o repositório referente ao back-end clicando aqui)</li>
    <li>Configurar a API key do TMDB (https://www.themoviedb.org/documentation/api)</li>
    <li>Configurar a chave dentro da aplicação Angular. Você deverá: 
      <ul>
       <li>Criar uma arquivo na pasta .config (caso ela não exista, deverá criar a pasta também), chamado: config.env.ts. Dentro desse arquivo, será necessário inserir sua api key gerada no TMDB da seguinte forma: 
       export const API_KEY="SUA_API_KEY_AQUI" ![image](https://user-images.githubusercontent.com/85527991/236359188-a64e1c39-255b-474d-ac5c-640dc7447db9.png)
       </li>
      </ul>
    </li>
 </ul>



## libs 

[Dotenv](https://www.npmjs.com/package/dotenv)
[Angular Material (para alerts)](https://material.angular.io/)

## apis
[The Movie DB](https://developers.themoviedb.org/3/getting-started/introduction)