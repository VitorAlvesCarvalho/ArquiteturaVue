# Proposta de arquitetura para projeto Vue.js

## Arquitetura
Foi utilizado a arquitetura de módulo, nesse projeto foi criado os módulos home, common e authentication. Cada modulo contém suas pastas e arquivos especificos de forma isolada, no módulo contém pastas de mocks, components, helpes, routes, service, store, types, views e qual mais for necessária.
<br>Existe o módulo common que é onde fica o código que é compartilhado por mais de um módulo

## Forma de trabalhar com rotas
Cada modulo terá seu arquivo de rotas, onde será adicionado as rotas especificas desse modulo.

![image](https://user-images.githubusercontent.com/113551661/200426574-19f9b091-fe42-4e8a-a3a0-c1606beb3272.png)

Na pasta src terá um arquivo de rotas, onde será feito a configuração e agrupamento das rotas de todos os modulos.

![image](https://user-images.githubusercontent.com/113551661/200426778-e5b5beb4-254e-42c2-879f-8276a8e356e3.png)


## Forma de trabalhar com Integração com api

Na pasta src terá uma pasta service com um arquivo de configuração do axios, esse arquivo será a base para os services dos modulos, nele tera uma classe onde será feito a instancia do axios e a criação dos metodos base de integração com api.

![image](https://user-images.githubusercontent.com/113551661/200432199-fef4d85f-e234-4336-a7a5-fe2d18b1a9e3.png)

Em cada modulo terá uma pasta service e um arquivo para criação dos metodos de integração com api, será uma classe extendendo a classe do arquivo citado a cima, e utilizando os metodos dessa classe extendida. É possível alterar a rota base pelo constructor da classe caso necessário.

![image](https://user-images.githubusercontent.com/113551661/200432989-0c753e7f-06bd-4558-be86-ab7bee6c1b77.png)

No arquivo .vue será usado da seguinte forma: 
- Fazer o import e a instancia da clsse 

![image](https://user-images.githubusercontent.com/113551661/200433178-d4641e5e-bb86-4de3-892a-5ac99ff84b73.png)

- Usar o metodo que deseja

![image](https://user-images.githubusercontent.com/113551661/200433327-8588cfc2-571b-4126-a0ed-1b306d0eb348.png)

## Forma de trabalhar com VueX

Em cada modulo terá um arquivo de store, onde será implementado o VueX do respectivo modulo, podendo ter seu state, getters, mutations e actions. Nesse exemplo foi utilizado decorators atráves da lib "vuex-module-decorators"

![image](https://user-images.githubusercontent.com/113551661/200434279-af0985d1-5d8e-4010-9620-f15d998ff242.png)

Na pasta src terá um arquivo de store, onde será feito a configuração do Vuex e agrupamento dos stores dos modulos. 

![image](https://user-images.githubusercontent.com/113551661/200434597-a37ff094-5cd7-4895-bbc2-f9faaa874a0e.png)

No arquivo .vue será usado da seguinte forma: 
- Acessar o modulo atráves do namespace

![image](https://user-images.githubusercontent.com/113551661/200435318-71d230ae-6ffd-408c-8485-743954ad12ec.png)

- Acessar a const criada, passando o nome do elemento que deseja executar

![image](https://user-images.githubusercontent.com/113551661/200435499-d105ba9f-8089-49f9-bbe7-a29bb6489360.png)
