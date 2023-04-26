 const calculateLoan = () => {
    let amount = document.getElementById("amount").value;
    let interest = document.getElementById("interest").value;
    let months = document.getElementById("months").value;

    let monthlyPayment = ((amount / months) + interest);
    let totalInterest = (amount * (interest * 13.75)) / months;
    let totalPayment = parseFloat(amount) + parseFloat(totalInterest);

 document.getElementById("result").innerHTML = 
            `<h2>Resultado</h2>

            <h4> Total a Pagar R$: 
            ${parseFloat(totalPayment).toFixed(1)}
            </h4>

            <h4>Valor Mensal R$:
            ${parseFloat(monthlyPayment).toFixed(1)}
            </h4>

            <h4>Total de Juros :
            ${parseFloat(totalInterest).toFixed(1)}
            </h4>`;
}