const isLogged = true;

const primaPromise = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const numeroCasuale = Math.random();
      resolve(numeroCasuale);
    } else {
      reject(new Error("Utente non loggato"));
    }
  });
};

const secondaPromise = (numeroCasuale) => {
  return new Promise((resolve, reject) => {
    if (numeroCasuale > 0.5) {
      resolve({ nome: "Christian", età: 24 });
    } else {
      reject(new Error("Il numero non è valido"));
    }
  });
};

primaPromise(isLogged)
  .then((numeroCasuale) => {
    return secondaPromise(numeroCasuale);
  })
  .then((dati) => {
    console.log(dati);
  })
  .catch((errore) => {
    console.error(errore.message);
  })
  .finally(() => {
    console.log("Chiusura");
  });