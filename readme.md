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
![menu](https://github.com/tuliusalves/Descobrir-Numero/blob/main/printScreen/Menu_Principal.PNG?raw=true)
![acerto](https://github.com/tuliusalves/Descobrir-Numero/blob/main/printScreen/Acerto.PNG?raw=true)

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
![erro_maior](https://github.com/tuliusalves/Descobrir-Numero/blob/main/printScreen/Erro_maior.PNG?raw=true)
![erro_menor](https://github.com/tuliusalves/Descobrir-Numero/blob/main/printScreen/Erro_menor.PNG?raw=true)
![fim_de_jogo](https://github.com/tuliusalves/Descobrir-Numero/blob/main/printScreen/Fim_De_Jogo.PNG?raw=true)

### Responsividade
![responsividade_menu](https://github.com/tuliusalves/Descobrir-Numero/blob/main/printScreen/Responsividade_menu.PNG?raw=true) 
<br>
![responsividade_acerto](https://github.com/tuliusalves/Descobrir-Numero/blob/main/printScreen/Responsividade_acerto.PNG?raw=true)
<br>
![responsividade_erro](https://github.com/tuliusalves/Descobrir-Numero/blob/main/printScreen/Responsividade_erro.PNG?raw=true)

## APIs utilizadas
* ResponsiveVoice
https://responsivevoice.org/

## Observações
* O sistema não permite que o mesmo número sorteado volte à 
aparecer.
* Uma vez que "Novo Jogo" sortear todos os números de 1 à 10,
será preciso recarregar à página para que um novo ciclo se 
repita.
