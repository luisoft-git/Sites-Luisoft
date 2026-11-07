/*
 * BANCO DE PERGUNTAS - Luisoft Simulador
 * Formato de cada pergunta:
 *   t : tópico
 *   q : enunciado
 *   o : opções (lista de textos)
 *   a : índice da opção correta (0 = A, 1 = B, ...)
 *   e : explicação opcional
 *
 * Para acrescentar perguntas, basta adicionar objetos ao array.
 */
window.QUESTIONS = [
  // ---------- Noções sobre história de Angola ----------
  { t: "História de Angola", q: "Em que data Angola proclamou a sua independência?", o: ["4 de fevereiro de 1961", "11 de novembro de 1975", "17 de setembro de 1979", "15 de janeiro de 1975"], a: 1 },
  { t: "História de Angola", q: "Quem foi o primeiro Presidente da República de Angola?", o: ["Jonas Savimbi", "Holden Roberto", "Agostinho Neto", "José Eduardo dos Santos"], a: 2 },
  { t: "História de Angola", q: "Qual o partido que proclamou a independência de Angola em 1975?", o: ["FNLA", "UNITA", "MPLA", "FLEC"], a: 2 },
  { t: "História de Angola", q: "Em que ano foi fundada a UNITA?", o: ["1961", "1966", "1975", "1979"], a: 1, e: "A UNITA foi fundada por Jonas Savimbi em 1966." },
  { t: "História de Angola", q: "Quem foi o fundador da FNLA?", o: ["Agostinho Neto", "Jonas Savimbi", "Holden Roberto", "Lúcio Lara"], a: 2 },
  { t: "História de Angola", q: "Em que data ocorreu a Revolta de 4 de Fevereiro de 1961?", o: ["Em Luanda", "Em Benguela", "No Huambo", "Em Cabinda"], a: 0, e: "A revolta teve início em Luanda, nas prisões e em outros pontos da cidade." },
  { t: "História de Angola", q: "Qual foi a antiga capital do Reino do Kongo?", o: ["Luanda", "Mbanza Kongo", "Malanje", "Huambo"], a: 1 },
  { t: "História de Angola", q: "Em que ano foi assinado o Acordo de Alvor?", o: ["1961", "1974", "1975", "1976"], a: 2, e: "O Acordo de Alvor foi assinado em janeiro de 1975." },
  { t: "História de Angola", q: "A Conferência de Berlim, que marcou a partilha de África, realizou-se entre que anos?", o: ["1800 e 1810", "1884 e 1885", "1914 e 1918", "1939 e 1945"], a: 1 },
  { t: "História de Angola", q: "Em que ano foi aprovada a atual Constituição de Angola?", o: ["1975", "1992", "2003", "2010"], a: 3 },
  { t: "História de Angola", q: "Qual o nome do movimento que, após a independência, esteve envolvido na guerra civil contra o MPLA?", o: ["FNLA", "UNITA", "FLEC", "PAIGC"], a: 1 },
  { t: "História de Angola", q: "Qual é a principal língua oficial de Angola?", o: ["Inglês", "Francês", "Português", "Kimbundu"], a: 2 },

  // ---------- Organização política e administrativa ----------
  { t: "Organização Política", q: "Qual é a forma de governo de Angola?", o: ["Monarquia parlamentar", "República presidencialista", "República parlamentar", "Federação"], a: 1 },
  { t: "Organização Política", q: "Quantos deputados tem a Assembleia Nacional de Angola?", o: ["150", "180", "200", "220"], a: 3 },
  { t: "Organização Política", q: "Qual é a duração do mandato do Presidente da República?", o: ["4 anos", "5 anos", "6 anos", "7 anos"], a: 1 },
  { t: "Organização Política", q: "Qual dos seguintes é um órgão de soberania?", o: ["Os Municípios", "A Assembleia Nacional", "As Juntas de Freguesia", "O Banco Central"], a: 1, e: "São órgãos de soberania o Presidente, a Assembleia Nacional, o Governo e os Tribunais." },
  { t: "Organização Política", q: "Qual é a moeda oficial de Angola?", o: ["Escudo", "Metical", "Kwanza", "Dobra"], a: 2 },
  { t: "Organização Política", q: "Que órgão tem a função de fazer as leis em Angola?", o: ["Tribunal Constitucional", "Governo", "Assembleia Nacional", "Procuradoria-Geral"], a: 2 },
  { t: "Organização Política", q: "Qual é a capital de Angola?", o: ["Benguela", "Huambo", "Luanda", "Lubango"], a: 2 },
  { t: "Organização Política", q: "Quem exerce a função de chefe do Governo em Angola?", o: ["O Presidente da Assembleia Nacional", "O Presidente da República", "O Procurador-Geral", "O Ministro da Justiça"], a: 1 },

  // ---------- Noções gerais de Administração Pública ----------
  { t: "Administração Pública", q: "O princípio da legalidade significa que a Administração Pública deve atuar:", o: ["Conforme a vontade do chefe", "Segundo a lei", "Segundo a conveniência pessoal", "Sem regras"], a: 1 },
  { t: "Administração Pública", q: "O princípio da imparcialidade obriga o funcionário público a:", o: ["Favorecer amigos", "Tratar todos os cidadãos com igualdade", "Decidir por interesse próprio", "Ignorar os pedidos dos cidadãos"], a: 1 },
  { t: "Administração Pública", q: "O que é a hierarquia administrativa?", o: ["A igualdade entre todos os funcionários", "A relação de subordinação entre órgãos e agentes", "A divisão do território", "O orçamento do Estado"], a: 1 },
  { t: "Administração Pública", q: "Qual o princípio que exige transparência e acesso à informação pública?", o: ["Princípio da publicidade", "Princípio da reserva", "Princípio do sigilo", "Princípio da discricionariedade"], a: 0 },
  { t: "Administração Pública", q: "A Administração Pública existe para servir:", o: ["Os interesses do funcionário", "O interesse público", "Os partidos políticos", "As empresas privadas"], a: 1 },
  { t: "Administração Pública", q: "O dever de zelo do funcionário público significa:", o: ["Trabalhar com cuidado e diligência", "Trabalhar apenas quando quer", "Não cumprir horários", "Ignorar as normas"], a: 0 },

  // ---------- Questões sobre o Ministério do Interior ----------
  { t: "Ministério do Interior", q: "Qual é o organismo sob tutela do Ministério do Interior que assegura a ordem e a segurança pública?", o: ["Serviço de Migração", "Polícia Nacional", "Serviço de Saúde", "Forças Armadas"], a: 1 },
  { t: "Ministério do Interior", q: "Qual é a principal missão do Ministério do Interior?", o: ["Gerir as finanças do Estado", "Garantir a ordem pública e a segurança dos cidadãos", "Dirigir a educação", "Fiscalizar a justiça"], a: 1 },
  { t: "Ministério do Interior", q: "A administração do território nacional, em regra, cabe a que área do Estado?", o: ["Ao Ministério do Interior", "Ao Ministério da Cultura", "Ao Ministério do Turismo", "Ao Ministério dos Transportes"], a: 0 },

  // ---------- Patriotismo ----------
  { t: "Patriotismo", q: "Qual é o nome do hino nacional de Angola?", o: ["Angola Avante", "Angola Minha", "Hino da Liberdade", "Terra Nossa"], a: 0 },
  { t: "Patriotismo", q: "Em que dia se celebra o Dia da Independência Nacional?", o: ["4 de fevereiro", "17 de setembro", "11 de novembro", "1 de maio"], a: 2 },
  { t: "Patriotismo", q: "Em que dia se celebra o Dia dos Heróis Nacionais?", o: ["11 de novembro", "17 de setembro", "4 de janeiro", "25 de dezembro"], a: 1 },
  { t: "Patriotismo", q: "Qual é a cor que aparece na parte superior da bandeira nacional de Angola?", o: ["Verde", "Azul", "Vermelho", "Amarelo"], a: 2 },
  { t: "Patriotismo", q: "O dever de todo cidadão angolano em relação à Pátria inclui:", o: ["Respeitar os símbolos nacionais e defender a soberania", "Ignorar as leis", "Desrespeitar os heróis", "Abandonar o país sem razão"], a: 0 },
  { t: "Patriotismo", q: "Quais são os símbolos nacionais de Angola?", o: ["Bandeira, hino e emblema", "Moeda, selo e mapa", "Brasão, jornal e rádio", "Estádio, bola e escudo"], a: 0 }
];
