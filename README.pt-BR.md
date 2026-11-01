# 500 Exercícios de Lógica, Estruturas de Dados e Algoritmos (JS/TS)

[English](README.md) | **Português (Brasil)**

Um ambiente local e minimalista para praticar os 500 exercícios da lista "500 Logic, DSA and Algorithm Exercises", em JavaScript/TypeScript, com Vitest.

Sem interface, sem banco de dados, sem ranking, sem cronômetro obrigatório. Só um jeito simples de escrever uma solução e saber na hora se ela passou ou não.

## Como rodar

```bash
npm install
npm test          # roda todos os testes uma vez
npm run test:watch   # modo watch, ideal enquanto resolve um exercício
```

Para rodar um único exercício:

```bash
npm run test:one -- 31              # pelo número
npm run test:one -- two-pointers    # pelo nome (ou parte dele)
npm run test:one -- 31 --watch      # modo watch para esse exercício
```

Se mais de um exercício corresponder ao número/nome informado, seja mais específico.

Para validar as respostas discursivas (exercícios de teoria, seções `## Answer`) usando o Claude Code:

```bash
npm run test:theory                       # valida todos os exercícios de teoria respondidos
npm run test:theory -- 2                  # valida só o exercício 002
npm run test:theory -- --cli claude-personal   # usa outro binário do Claude Code
```

Exercícios não respondidos (que ainda mostram o texto padrão) são ignorados. O comando chama a CLI do Claude (`claude` por padrão) para cada exercício respondido, então faz chamadas reais à API e leva alguns segundos por exercício.

Cada pasta de exercício de teoria tem um `answer.json` (por exemplo, `exercises/001-complexity-analysis-pattern-b/answer.json`) com a complexidade esperada, usado como referência na correção. Ele não aparece no `README.md` do exercício.

Para ver um resumo do progresso nos 500 exercícios (teoria e código):

```bash
npm run summary
```

Mostra um bloco de totais (respondidos / corretos / restantes) e uma tabela por exercício com duas colunas:

- **Respondido**: existe uma tentativa em formato válido. A seção `## Answer` do exercício de teoria foi preenchida, ou o corpo do `solution.ts` do exercício de código foi alterado e não é mais o stub `not implemented`. Não significa que está correto.
- **Correto**: a tentativa está de fato correta. Nos exercícios de teoria, a complexidade informada bate com o `answer.json` (verificação determinística, sem chamar LLM). Nos exercícios de código, `Respondido` é verdadeiro *e* o `solution.test.ts` passa. Essa combinação evita falsos positivos de alguns testes gerados automaticamente que só verificam se a função existe, sem chamá-la, e que passariam num stub intocado.

O progresso fica salvo localmente em `scripts/progress.json` (no gitignore, não vai para o repositório) e só é atualizado quando esse comando roda.

## Estrutura

```
exercises/
  001-complexity-analysis-pattern-b/
    README.md
  031-two-pointers-remove-duplicates-in-place/
    README.md
    solution.ts
    solution.test.ts
  ...
```

Cada pasta é um exercício, numerado de 001 a 500.

- **Exercícios de teoria** (10 no total, só análise de Big-O): têm apenas um `README.md`, com uma seção `## Answer` para preencher por escrito.
- **Exercícios de código** (490 no total): têm um `README.md` (enunciado, restrições, exemplos, tags, dica, bônus), um `solution.ts` (assinatura pronta, corpo vazio lançando `not implemented`) e um `solution.test.ts` (testes com os exemplos do enunciado e, em cerca de 2/3 dos casos, casos de borda extras verificados contra a solução de referência: array vazio, um único elemento, duplicados etc.).

Resolver um exercício = implementar o corpo da função/classe em `solution.ts` até os testes passarem.

## Mapa das seções

| Seção | Exercícios | Quantidade |
|---|---|---|
| Fundamentos (Big-O, recursão básica, matemática) | 001–030 | 30 |
| Arrays e Strings (dois ponteiros, janela deslizante, soma de prefixos, hashmap, ordenação) | 031–165 | 135 |
| Pilhas, Filas e Listas | 166–210 | 45 |
| Árvores, Heaps e Tries | 211–240 | 30 |
| Grafos e Union-Find | 241–300 | 60 |
| Backtracking | 301–340 | 40 |
| Programação Dinâmica | 341–480 | 140 |
| Intervalos, Bits e Diversos | 481–500 | 20 |

## Ordem de estudo sugerida

1. Fundamentos
2. Arrays e Strings
3. Pilhas, Filas e Listas
4. Árvores e Tries
5. Grafos e Union-Find
6. Backtracking
7. Programação Dinâmica
8. Intervalos, Bits e Diversos (podem ser intercalados a qualquer momento, são curtos)

Sem pressa e sem cronômetro no começo. Um exercício de cada vez.

## Rotina diária de prática (preparação para entrevistas)

Pense em **tempo por dia**, não em número de exercícios. A quantidade varia naturalmente com a dificuldade; o que importa é a constância.

**De 1 a 1,5 hora por dia, 5 a 6 dias por semana.** Dentro desse tempo, a quantidade se ajusta sozinha:

| Dificuldade | Exercícios por dia | Tempo-alvo por exercício |
|---|---|---|
| Fácil | 3 a 5 | 15 a 20 min |
| Média | 1 a 2 | 30 a 45 min |
| Difícil | 1 a cada 1 ou 2 dias | 45 a 60 min, ou mais |

Os tempos-alvo seguem o que acontece numa entrevista real (de 30 a 45 minutos por problema). Comece sem cronômetro enquanto aprende um assunto e passe a usar os tempos-alvo quando ele ficar confortável.

### Mais importante que a quantidade

1. **Estabeleça um limite para ficar travado.** Depois de 25 a 30 minutos sem avançar, leia a dica. Se mesmo assim não sair, leia uma solução, entenda-a e **refaça sozinho no dia seguinte**. Ficar duas horas travado ensina pouco.
2. **Revise.** Reserve uns 15 minutos por dia para refazer um exercício de 3 a 7 dias atrás, sem olhar a sua resposta. Fixar o que você já resolveu vale mais do que resolver algo novo.
3. **Pense em voz alta.** Numa entrevista, explicar o raciocínio conta tanto quanto acertar. Preencher a seção `## Approach` de cada exercício é um bom treino disso.
4. **Diga a complexidade** (tempo e espaço) de cada solução. Isso sempre é perguntado.
5. **Aprenda padrões, não exercícios.** Você não precisa resolver os 500. Precisa reconhecer os padrões (recursão, dois ponteiros, janela deslizante, hash map, BFS/DFS, programação dinâmica etc.). Quando um padrão já estiver fácil, tudo bem pular alguns exercícios parecidos.

### Prazo

Numa média de 2 exercícios por dia, 5 dias por semana, os 500 levariam cerca de **um ano**. Se houver uma entrevista com data marcada, priorize os assuntos que mais caem em vez de seguir a ordem numérica.
