function AcessosCriarMeuLink(link_gerado) {
  var api = 'https://criarmeulink.com.br/a/' + encodeURIComponent(link_gerado);
  fetch(api)
    .then(function(response){
      response.json()
        .then(function(acessos){
          console.log(acessos); // Exibe no console as informações de acessos para o link especificado
      });
    })
    .catch(function(err){
     // Um erro ocorreu
     });
}

AcessosCriarMeuLink('LINK_GERADO_PELO_CRIARMEULINK');
