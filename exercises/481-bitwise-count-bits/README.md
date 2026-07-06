# #481 - Bitwise: Count Bits

ans[i]=popcount(i) para i=0..n.

**Assinatura:** `function countBits(n) {}`

**Restrições:** n<=2e6

**Exemplo:** `countBits(5)->[0,1,1,2,1,2]`

**Tags:** bit, dp

**Dica:** ans[i]=ans[i>>1]+(i&1).

**Bônus:** Nao use loops aninhados (tente O(n) ou O(n log n)).

## Abordagem

_(a preencher durante a resolução)_
