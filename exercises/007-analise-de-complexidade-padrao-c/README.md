# #007 - Analise de Complexidade (Padrao C)

Determine a complexidade de tempo (Big-O) da funcao abaixo em funcao de n e justifique em 1-2 frases.

```js
function analyze(n) {
  let c = 0;
  while (n > 1) { n = Math.floor(n / 2); c++; }
  return c;
}
```

**Restrições:** 1 <= n <= 10^9 (apenas para analise)

**Exemplo:** para n=8, a classificacao permanece O(log n).

**Tags:** big-o, analise

**Dica:** Conte iteracoes e combine.

**Bônus:** Escreva 3 testes basicos para validar sua funcao.

## Resposta

_(escreva aqui sua análise: complexidade + justificativa em 1-2 frases)_
