# #010 - Analise de Complexidade (Padrao A)

Determine a complexidade de tempo (Big-O) da funcao abaixo em funcao de n e justifique em 1-2 frases.

```js
function analyze(n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) s += i + j;
  }
  return s;
}
```

**Restrições:** 1 <= n <= 10^9 (apenas para analise)

**Exemplo:** para n=8, a classificacao permanece O(n log n).

**Tags:** big-o, analise

**Dica:** Conte iteracoes e combine.

**Bônus:** Evite alocar um segundo array do mesmo tamanho (tente in-place).

## Resposta

_(escreva aqui sua análise: complexidade + justificativa em 1-2 frases)_
