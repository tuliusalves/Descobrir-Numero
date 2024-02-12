# Jogo do Número secreto
<p>Neste jogo o usuário precisa descobrir um número que será sorteado</p>
<p>pelo sistema. Ao clicar no botão "chutar", o sistema exibe o resultado.</p>
<p>No jogo haverá um assistente de voz do broswer que irá auxiliar o </p>
<p>usuário</p>

## Ações do sistema
### Em caso de acerto
* O Usuário será parabenizado.
* Uma imagem que confimar o sucesso será exibida.
* É exibido informações sobre as vidas e tentativas feitas ao todo.
* O botão "chutar" será desabilitado. 
* O botão "Novo Jogo" será habilitado.
* Após o "Novo Jogo" ser acionado, o usuário recurerará todas
as vidas.

### Em caso de erro
* O usuário perde uma vida.
* Uma imagem que confirma o erro será exibida. 
* O usuário recebe dicas que o aproxime do número escolhido.
* Essas dicas informam se o número escolhido pelo usuário é 
maior ou menor do que o número sorteado.
* Quando a quantidade de vidas for igual a "zero", o botão "chutar"
será desabilitado.
* Quando a quantidade de vidas for igual a "zero", o botão "Novo 
Jogo" será habilitado.

## APIs utilizadas
* ResponsiveVoice
https://responsivevoice.org/
## Observações
* O sistema não permite que o mesmo número sorteado volte à 
aparecer.
* Uma vez que "Novo Jogo" sortear todos os números de 1 à 10,
será preciso recarregar à página para que um novo ciclo se 
repita.