# 500 Exercícios de Lógica, DSA e Algoritmos (JS/TS)

Ambiente local e minimalista para praticar os 500 exercícios da lista "500 Exercícios de Lógica, DSA e Algoritmos", em JavaScript/TypeScript, com Vitest.

Sem UI, sem banco de dados, sem ranking, sem timer obrigatório. Só um jeito simples de escrever uma solução e saber na hora se passou ou não.

## Como rodar

```bash
npm install
npm test          # roda todos os testes uma vez
npm run test:watch   # modo watch, ideal enquanto resolve um exercício
```

Para rodar só um exercício:

```bash
npx vitest run exercises/031-two-pointers-remover-duplicatas-in-place
```

## Estrutura

```
exercises/
  001-analise-de-complexidade-padrao-b/
    README.md
  031-two-pointers-remover-duplicatas-in-place/
    README.md
    solution.ts
    solution.test.ts
  ...
```

Cada pasta é um exercício, numerado de 001 a 500.

- **Exercícios teóricos** (10 no total, só análise de Big-O): têm apenas `README.md`, com uma seção `## Resposta` para preencher por escrito.
- **Exercícios de código** (490 no total): têm `README.md` (enunciado, restrições, exemplos, tags, dica, bônus), `solution.ts` (assinatura pronta, corpo vazio lançando `not implemented`) e `solution.test.ts` (testes com os exemplos do enunciado +, em ~2/3 dos casos, casos de borda extras verificados contra o gabarito — array vazio, elemento único, duplicatas, etc.).

Resolver um exercício = implementar o corpo da função/classe em `solution.ts` até os testes passarem.

## Mapa de seções

| Seção | Exercícios | Qtd |
|---|---|---|
| Fundamentos (Big-O, recursão básica, math) | 001–030 | 30 |
| Arrays e Strings (two pointers, sliding window, prefix sum, hashmap, sorting) | 031–165 | 135 |
| Pilhas, Filas e Listas | 166–210 | 45 |
| Árvores, Heaps e Tries | 211–240 | 30 |
| Grafos e Union-Find | 241–300 | 60 |
| Backtracking | 301–340 | 40 |
| Programação Dinâmica | 341–480 | 140 |
| Intervalos, Bits e Misc | 481–500 | 20 |

## Ordem de ataque sugerida

1. Fundamentos
2. Arrays e Strings
3. Pilhas, Filas e Listas
4. Árvores e Tries
5. Grafos e Union-Find
6. Backtracking
7. Programação Dinâmica
8. Intervalos, Bits e Misc (pode intercalar a qualquer momento — são curtos)

Sem pressa, sem timer no início. Um exercício de cada vez.
