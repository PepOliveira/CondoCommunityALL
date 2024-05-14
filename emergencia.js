document.getElementById('emergencyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter descrição da emergência
    var emergencyDescription = document.getElementById('emergencyDescription').value;
    
    // Verificar se precisa de ajuda
    var needHelp = document.getElementById('needHelp').checked;
    
    // Simular envio dos dados (substitua por sua lógica real de envio)
    console.log("Descrição da Emergência:", emergencyDescription);
    console.log("Ainda precisa de ajuda:", needHelp);
    
    // Limpar o formulário após o envio (opcional)
    document.getElementById('emergencyForm').reset();
});
