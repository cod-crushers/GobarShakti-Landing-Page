function calculateNPK() {
    // Get user inputs for N, P, K, and weight
    const nitrogen = parseFloat(document.getElementById("nitrogen").value);
    const phosphorus = parseFloat(document.getElementById("phosphorus").value);
    const potassium = parseFloat(document.getElementById("potassium").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(nitrogen) || isNaN(phosphorus) || isNaN(potassium) || isNaN(weight)) {
        document.getElementById("result").innerText = "Please enter valid values.";
        return;
    }

    const resultText = `
        Nitrogen (N): ${nitrogen}%<br>
        Phosphorus (P): ${phosphorus}%<br>
        Potassium (K): ${potassium}%<br>
        Total weight of fertilizer: ${weight}kg
    `;
    document.getElementById("result").innerHTML = resultText;
}
function checkNPK() {
    const nitrogen = parseFloat(document.getElementById("nitrogen").value);
    const phosphorus = parseFloat(document.getElementById("phosphorus").value);
    const potassium = parseFloat(document.getElementById("potassium").value);

    const optimalRanges = {
        N: { min: 1.5, max: 4 },
        P: { min: 20, max: 40 },
        K: { min: 150, max: 300 }
    };

    let resultText = "";

    // Nitrogen (N) suggestion
    if (nitrogen >= optimalRanges.N.min && nitrogen <= optimalRanges.N.max) {
        resultText += "<span style='color: green;'>Nitrogen (N): Optimal</span><br>";
    } else if (nitrogen < optimalRanges.N.min) {
        resultText += "<span style='color: yellow;'>Nitrogen (N): Moderate</span><br>";
        resultText += "<span style='color: yellow;'>Suggested: Add ammonium nitrate or urea to increase nitrogen levels.</span><br>";
    } else {
        resultText += "<span style='color: red;'>Nitrogen (N): High</span><br>";
        resultText += "<span style='color: red;'>Suggested: Add nitrogen inhibitors or reduce nitrogen-rich fertilizers.</span><br>";
    }

    // Phosphorus (P) suggestion
    if (phosphorus >= optimalRanges.P.min && phosphorus <= optimalRanges.P.max) {
        resultText += "<span style='color: green;'>Phosphorus (P): Optimal</span><br>";
    } else if (phosphorus < optimalRanges.P.min) {
        resultText += "<span style='color: yellow;'>Phosphorus (P): Moderate</span><br>";
        resultText += "<span style='color: yellow;'>Suggested: Add rock phosphate or superphosphate to increase phosphorus levels.</span><br>";
    } else {
        resultText += "<span style='color: red;'>Phosphorus (P): High</span><br>";
        resultText += "<span style='color: red;'>Suggested: Reduce phosphorus applications or use a phosphorus binder.</span><br>";
    }

    // Potassium (K) suggestion
    if (potassium >= optimalRanges.K.min && potassium <= optimalRanges.K.max) {
        resultText += "<span style='color: green;'>Potassium (K): Optimal</span><br>";
    } else if (potassium < optimalRanges.K.min) {
        resultText += "<span style='color: yellow;'>Potassium (K): Moderate</span><br>";
        resultText += "<span style='color: yellow;'>Suggested: Add potassium sulfate or potassium chloride to increase potassium levels.</span><br>";
    } else {
        resultText += "<span style='color: red;'>Potassium (K): High</span><br>";
        resultText += "<span style='color: red;'>Suggested: Reduce potassium-rich fertilizers or use a potassium inhibitor.</span><br>";
    }

    document.getElementById("suggestionResult").innerHTML = resultText;
}
