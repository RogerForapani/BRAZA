// Simula a consulta a dados do token (substitua por uma chamada real à API)
async function fetchTokenData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          price: Math.random() * 100, // Preço do token
          communitySize: Math.floor(Math.random() * 1000), // Tamanho da comunidade
        });
      }, 1000);
    });
  }
  
  // Gera brasas com base em cor e posição
  function createFire(color) {
    const fireContainer = document.getElementById("fire-container");
  
    const fire = document.createElement("div");
    fire.className = `fire ${color}`;
    fire.style.left = `${Math.random() * 100}%`; // Posição aleatória horizontal
    fire.style.animationDelay = `${Math.random() }s`; // Atraso aleatório
    fireContainer.appendChild(fire);
  
    // Remove a brasa quando a animação termina
    setTimeout(() => {
      fire.remove();
    }, 3000); // Duração da animação "rise"
  }
  
  // Função que ajusta a quantidade de brasas com base no preço
  function updateFireBasedOnPrice(price) {
    const fireContainer = document.getElementById("fire-container");
    const fireCount = Math.min(10000000, Math.max(10, Math.floor(price * 1))); // Calcula o número de brasas
  
    // Gera brasas extras se o preço aumentar
    const colors = ["yellow", "green", "blue"];
    for (let i = 0; i < fireCount; i++) {
      const color = colors[i % colors.length];
      createFire(color);
    }
  }
  
  // Atualiza os dados do token periodicamente
  async function updateTokenData() {
    const data = await fetchTokenData();
  
    // Atualiza as informações no HTML
    document.getElementById("token-data").innerText = `Preço: $${data.price.toFixed(2)} | Comunidade: ${data.communitySize} membros`;
  
    // Atualiza as brasas com base no preço
    updateFireBasedOnPrice(data.price);
  
    return data;
  }
  
  // Inicializa o sistema
  function main() {
    // Atualiza os dados do token e as brasas a cada 5 segundos
    setInterval(() => {
      updateTokenData();
    }, 1000);
  
    // Primeira execução
    updateTokenData();
  }
  
  // Inicia o script
  main();
  