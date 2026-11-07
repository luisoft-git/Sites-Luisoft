# Luisoft Simulador

Simulador da prova escrita (Ministério do Interior de Angola) com 50 perguntas por simulado,
pedido do nome do candidato e cálculo da percentagem de respostas certas.

## Estrutura
- `index.html`  – aplicação (ecrãs, lógica, histórico)
- `questions.js` – banco de perguntas (acrescentar aqui)
- `manifest.json`, `sw.js`, `icon.svg` – instalação como app e uso offline

## Como testar já (Android e iPhone)
1. Coloque a pasta num servidor com HTTPS (ex.: GitHub Pages, Netlify) ou use um servidor local.
2. Abra o endereço no Chrome (Android) ou no Safari (iPhone).
3. Android: menu ⋮ → "Instalar aplicação". iPhone: botão Partilhar → "Adicionar ao ecrã principal".

## Gerar APK (Android) e IPA (iOS) com Capacitor
```bash
npm init -y
npm install @capacitor/core @capacitor/cli
npx cap init "Luisoft Simulador" "ao.luisoft.simulador" --web-dir=.
npm install @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios
npx cap copy
npx cap open android   # Android Studio → Build > Build APK(s)
npx cap open ios       # Xcode (requer Mac e conta de programador Apple)
```

## Acrescentar perguntas
Cada pergunta em `questions.js`:
```js
{ t: "Tópico", q: "Enunciado?", o: ["Opção A", "Opção B", "Opção C", "Opção D"], a: 0, e: "Explicação opcional" }
```
`a` é o índice da resposta correta (0 = A, 1 = B, 2 = C, 3 = D).

Nota: o simulado só arranca quando o banco tem pelo menos 50 perguntas. Para o banco final
(2000+ perguntas), recomenda-se validar o conteúdo com a legislação e o programa oficial da prova.
