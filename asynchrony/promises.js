/* 
    PROMISES STATUS
    - pending 
    - fullfilled
    - rejected

    PROMISES CALLBACKS
    - resolve
    - reject

    PROMISES METHODS
    - then()
    - catch()

*/

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let operationSucessfull = false;

        if(operationSucessfull) {
            resolve('The operation was successfully');
        } else {
            reject('fail the operation');
        }
    }, 5000);
});

promise
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });