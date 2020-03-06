# SquareSizeCodepen

## Alterações realizadas

Para poder completar o desafio proposto, precisei realizar algumas alterações apenas no HTML do app cujo seria testado utilizando Cypress.

As motivações para tais mudanças se deram por alguns motivos externos ao meu controle. 
O site codepen.io não permite que o Cypress execute os testes. Provavelmente existe algum frame-busting no site, ou alguma política de segurança que insere um Captcha, impossibilitando a execução do teste.

Para poder seguir com o desafio, repliquei o código do app que está no codepen.io para minha máquina, e fiz algumas pequenas alterações APENAS NO HTML:
- envolvi o código com uma tag <html>
- criei um <head> e referenciei o css dentro dele
- coloquei os <script> dentro do body, depois da "<div>" para que sejam executados após a renderização do HTML
Estas foram as ÚNICAS alterações feitas. Não impactam no comportamento da aplicação e nem nos testes e no desafio proposto.
  
Portanto, subi o código da aplicação alterado, que está dentro da pasta App https://github.com/Thiago-Grespi/SquareSizeCodepen/tree/master/app

