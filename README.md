# API do CriarMeuLink
API para monitoramento de acessos para os links criados pelo [CriarMeuLink.com.br](https://criarmeulink.com.br).

## Como usar a API?
Uma requisição HTTP GET pode ser feita através da seguinte URL: `https://criarmeulink.com.br/a/LINK_GERADO`
Onde *LINK_GERADO* é o link criado pelo CriarMeuLink (na forma codificada).
Exemplo: 

    https://criarmeulink.com.br/a/http%3A%2F%2Fcriarmeulink.com.br%2Fu%2F1594736628065
Também funciona se o link for encurtado pelo is.gd:

    https://criarmeulink.com.br/a/https%3A%2F%2Fis.gd%2Fabcxyz

## Resposta *(Response)*
O servidor irá retornar um *array* em JSON com informações sobre os acessos dos links.
Exemplo:

    [{"linkName":"1596210008251","time":"1596210625940","device":"mob","country":"BR","region":"Rio Grande do Sul"},
    {"linkName":"1596210008251","time":"1596225211069","device":"mob","country":"FR","region":"Champagne-Ardenne"},
    {"linkName":"1596210008251","time":"1596228075025","device":"mob","country":"BR","region":"Rio Grande do Sul"},
    {"linkName":"1596210008251","time":"1596237749068","device":"mob","country":"BR","region":"Rio Grande do Sul"},
    {"linkName":"1596210008251","time":"1596288759478","device":"mob","country":"BR","region":"Rio Grande do Sul"}]

Cada item do *array* significa um acesso e contém as seguintes propriedades:
|propriedade|descrição|
|--|--|
|linkName|O nome do link gerado.|
|time|O *Date.now()* (data e hora) em que o link foi acessado.|
|device|Tipo do dispositivo: *mob* ou *desk* -- Mobile ou desktop|
|country|País em que o link foi acessado|
|region|Estado/Região em que o link foi acessado|

## Regras de uso
Ao usar a API, você deve

 - Dar um intervalo de no mínimo 10 segundos entre cada invocação (caso precise de um intervalo menor, [entre em contato](http://criarmeulink.com.br/u/1594736628065) conosco explicando o motivo)
 - Deixar claro para o usuário que os acessos dos links podem ser verificados no site oficial do CriarMeuLink
 - Não usá-la para qualquer atividade ilegal ou que prejudique alguém
 - Estar ciente que podemos restringir ou bloquear um endereço de IP do acesso à API por qualquer motivo a qualquer momento, sem nenhuma notificação ao aviso prévio
 - Deixar um link para o [CriarMeuLink.com.br](https://criarmeulink.com.br/) no software que usa a API
 
No mais, você pode usar a API como quiser.

# Sobre o [CriarMeuLink](https://criarmeulink.com.br/)
Veja: [CriarMeuLink - Sobre](https://criarmeulink.com.br/sobre.html)

## O que exatamente é o CriarMeuLink?
O CriarMeuLink é uma ferramenta gratuita para a criação de links de contato. Use o CriarMeuLink em seu negócio e obtenha mais resultado (já que o contato pode ser feito com apenas um clique).

## Que links posso criar?
O CriarMeuLink abrange a criação de vários tipos de links. São eles:

-   [WhatsApp](https://criarmeulink.com.br/link-whatsapp.html "Clique aqui e veja como criar um link de WhatsApp"): Crie um link direto para seu WhatsApp, permitindo iniciar uma conversa com o número configurado em apenas um clique
-   [Telegram](https://criarmeulink.com.br/link-telegram.html "Clique aqui e veja como criar um link de Telegram"): Crie um link de contato para seu Telegram, permitindo começar um chat com o usuário configurado em apenas um clique
-   [Telefone](https://criarmeulink.com.br/link-telefone.html "Clique aqui e veja como criar um link de Telefone"): Crie um link de telefone que ao ser clicado inicia uma ligação com o número informado na criação do link
-   [E-mail](https://criarmeulink.com.br/link-email.html "Clique aqui e veja como criar um link de E-mail"): Crie um link para seu endereço de e-mail, permitindo quem clicar no link mandar um e-mail para você em apenas um clique
-   [SMS](https://criarmeulink.com.br/link-sms.html "Clique aqui e veja como criar um link de WhatsApp"): O link de SMS, ao ser clicado, abre o aplicativo de SMS padrão em uma conversa com o número configurado
