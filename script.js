function changeInput() {
    const conversionType = document.getElementById("conversionType").value;
    if (conversionType === "binaryToDecimal") {
        document.getElementById("binaryInput").style.display = "block";
        document.getElementById("binaryInputLabel").style.display = "block";
        document.getElementById("decimalInput").style.display = "none";
        document.getElementById("decimalInputLabel").style.display = "none";
    } else {
        document.getElementById("decimalInput").style.display = "block";
        document.getElementById("decimalInputLabel").style.display = "block";
        document.getElementById("binaryInput").style.display = "none";
        document.getElementById("binaryInputLabel").style.display = "none";
    }
}

function convert() {
    const conversionType = document.getElementById("conversionType").value;

    if (conversionType === "binaryToDecimal") {
        const binaryInput = document.getElementById("binaryInput").value;
        if (binaryInput === '' || !/^[01]+$/.test(binaryInput)) {
            document.getElementById("result").innerText = "Invalid binary number";
            return;
        }

        const decimalResult = parseInt(binaryInput, 2);
        document.getElementById("result").innerText = `Decimal: ${decimalResult}`;
    } else {
        const decimalInput = document.getElementById("decimalInput").value;
        if (decimalInput === '' || !/^[0-9]+$/.test(decimalInput)) {
            document.getElementById("result").innerText = "Invalid decimal number";
            return;
        }

        const binaryResult = (parseInt(decimalInput, 10) >>> 0).toString(2);
        document.getElementById("result").innerText = `Binary: ${binaryResult}`;
    }
}