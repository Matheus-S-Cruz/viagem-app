# Resumo da Aula 5

Durante a aula 5, o aplicativo de viagens da aula passada foi atualizada, antes sua função era apenas listar os 3 antigos destinos e adicionar quando o usuário utilizar tal função. Segundo as regras de negócio, foi possível alterar a estrutura do projeto, criando pastas para organizar os arquivos, e também foram adicionados novos destinos, assim como uma funcionalidade para calcular o valor da viagem.

### Estrutura Inicial do Aplicativo de Viagens
Nesta aula, abordamos a criação da estrutura inicial do nosso aplicativo de viagens. Utilizamos React para desenvolver uma interface amigável que permite ao usuário selecionar destinos, calcular distâncias e custos, e visualizar o subtotal da viagem.

### Regras de Negócio
1.Destinos Pré-Cadastrados: Foram incluídos 10 destinos iniciais no aplicativo, cada um com sua descrição e distância a partir do Brasil.
2. Cálculo de Distância: Se a distância for superior a 2000 km, são necessários dois voos.
3.Custos de Viagem: 
     - Inferiores a 2 meses: R$1500 (ida e volta).
     - Iguais ou superiores a 2 meses: R$700 (ida e volta).
     - Distâncias acima de 2000 km: cada km adicional custa R$1.
     - Padrão: R$400 por semana.
     - Luxo: R$700 por semana.
     - Participantes adicionais: aumentam o custo da estadia em 25% por participante.

### Lógica do Cálculo de Distância e Custos
A lógica implementada calcula automaticamente a distância do destino escolhido. Com base nessa distância, calcula o custo dos voos. O custo da estadia é calculado com base no tipo de acomodação que foi escolhida e no número de semanas e participantes. Todos os custos são somados para fornecer um subtotal imediato ao usuário, através do useEffect.

### Interface de Seleção e Exibição do Subtotal
A interface permite que o usuário selecione o destino, após isso ele pode escolher as especificações da viagem, como o número de participantes, o tipo de acomodação, e as datas de ida e volta. Durante todo o processo de seleção, o aplicativo exibe o subtotal da viagem, por causa do useEffect, também detalhando os critérios de custo no console.

### Sugestões e Melhorias
1. Adicionar destino: Acrescentar a opção de colocar distância para algum destino quando cadastrar, já que agora só é possível adicionar o nome e a descrição.
2. Home e Contato: As páginas home e contato estão vazias, então algo poderia ser adicionado, só para não deixar a tela com poucos detalhes e para melhorar o design do site.
