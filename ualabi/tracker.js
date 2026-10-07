// tracker.js - Sistema com Limpeza Total de Formulários, Travamento e Painel
(function() {
  const TOTAL_SIMULADOS_DIARIOS = 30;
  const QUESTOES_POR_TREINO = 6;
  const TOTAL_SIMULADOS_GERAIS = 4;
  const QUESTOES_POR_GERAL = 24;

  const MATRIZES = {
    1: "Geometria e Espaço",
    2: "Números e Aritmética",
    3: "Lógica e Relações",
    4: "Matemática Discreta e Grafos",
    5: "Periodicidade e Restos",
    6: "Invariantes e Alternância"
  };

  // --- 1. IDENTIFICAÇÃO E MAPEAMENTO ---
  function extrairIdQuestao(el) {
    if (!el) return null;
    if (el.id && (el.id.startsWith("ex-") || el.id.startsWith("sec-"))) return el.id;
    let pai = el.closest("[id^='ex-'], article.exercise, div.exercise, .runestone[id]");
    if (pai && pai.id) return pai.id;
    let input = el.querySelector("input[type='radio']");
    if (input && input.name) return input.name.replace(/_group.*$/, "");
    return el.id || null;
  }

  function detectarMatriz(id, txt) {
    id = String(id || "");
    txt = String(txt || "");
    let mTag = id.match(/-m([1-6])-/i);
    if (mTag) return parseInt(mTag[1]);
    let mE = id.match(/e-?0?(\d+)\b/i);
    if (mE) return ((parseInt(mE[1]) - 1) % 6) + 1;
    let mQ = id.match(/q0?([1-6])\b/i);
    if (mQ) return parseInt(mQ[1]);

    let c = (id + " " + txt).toLowerCase();
    if (/l[oó]gica|fila|ciranda|amigo|irm[aã]o|posi[cç]/i.test(c)) return 3;
    if (/balan[cç]a|fruta|aritm[eé]t|n[uú]mero|peso|equival|rob[oô]|bombom|peixe/i.test(c)) return 2;
    if (/grafo|ponte|sapo|discret|labirinto|caminho|seta|percurso|malha|otimiza/i.test(c)) return 4;
    if (/colar|per[ií]od|resto|ciclo|vareta|repet/i.test(c)) return 5;
    if (/invarian|altern[aâ]n|cart[aã]o|bot[aã]o|moeda/i.test(c)) return 6;
    if (/geometr|azulejo|ret[aâ]ngulo|cubo|mosaico|tri[aâ]ngulo|fita|torre/i.test(c)) return 1;
    return 1;
  }

  function identificarOrigem(id) {
    id = String(id || "").toLowerCase();
    let isGeral = id.includes("-g") || id.includes("2026");
    let matchNum = id.match(/(?:d|g|s)0?(\d+)/i);
    let num = matchNum ? parseInt(matchNum[1]) : 1;
    let tipo = isGeral ? "geral" : "diario";
    let chave = (isGeral ? "g" : "d") + (num < 10 ? "0" + num : num);
    return {
      tipo: tipo,
      numero: num,
      chave: chave,
      totalQuestoes: isGeral ? QUESTOES_POR_GERAL : QUESTOES_POR_TREINO
    };
  }

  function obterHistorico() {
    try {
      return JSON.parse(localStorage.getItem("canguru_tracker") || "{}");
    } catch(e) {
      return {};
    }
  }

  function estaFinalizado(chave) {
    try {
      let fin = JSON.parse(localStorage.getItem("canguru_finalizados") || "{}");
      return !!fin[chave];
    } catch(e) {
      return false;
    }
  }

  // --- 2. TRAVAMENTO E ESTILIZAÇÃO ---
  function travarOpcoes(el) {
    if (!el) return;
    el.querySelectorAll("input[type='radio']").forEach(input => {
      input.disabled = true;
      input.style.cursor = "not-allowed";
    });
    let btn = el.querySelector("button.btn-success, button[type='button'], .btn");
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = "0.5";
      btn.style.cursor = "not-allowed";
    }
  }

  function estilizarFeedback(el, acertou) {
    let feedEl = el.querySelector("[id$='_feedback'], .feedback, .feed, .alert, .runestone-feedback");
    if (!feedEl) return;

    feedEl.style.display = "block";
    feedEl.style.visibility = "visible";
    feedEl.style.marginTop = "14px";
    feedEl.style.padding = "14px 18px";
    feedEl.style.borderRadius = "8px";
    feedEl.style.fontSize = "14px";
    feedEl.style.lineHeight = "1.5";

    let avisoAntigo = el.querySelector(".alerta-travada");
    if (avisoAntigo) avisoAntigo.remove();

    if (acertou) {
      feedEl.style.backgroundColor = "#f0fdf4";
      feedEl.style.border = "2px solid #22c55e";
      feedEl.style.color = "#15803d";
      if (!feedEl.querySelector(".tag-status-acerto")) {
        feedEl.insertAdjacentHTML("afterbegin", "<div class='tag-status-acerto' style='font-weight:bold; font-size:15px; margin-bottom:6px;'>✓ Resposta Correta!</div>");
      }
    } else {
      feedEl.style.backgroundColor = "#fef2f2";
      feedEl.style.border = "2px solid #ef4444";
      feedEl.style.color = "#b91c1c";
      if (!feedEl.querySelector(".tag-status-erro")) {
        feedEl.insertAdjacentHTML("afterbegin", "<div class='tag-status-erro' style='font-weight:bold; font-size:15px; margin-bottom:6px;'>✗ Resposta Incorreta!</div>");
      }
    }
  }

  function aplicarModoExameCSS(finalizado) {
    let styleTag = document.getElementById("css-modo-exame");
    if (!finalizado) {
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "css-modo-exame";
        styleTag.innerHTML = `
          .em-modo-exame [id$='_feedback'],
          .em-modo-exame .feed,
          .em-modo-exame .feedback,
          .em-modo-exame .runestone-feedback,
          .em-modo-exame .solution-like,
          .em-modo-exame .hint-like,
          .em-modo-exame a.knowl-button,
          .em-modo-exame .solutions {
            display: none !important;
          }
        `;
        document.head.appendChild(styleTag);
      }
      document.body.classList.add("em-modo-exame");
    } else {
      if (styleTag) styleTag.remove();
      document.body.classList.remove("em-modo-exame");
    }
  }

  // --- 3. LIMPEZA TOTAL (RESET) ---
  function executarResetTotal() {
    if (!confirm("Deseja realmente zerar todo o histórico e limpar todas as respostas?")) {
      return;
    }

    // 1. Apaga 100% dos dados armazenados (do painel e do Runestone)
    localStorage.clear();
    sessionStorage.clear();

    // 2. Desmarca fisicamente todas as alternativas
    document.querySelectorAll("input[type='radio']").forEach(function(r) {
      r.checked = false;
      r.disabled = false;
      r.style.cursor = "pointer";
    });

    // 3. Reseta todos os formulários da página
    document.querySelectorAll("form").forEach(function(f) {
      f.reset();
    });

    // 4. Reativa todos os botões
    document.querySelectorAll("button").forEach(function(btn) {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.cursor = "pointer";
    });

    // 5. Limpa todas as caixas de feedback e avisos
    document.querySelectorAll("[id$='_feedback'], .feedback, .feed, .alert, .runestone-feedback, .alerta-travada").forEach(function(feed) {
      feed.innerHTML = "";
      feed.style.display = "none";
    });

    // 6. Recarrega a página para iniciar uma sessão limpa
    location.reload();
  }

  // --- 4. PROCESSAMENTO DAS RESPOSTAS ---
  function registrarTentativas() {
    let historico = obterHistorico();
    let alterado = false;

    const blocos = document.querySelectorAll(
      "div[data-component='multiplechoice'], .runestone[id], article.exercise, div.exercise, div[id^='ex-']"
    );

    blocos.forEach(function(el) {
      let qId = extrairIdQuestao(el);
      if (!qId) return;

      let origem = identificarOrigem(qId);
      let finalizado = estaFinalizado(origem.chave);

      if (historico[qId]) {
        travarOpcoes(el);
        if (finalizado) {
          estilizarFeedback(el, historico[qId].correto);
        }
        return;
      }

      let feedEl = el.querySelector("[id$='_feedback'], .feedback, .feed, .alert, .runestone-feedback");
      if (!feedEl) {
        let btn = el.querySelector("button");
        if (btn && btn.nextElementSibling) feedEl = btn.nextElementSibling;
      }

      let txt = feedEl && feedEl.textContent ? feedEl.textContent.trim().toLowerCase() : "";
      if (!txt) return;

      let acertou = null;
      if (txt.includes("incorret") || txt.includes("incorrect") || txt.includes("errad")) acertou = false;
      else if (txt.includes("corret") || txt.includes("correct") || txt.includes("certo") || txt.includes("parabéns")) acertou = true;

      if (acertou !== null) {
        let mat = detectarMatriz(qId, el.textContent);

        historico[qId] = {
          correto: acertou,
          matriz: mat,
          tipo: origem.tipo,
          simulado: origem.numero,
          ts: Date.now()
        };
        alterado = true;

        travarOpcoes(el);

        if (!finalizado) {
          let aviso = el.querySelector(".alerta-travada");
          if (!aviso) {
            aviso = document.createElement("div");
            aviso.className = "alerta-travada";
            aviso.style.cssText = "font-size: 13px; color: #0284c7; font-weight: 600; margin-top: 8px;";
            aviso.innerText = "✓ Resposta confirmada no cartão de respostas.";
            el.appendChild(aviso);
          }
        } else {
          estilizarFeedback(el, acertou);
        }
      }
    });

    if (alterado) {
      localStorage.setItem("canguru_tracker", JSON.stringify(historico));
      renderizarPainel();
      atualizarCaixaFinalizacao();
    }
  }

  // --- 5. CAIXA DE FINALIZAÇÃO ---
  function injetarCaixaFinalizacao(simuladoInfo) {
    if (!simuladoInfo || document.getElementById("container-finalizar-prova")) return;

    const secao = document.querySelector("#sec-simulado-01, #sec-simulado-geral-01, section.section, main");
    if (!secao) return;

    const divBox = document.createElement("div");
    divBox.id = "container-finalizar-prova";
    divBox.style.cssText = "margin: 40px 0; padding: 25px; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 12px; text-align: center;";

    let finalizado = estaFinalizado(simuladoInfo.chave);
    let historico = obterHistorico();

    let questoesDesteSimulado = Object.entries(historico).filter(([id, item]) => {
      let orig = identificarOrigem(id);
      return orig.chave === simuladoInfo.chave;
    });
    let totalFeitas = questoesDesteSimulado.length;
    let totalAcertos = questoesDesteSimulado.filter(([id, item]) => item.correto).length;

    let nomeTipo = simuladoInfo.tipo === "geral" ? "Simulado Geral" : "Treino Diário";

    if (finalizado) {
      let perc = Math.round((totalAcertos / simuladoInfo.totalQuestoes) * 100);
      divBox.innerHTML = `
        <h3 style="color: #16a34a; margin-top: 0; font-size: 20px;">🎉 ${nomeTipo} ${simuladoInfo.numero} Finalizado!</h3>
        <p style="font-size: 16px; color: #1e293b; margin: 10px 0;">
          Resultado: <strong>${totalAcertos} de ${simuladoInfo.totalQuestoes} acertos</strong> (${perc}% de aproveitamento).
        </p>
        <p style="color: #475569; font-size: 14px;">O gabarito oficial com indicações em verde e vermelho e as soluções completas estão desbloqueados abaixo.</p>
        <button id="btn-ir-ao-painel" style="display: inline-block; margin-top: 10px; background: #2563eb; color: #fff; padding: 10px 22px; border: none; border-radius: 6px; font-weight: bold; font-size: 14px; cursor: pointer;">
          Ver Diagnóstico no Painel de Desempenho
        </button>
      `;
    } else {
      divBox.innerHTML = `
        <h3 style="color: #1e293b; margin-top: 0; font-size: 18px;">Pronto para encerrar o ${nomeTipo}?</h3>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">
          Progresso: <strong>${totalFeitas} de ${simuladoInfo.totalQuestoes}</strong> questões respondidas.
        </p>
        <button id="btn-finalizar-prova-acao" style="background: #16a34a; color: #ffffff; border: none; padding: 12px 28px; font-size: 15px; font-weight: bold; border-radius: 8px; cursor: pointer;">
          Finalizar e Ver Gabarito Comentado
        </button>
      `;
    }

    secao.appendChild(divBox);

    const btnPainel = document.getElementById("btn-ir-ao-painel");
    if (btnPainel) {
      btnPainel.onclick = function() {
        const local = document.querySelector("#sec-painel-estudante, #ch-painel, #painel-desempenho");
        if (local && local.offsetHeight > 0) {
          local.scrollIntoView({ behavior: "smooth" });
          return;
        }
        const linkNav = document.querySelector("a[href*='painel'], a[href*='desempenho']");
        if (linkNav && linkNav.getAttribute("href")) {
          window.location.href = linkNav.getAttribute("href");
        } else {
          window.location.href = "ch-painel.html";
        }
      };
    }

    const btnAcao = document.getElementById("btn-finalizar-prova-acao");
    if (btnAcao) {
      btnAcao.onclick = function() {
        if (totalFeitas < simuladoInfo.totalQuestoes) {
          if (!confirm(`Você respondeu ${totalFeitas} de ${simuladoInfo.totalQuestoes} questões. Deseja realmente finalizar agora?`)) {
            return;
          }
        }
        let finalizados = JSON.parse(localStorage.getItem("canguru_finalizados") || "{}");
        finalizados[simuladoInfo.chave] = true;
        localStorage.setItem("canguru_finalizados", JSON.stringify(finalizados));
        location.reload();
      };
    }
  }

  function atualizarCaixaFinalizacao() {
    const qExemplo = document.querySelector("[id^='ex-']");
    if (qExemplo) {
      let info = identificarOrigem(extrairIdQuestao(qExemplo));
      injetarCaixaFinalizacao(info);
    }
  }

  // --- 6. RENDERIZAÇÃO DO PAINEL GERAL ---
  function renderizarPainel() {
    try {
      const section = document.querySelector("#sec-painel-estudante, [id*='painel-estudante']");
      if (!section) return;

      let container = document.getElementById("painel-desempenho");
      if (!container) {
        container = document.createElement("div");
        container.id = "painel-desempenho";
        section.appendChild(container);
      }

      let historico = obterHistorico();
      let stats = { 1: {tot:0, ac:0}, 2: {tot:0, ac:0}, 3: {tot:0, ac:0}, 4: {tot:0, ac:0}, 5: {tot:0, ac:0}, 6: {tot:0, ac:0} };
      let dadosDiarios = {};
      let dadosGerais = {};
      let totalResp = 0;
      let totalAcertos = 0;

      Object.entries(historico).forEach(function([id, item]) {
        if (item.matriz && stats[item.matriz]) {
          stats[item.matriz].tot++;
          if (item.correto) stats[item.matriz].ac++;
          totalResp++;
          if (item.correto) totalAcertos++;
        }

        let mapa = item.tipo === "geral" ? dadosGerais : dadosDiarios;
        let sNum = item.simulado || 1;
        if (!mapa[sNum]) mapa[sNum] = { respondidas: 0, acertos: 0 };
        mapa[sNum].respondidas++;
        if (item.correto) mapa[sNum].acertos++;
      });

      let nivel = "Aprendiz Olímpico";
      let medalha = "🌱";
      if (totalAcertos >= 6) { nivel = "Canguru de Bronze"; medalha = "🥉"; }
      if (totalAcertos >= 16) { nivel = "Canguru de Prata"; medalha = "🥈"; }
      if (totalAcertos >= 35) { nivel = "Canguru de Ouro"; medalha = "🥇"; }
      if (totalAcertos >= 60) { nivel = "Mestre Canguru"; medalha = "🏆"; }

      let html = '<div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:20px; margin:20px 0; font-family:sans-serif;">';
      html += '<h3 style="margin-top:0; color:#1e293b; font-size:18px;">' + medalha + ' Nível Atual: <strong>' + nivel + '</strong></h3>';
      html += '<p style="color:#475569; font-size:14px; margin-bottom:15px;">Total acumulado: <strong>' + totalAcertos + '</strong> acertos em <strong>' + totalResp + '</strong> questões resolvidas.</p>';

      // Matrizes
      html += '<h4 style="color:#334155; margin-bottom:12px; font-size:15px;">Aproveitamento por Matriz Cognitiva:</h4>';
      html += '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap:12px; margin-bottom:25px;">';
      for (let m = 1; m <= 6; m++) {
        let d = stats[m];
        let p = d.tot > 0 ? Math.round((d.ac / d.tot) * 100) : 0;
        let cor = p >= 70 ? "#16a34a" : (p >= 40 ? "#ca8a04" : (d.tot === 0 ? "#94a3b8" : "#dc2626"));

        html += '<div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:12px;">';
        html += '<div style="font-weight:bold; font-size:13px; color:#1e293b;">' + m + '. ' + MATRIZES[m] + '</div>';
        html += '<div style="font-size:12px; color:#64748b; margin:4px 0;">Acertos: ' + d.ac + '/' + d.tot + ' (' + p + '%)</div>';
        html += '<div style="background:#e2e8f0; height:8px; border-radius:4px; overflow:hidden;">';
        html += '<div style="background:' + cor + '; width:' + p + '%; height:100%;"></div>';
        html += '</div></div>';
      }
      html += '</div>';

      // Simulados Gerais (24Q)
      html += '<h4 style="color:#334155; margin-bottom:12px; font-size:15px;">Simulados Oficiais (24 Questões):</h4>';
      html += '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin-bottom:25px;">';
      for (let g = 1; g <= TOTAL_SIMULADOS_GERAIS; g++) {
        let simG = dadosGerais[g] || { respondidas: 0, acertos: 0 };
        let chaveG = "g" + (g < 10 ? "0" + g : g);
        let finG = estaFinalizado(chaveG);

        let bgG = "#ffffff";
        let bordaG = "#e2e8f0";
        let notaG = "Pendente (0/24)";

        if (finG) {
          bordaG = "#16a34a";
          bgG = "#f0fdf4";
          notaG = "Nota Oficial: " + simG.acertos + "/" + QUESTOES_POR_GERAL + " (" + Math.round((simG.acertos / QUESTOES_POR_GERAL) * 100) + "%)";
        } else if (simG.respondidas > 0) {
          bordaG = "#f59e0b";
          bgG = "#fffbeb";
          notaG = "Em andamento: " + simG.respondidas + "/" + QUESTOES_POR_GERAL + " marcadas";
        }

        html += '<div style="background:' + bgG + '; border:1.5px solid ' + bordaG + '; border-radius:8px; padding:12px; text-align:center;">';
        html += '<div style="font-weight:bold; font-size:14px; color:#1e293b;">Simulado Geral ' + g + '</div>';
        html += '<div style="font-size:12px; color:#475569; margin-top:6px; font-weight:600;">' + notaG + '</div>';
        html += '</div>';
      }
      html += '</div>';

      // Treinos Diários (6Q)
      html += '<h4 style="color:#334155; margin-bottom:12px; font-size:15px;">Quadro dos Treinos Diários (6 Questões):</h4>';
      html += '<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap:10px; margin-bottom:25px;">';
      for (let i = 1; i <= TOTAL_SIMULADOS_DIARIOS; i++) {
        let sim = dadosDiarios[i] || { respondidas: 0, acertos: 0 };
        let chaveD = "d" + (i < 10 ? "0" + i : i);
        let finD = estaFinalizado(chaveD);

        let bg = "#ffffff";
        let borda = "#e2e8f0";
        let statusTxt = "Pendente";
        let estrelas = "☆☆☆";

        if (finD) {
          borda = "#22c55e";
          bg = "#f0fdf4";
          statusTxt = sim.acertos + "/" + QUESTOES_POR_TREINO + " Acertos";
          if (sim.acertos === 6) estrelas = "⭐⭐⭐";
          else if (sim.acertos >= 4) estrelas = "⭐⭐☆";
          else if (sim.acertos >= 1) estrelas = "⭐☆☆";
        } else if (sim.respondidas > 0) {
          borda = "#f59e0b";
          bg = "#fffbeb";
          statusTxt = sim.respondidas + "/" + QUESTOES_POR_TREINO + " Feitas";
          estrelas = "⏳ Em curso";
        }

        html += '<div style="background:' + bg + '; border:1.5px solid ' + borda + '; border-radius:8px; padding:10px; text-align:center;">';
        html += '<div style="font-weight:bold; font-size:12px; color:#1e293b;">Treino ' + (i < 10 ? '0' + i : i) + '</div>';
        html += '<div style="font-size:13px; margin:4px 0;">' + estrelas + '</div>';
        html += '<div style="font-size:11px; color:#64748b; font-weight:600;">' + statusTxt + '</div>';
        html += '</div>';
      }
      html += '</div>';

      html += '<button id="btn-reset-tracker" style="margin-top:15px; background:none; border:none; color:#dc2626; font-size:12px; cursor:pointer; text-decoration:underline; font-weight:bold;">Zerar histórico e limpar todas as respostas</button>';
      html += '</div>';

      container.innerHTML = html;

      // Vincula a limpeza total ao botão de reset
      const btnReset = document.getElementById("btn-reset-tracker");
      if (btnReset) {
        btnReset.onclick = executarResetTotal;
      }
    } catch(err) {
      console.error("[Canguru Tracker] Erro ao renderizar painel:", err);
    }
  }

  // --- 7. INICIALIZAÇÃO DA PÁGINA ---
  function inicializarPagina() {
    renderizarPainel();

    let historico = obterHistorico();
    let semHistorico = Object.keys(historico).length === 0;

    // Se o histórico estiver vazio (recém-resetado), força a limpeza de qualquer campo que o navegador tente restaurar
    if (semHistorico) {
      document.querySelectorAll("input[type='radio']").forEach(function(r) {
        r.checked = false;
        r.disabled = false;
      });
      document.querySelectorAll("form").forEach(function(f) {
        f.reset();
      });
    }

    const qExemplo = document.querySelector("[id^='ex-']");
    if (qExemplo) {
      let info = identificarOrigem(extrairIdQuestao(qExemplo));
      let finalizado = estaFinalizado(info.chave);
      aplicarModoExameCSS(finalizado);
      injetarCaixaFinalizacao(info);

      const blocos = document.querySelectorAll(
        "div[data-component='multiplechoice'], .runestone[id], article.exercise, div.exercise, div[id^='ex-']"
      );

      blocos.forEach(el => {
        let qId = extrairIdQuestao(el);
        if (qId && historico[qId]) {
          travarOpcoes(el);
          if (finalizado) {
            estilizarFeedback(el, historico[qId].correto);
          }
        }
      });
    }
  }

  // Intercepta e congela as alternativas no momento do clique
  document.addEventListener("click", function(e) {
    if (e.target && (e.target.matches("button") || e.target.closest("button"))) {
      let bloco = e.target.closest("div[data-component='multiplechoice'], article.exercise, .runestone");
      if (bloco) {
        travarOpcoes(bloco);
      }
      setTimeout(registrarTentativas, 250);
      setTimeout(registrarTentativas, 700);
    }
  });

  window.addEventListener("DOMContentLoaded", inicializarPagina);
  window.addEventListener("load", inicializarPagina);
})();
