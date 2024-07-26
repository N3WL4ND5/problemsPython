const bank = [
    {
      id: '1094977200',
      pin: '1011',
      accounts: [
        { number: '001', type: 'savings', balance: 500000 },
        { number: '002', type: 'checking', balance: 200000 },
      ],
    },
    {
      id: '1005087694',
      pin: '1110',
      accounts: [
        { number: '003', type: 'savings', balance: 1000000 },
      ],
    },
  ];
  
  let currentClient = null;
  let pinAttempts = 0;
                           //LOGIN//
                           
  function validateClient(id, pin) {
    return bank.find(client => client.id === id && client.pin === pin) || null;
  }
  
  function getAccount(client, accountNumber) {
    return client.accounts.find(account => account.number === accountNumber);
  }

                         // VALIDACIONES //

  //1. VALIDAR RETIRO DE EFECTIVO
  function approveWithdrawal(client, accountNumber, amount) {
    const account = getAccount(client, accountNumber);
    if (account && account.balance >= amount && amount % 50000 === 0) {
      account.balance -= amount;
      return true;
    }
    return false;
  }
  //2. VALIDAR DEPÓSITO
  function deposit(client, accountNumber, amount) {
    const account = getAccount(client, accountNumber);
    if (account) {
      account.balance += amount;
      return true;
    }
    return false;
  }
  //3. VALIDAR TRANSFERENCIAS
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
  //4. VALIDAR CONSULTA SALDO
  function getBalance(client, accountNumber) {
    const account = getAccount(client, accountNumber);
    return account ? account.balance : null;
  }
                        //CAJERO//

  //.ENTRAR AL CAJERO
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
  // MENU
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
                       //TRANSACCIONES//

  //RETIRO                    
  function handleWithdrawal() {
    const accountNumber = prompt("Ingrese el número de cuenta:");
    const amount = parseInt(prompt("Ingrese el monto a retirar (múltiplos de $50000):"), 10);
    if (approveWithdrawal(currentClient, accountNumber, amount)) {
      alert(`Retiro exitoso, puede tomar $${amount} de la bandeja principal.`);
    } else {
      alert("No se pudo realizar el retiro. Verifique los datos e intente nuevamente.");
    }
  }
  //DEPOSITO
  function handleDeposit() {
    const accountNumber = prompt("Ingrese el número de cuenta:");
    const amount = parseInt(prompt("Ingrese el monto a depositar:"), 10);
    const type = prompt("Ingrese el tipo de depósito (efectivo/cheque):");
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
  //TRANSFERENCIAS
  function handleTransfer() {
    const fromAccountNumber = prompt("Ingrese el número de cuenta desde la cual desea transferir:");
    const toAccountNumber = prompt("Ingrese el número de cuenta a la cual desea transferir:");
    const amount = parseInt(prompt("Ingrese el monto a transferir:"), 10);
    if (transfer(currentClient, fromAccountNumber, toAccountNumber, amount)) {
      alert("Transferencia exitosa.");
    } else {
      alert("No se pudo realizar la transferencia. Verifique los datos e intente nuevamente.");
    }
  }
  //SALDO
  function handleBalanceInquiry() {
    const accountNumber = prompt("Ingrese el número de cuenta:");
    const balance = getBalance(currentClient, accountNumber);
    if (balance !== null) {
      alert(`El saldo de la cuenta ${accountNumber} es $${balance}.`);
    } else {
      alert("No se pudo obtener el saldo. Verifique los datos e intente nuevamente.");
    }
  }
  
 //inicio
  startATM();
console.log (bank);