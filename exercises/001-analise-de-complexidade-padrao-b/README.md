# #001 - Analise de Complexidade (Padrao B)

Determine a complexidade de tempo (Big-O) da funcao abaixo em funcao de n e justifique em 1-2 frases.

```js
function analyze(n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) s += i * j;
  }
  return s;
}
```

**Restrições:** 1 <= n <= 10^9 (apenas para analise)

**Exemplo:** para n=8, a classificacao permanece O(n^2).

**Tags:** big-o, analise

**Dica:** Conte iteracoes e combine.

**Bônus:** Nao use loops aninhados (tente O(n) ou O(n log n)).

## Resposta

_(escreva aqui sua análise: complexidade + justificativa em 1-2 frases)_
