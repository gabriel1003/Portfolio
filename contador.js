// Inicializa o contador
let contador = localStorage.getItem('contador') || 0;
contador++;

// Cria o elemento <span>
const spanContador = document.createElement('span');

// Cria a mensagem com o número do visitante
const mensagem = `Olá, você é o visitante número ${contador}`;

// Define o conteúdo do <span>
spanContador.textContent = mensagem;

// Adiciona o <span> ao corpo do documento (ou a outro elemento desejado)
document.body.appendChild(spanContador); // Você pode substituir 'document.body' por outro elemento

// Salva o contador atualizado no localStorage
localStorage.setItem('contador', contador);