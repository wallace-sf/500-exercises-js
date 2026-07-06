# #004 - Analise de Complexidade (Padrao E)

Determine a complexidade de tempo (Big-O) da funcao abaixo em funcao de n e justifique em 1-2 frases.

```js
function analyze(n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j = Math.max(j + 1, j * 2)) s++;
  }
  return s;
}
```

**Restrições:** 1 <= n <= 10^9 (apenas para analise)

**Exemplo:** para n=8, a classificacao permanece O(n log n).

**Tags:** big-o, analise

**Dica:** Conte iteracoes e combine.

**Bônus:** Trate entradas vazias e valores negativos corretamente.

## Resposta

_(escreva aqui sua análise: complexidade + justificativa em 1-2 frases)_
