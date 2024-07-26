const bank = [
    {
      id: '12345',
      pin: '1111',
      accounts: [
        { number: '001', type: 'savings', balance: 500000 },
        { number: '002', type: 'checking', balance: 200000 },
      ],
    },
    {
      id: '67890',
      pin: '2222',
      accounts: [
        { number: '003', type: 'savings', balance: 1000000 },
      ],
    },
  ];
  
  let currentClient = null;
  let pinAttempts = 0;
  
  function validateClient(id, pin) {
    return bank.find(client => client.id === id && client.pin === pin) || null;
  }
  
  function getAccount(client, accountNumber) {
    return client.accounts.find(account => account.number === accountNumber);
  }
  
  function approveWithdrawal(client, accountNumber, amount) {
    const account = getAccount(client, accountNumber);
    if (account && account.balance >= amount && amount % 50000 === 0) {
      account.balance -= amount;
      return true;
    }
    return false;
  }
  
  function deposit(client, accountNumber, amount) {
    const account = getAccount(client, accountNumber);
    if (account) {
      account.balance += amount;
      return true;
    }
    return false;
  }
  
  function transfer(client, fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = getAccount(client, fromAccountNumber);
    const toAccount = getAccount(client, toAccountNumber);
    if (fromAccount && toAccount && fromAccount.balance >= amount) {
      fromAccount.balance -= amount;
      toAccount.balance += amount;
      return true;
    }
    return false;
  }
  
  function getBalance(client, accountNumber) {
    const account = getAccount(client, accountNumber);
    return account ? account.balance : null;
  }
  
  function isValidNumber(input) {
    const number = parseInt(input, 10);
    return !isNaN(number) && number > 0;
  }
  
  function startATM() {
    while (!currentClient && pinAttempts < 3) {
      const clientId = prompt("Ingrese su documento de identidad:");
      const pin = prompt("Ingrese su PIN de 4 dígitos:");
      currentClient = validateClient(clientId, pin);
      if (!currentClient) {
        pinAttempts++;
        alert(`PIN incorrecto. Intento ${pinAttempts} de 3.`);
      }
    }
    if (currentClient) {
      showMenu();
    } else {
      alert("Se ha excedido el número de intentos. Saliendo de la aplicación.");
    }
  }
  //ME
  function showMenu() {
    let exit = false;
    while (!exit) {
      const option = prompt(
        "Seleccione una opción:\n1. Retiro de efectivo\n2. Depósito\n3. Transferencia\n4. Consulta de saldo\n5. Salir"
      );
      switch (option) {
        case '1':
          handleWithdrawal();
          break;
        case '2':
          handleDeposit();
          break;
        case '3':
          handleTransfer();
          break;
        case '4':
          handleBalanceInquiry();
          break;
        case '5':
          exit = true;
          break;
        default:
          alert("Opción no válida.");
      }
    }
    currentClient = null;
    pinAttempts = 0;
    alert("Gracias por usar el cajero automático.");
  }
  
  function handleWithdrawal() {
    const accountNumber = prompt("Ingrese el número de cuenta:");
    const amountInput = prompt("Ingrese el monto a retirar (múltiplos de $50000):");
    if (!isValidNumber(amountInput)) {
      alert("Monto inválido. Debe ser un número positivo en múltiplos de $50000.");
      return;
    }
    const amount = parseInt(amountInput, 10);
    if (approveWithdrawal(currentClient, accountNumber, amount)) {
      alert(`Retiro exitoso, puede tomar $${amount} de la bandeja principal.`);
    } else {
      alert("No se pudo realizar el retiro. Verifique los datos e intente nuevamente.");
    }
  }
  
  function handleDeposit() {
    const accountNumber = prompt("Ingrese el número de cuenta:");
    const amountInput = prompt("Ingrese el monto a depositar:");
    if (!isValidNumber(amountInput)) {
      alert("Monto inválido. Debe ser un número positivo.");
      return;
    }
    const amount = parseInt(amountInput, 10);
    const type = prompt("Ingrese el tipo de depósito (efectivo/cheque):").toLowerCase();
    if (type === 'efectivo' || type === 'cheque') {
      if (deposit(currentClient, accountNumber, amount)) {
        alert("Depósito exitoso.");
      } else {
        alert("No se pudo realizar el depósito. Verifique los datos e intente nuevamente.");
      }
    } else {
      alert("Tipo de depósito no válido.");
    }
  }
  
  function handleTransfer() {
    const fromAccountNumber = prompt("Ingrese el número de cuenta desde la cual desea transferir:");
    const toAccountNumber = prompt("Ingrese el número de cuenta a la cual desea transferir:");
    const amountInput = prompt("Ingrese el monto a transferir:");
    if (!isValidNumber(amountInput)) {
      alert("Monto inválido. Debe ser un número positivo.");
      return;
    }
    const amount = parseInt(amountInput, 10);
    if (transfer(currentClient, fromAccountNumber, toAccountNumber, amount)) {
      alert("Transferencia exitosa.");
    } else {
      alert("No se pudo realizar la transferencia. Verifique los datos e intente nuevamente.");
    }
  }
  
  function handleBalanceInquiry() {
    const accountNumber = prompt("Ingrese el número de cuenta:");
    const balance = getBalance(currentClient, accountNumber);
    if (balance !== null) {
      alert(`El saldo de la cuenta ${accountNumber} es $${balance}.`);
    } else {
      alert("No se pudo obtener el saldo. Verifique los datos e intente nuevamente.");
    }
  }
  
  // Iniciar el cajero automático
  startATM();
  