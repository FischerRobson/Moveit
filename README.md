Esse projeto foi desenvolvido com [Next.js](https://nextjs.org/) através do [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Iniciando o Projeto

Primeiro faça o download do repositório:
```bash
git clone https://github.com/FischerRobson/Moveit
```
Em seguida, instale as dependencias do projeto:
```bash
npm install
# ou
yarn add
```
Inicie o projeto:
```bash
npm run dev
# ou
yarn dev
```


Abra seu navegador e acesse: [http://localhost:3000](http://localhost:3000) para conseguir visualizar o projeto.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Sobre o Projeto

O MoveIt consiste em uma aplicação desenvolvida duranta a NLW#4 da Rocketseat com o propósito de ajudar com tarefas de estudo ou trabalho, possuindo um contador de 25 minutos (que pode ser tranquilamente alterado):
![image](https://user-images.githubusercontent.com/61335036/110365718-21d95000-8024-11eb-8dae-f4481a7580f1.png)

Ao chegar em 0, será proposto um desafio ao usuário:
![image](https://user-images.githubusercontent.com/61335036/110365861-4c2b0d80-8024-11eb-8274-d36abef3e367.png)
Vale destacar, que caso o usuário tenha autorizado as notificações, quando o cronometro zerar, será emitida uma notificação informando sobre o desafio, e um som será disparado para alertar o usuário, caso ele esteja com outra tela aberta.

Sempre que o usuário atingir o próximo nivel, sera exibido um modal:
![image](https://user-images.githubusercontent.com/61335036/110366196-bb086680-8024-11eb-9181-2ff7851d6d70.png)

As informações do nível do usuário, experience atual e desafios completos ficam armazenadas nos cookies do navegar.

## Aprenda Mais

Para aprender mais sobre o Next.JS utilize os links das documentações

- [Next.js Documentation](https://nextjs.org/docs) - aprenda sobre o Next.JS e sua API.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.JS.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy na Vercel

O projeto está disponivel na [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criadora do Next.js:

https://moveit-eta-fawn.vercel.app/
