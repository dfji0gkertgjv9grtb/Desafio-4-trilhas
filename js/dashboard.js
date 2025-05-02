const dashboard = document.getElementById("dashboard");

async function carregarEstados() {
  try {
    const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    const estados = await response.json();

    dashboard.innerHTML = "<h2>Estados do Brasil</h2><ul>" +
      estados.map(estado => `
        <li>
          <strong>${estado.nome}</strong>: 
          Acesso estimado à educação básica: ${(Math.random() * 100).toFixed(1)}%
        </li>
      `).join("") + "</ul>";

  } catch (error) {
    dashboard.innerHTML = "<p>Erro ao carregar dados</p>";
    console.error(error);
  }
}

carregarEstados();