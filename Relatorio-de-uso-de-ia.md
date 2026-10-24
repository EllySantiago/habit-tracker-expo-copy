# Relatório de uso de IA — Atividade da Aula 6 (Navegação)

**Disciplina:** ADS025 — Desenvolvimento Mobile (2026.2) **Projeto:** habit-tracker-expo, branch `feature/aula_06_navigation`

## 1\. Ferramentas utilizadas

| Ferramenta | Versão | Constante no Catálogo de IA do CESAR |
| :---- | :---- | :---- |
| Claude | Claude Sonnet 5.5 (nível de uso: Baixo) | Não confirmado (ver comentários) |
| Copilot / GPT Luna 6 | GPT Luna 6, via Copilot | Não confirmado (ver comentários) |

## 2\. Finalidade e etapas

**Copilot / GPT Luna 6**

- Conferir se as dependências do projeto estavam corretas (Expo SDK 57, Expo Router, `expo-image`, `expo-image-picker`).  
- Criar o rascunho base do projeto, seguindo prompts que defini com a ajuda do Claude, e tirar dúvidas pontuais durante o desenvolvimento.  
- O Copilot conseguiu executar até o quarto conjunto de comando. Na conversão para o Expo Router não consegui testar e o Copilot travou, então continuei o desenvolvimento com o Claude(o rascunho criado pelo Copilot usava `index.ts` e `App.tsx` como ponto de entrada, o que não serve para o Expo Router ).

**Claude**

- Orientação nas dúvidas de instalação de dependências e de como rodar e testar o aplicativo.  
- Geração do código-rascunho e do passo a passo da implementação (layout com Tabs, `/registrar-foto`, `/galeria`, `/sobre`, componente `miniatura-foto`, links e `router.push`, plugin do `expo-image-picker` e `README.md`). Revisei e testei a cada modificação necessária.  
- Ajuda na conferência de que a solução atendia aos requisitos do enunciado (`npx tsc --noEmit` sem erros, dependências conferidas e bundle gerado). Como o enunciado permitia muitas formas de resolver, a checagem era necessária para garantir que a solução contava como atendendo aos requisitos.

## 3\. Tipo de contribuição

- **Copilot / GPT Luna 6:** conferência de dependências, criação do rascunho base (a partir de prompts que defini com ajuda do Claude para estruturar o texto) e respostas a dúvidas pontuais.  
- **Claude:** geração de código-rascunho das telas e da navegação, orientação sobre instalação e testes, e checagem dos requisitos da atividade.

## 4\. Análise crítica do código retornado

**Acertos**

- O código das telas compilou sem erros de TypeScript no modo `strict`.  
- A tela de foto trata cancelamento sem mostrar erro e tem mensagens distintas para câmera negada e bloqueada.  
- Os componentes ficaram fora de `src/app/` e não sobrou nenhum `TODO`.  
- A galeria evita esticar a última foto com `maxWidth: '33%'`.

**Erros e imprecisões**

- Os primeiros prompts supunham arquivos que não existiam no esqueleto, como `src/screens/tela-habitos`. Foi preciso reescrevê-los para o estado real do projeto.  
- A primeira versão do layout com Tabs importava `@expo/vector-icons`, que não era dependência direta do projeto, e causou erro de compilação. Os ícones foram removidos.  
- O Copilot travou na conversão para o Expo Router, e algumas mudanças e arquivos editados por ele precisaram de atenção especial na checagem.  
- A verificação automática não cobre câmera nem permissões, então testei manualmente no aparelho todas as funcionalidades possíveis e disponíveis.  
- Tive dificuldade para testar o aplicativo e por isso revisei o código várias vezes, até confirmar que estava funcional e atendia aos requisitos mínimos.

**Vieses e más práticas**

- O código é propositalmente simples: hábitos e fotos ficam só em memória, sem persistência. A limitação está declarada na tela `/sobre` e no `README.md`.

**Pontos de melhoria**

- Os hábitos marcados como concluídos ficam com o card branco, e as opções ficaram precisando de ajuste visual. Como a funcionalidade atende ao que foi pedido, considerei desnecessário investir em UI/UX nesta atividade.

## 5\. Grau de acerto da IA

| Etapa | Ferramenta | Grau de acerto (0 a 10\) | Justificativa |
| :---- | :---- | :---- | :---- |
| Conferência de dependências e base do projeto | Copilot / GPT Luna 6 | 4 | Durante a checagem, algumas mudanças e arquivos editados pelo Copilot precisaram de atenção especial, e ele travou na conversão para o Expo Router. |
| Telas, navegação com Tabs e configuração | Claude | 7 | Ajudou na checagem de problemas e nos pontos a considerar, e orientou o passo a passo do que fazer. |

## 6\. Revisão humana

Revisei o código gerado várias vezes: fui construindo aos poucos, entendendo cada parte e testando a cada etapa. Testei o funcionamento e confirmei que estava ok e funcional antes de entregar. Assumo a responsabilidade pelo resultado final.

## 7\. Comentários

Não consegui acessar o Catálogo de IA do CESAR, por isso não pude confirmar se as ferramentas utilizadas constam nele com status de aprovação vigente. Informo o uso de forma transparente e assumo eventual desconto de nota por isso.

## 8\. Declaração

Declaro que utilizei a(s) ferramenta(s) de Inteligência Artificial Claude Sonnet 5.5 e Copilot (GPT Luna 6\) nesta atividade, com a finalidade de gerar um rascunho sobre navegação com Expo Router (Tabs), seleção de fotos por câmera e galeria e conferência de dependências de um aplicativo React Native, sobre o qual realizei análise crítica (curadoria) das informações apresentadas. Não tratei dados pessoais no uso desta ferramenta. Revisei criticamente o conteúdo gerado, identificando seus acertos e eventuais imprecisões, e assumo a responsabilidade integral pela versão final apresentada.