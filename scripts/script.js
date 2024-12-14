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

    const recommendations = {
        allPurpose: { N: [1, 3], P: [3, 4], K: [2, 2] },
        vegetative: { N: [3, 4], P: [1, 2], K: [2, 3] },
        flowering: { N: [2, 5], P: [3, 10], K: [4, 10] },
        rootDevelopment: { N: [1, 2], P: [2, 3], K: [3, 5] },
        microbialHealth: { N: [1, 2], P: [2, 3], K: [2, 3] },
    };

    let resultText = "";

    // Nitrogen (N) analysis
    if (nitrogen >= recommendations.allPurpose.N[0] && nitrogen <= recommendations.allPurpose.N[1]) {
        resultText += "<span style='color: green;'>Nitrogen (N): Optimal for general growth</span><br>";
    } else if (nitrogen < recommendations.allPurpose.N[0]) {
        resultText += "<span style='color: yellow;'>Nitrogen (N): Low</span><br>";
        resultText += "<span style='color: yellow;'>Suggested: Add green waste or legume residues to increase nitrogen levels.</span><br>";
    } else {
        resultText += "<span style='color: red;'>Nitrogen (N): High</span><br>";
        resultText += "<span style='color: red;'>Suggested: Mix with carbon-rich material to lower nitrogen levels.</span><br>";
    }

    // Phosphorus (P) analysis
    if (phosphorus >= recommendations.allPurpose.P[0] && phosphorus <= recommendations.allPurpose.P[1]) {
        resultText += "<span style='color: green;'>Phosphorus (P): Optimal for general growth</span><br>";
    } else if (phosphorus < recommendations.allPurpose.P[0]) {
        resultText += "<span style='color: yellow;'>Phosphorus (P): Low</span><br>";
        resultText += "<span style='color: yellow;'>Suggested: Add bone meal, rock phosphate, or powdered fish bones to increase phosphorus levels.</span><br>";
    } else {
        resultText += "<span style='color: red;'>Phosphorus (P): High</span><br>";
        resultText += "<span style='color: red;'>Suggested: Dilute with low-phosphorus compost to reduce levels.</span><br>";
    }

    // Potassium (K) analysis
    if (potassium >= recommendations.allPurpose.K[0] && potassium <= recommendations.allPurpose.K[1]) {
        resultText += "<span style='color: green;'>Potassium (K): Optimal for general growth</span><br>";
    } else if (potassium < recommendations.allPurpose.K[0]) {
        resultText += "<span style='color: yellow;'>Potassium (K): Low</span><br>";
        resultText += "<span style='color: yellow;'>Suggested: Add wood ash or composted fruit waste to increase potassium levels.</span><br>";
    } else {
        resultText += "<span style='color: red;'>Potassium (K): High</span><br>";
        resultText += "<span style='color: red;'>Suggested: Mix with low-potassium organic matter like leaf mold.</span><br>";
    }

    document.getElementById("suggestionResult").innerHTML = resultText;
}
// Get the elements
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");

// Toggle the menu when the hamburger icon is clicked
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Remove the close button for desktop view
document.addEventListener("DOMContentLoaded", () => {
    const screenWidth = window.innerWidth;
    
    // Hide close button on desktop
    if (screenWidth > 768) {
        navClose.style.display = "none";
    }

    // Ensure responsive behavior on resize
    window.addEventListener("resize", () => {
        const currentWidth = window.innerWidth;
        
        if (currentWidth > 768) {
            navClose.style.display = "none";
            navMenu.classList.remove("active");
        }
    });
});

// Close the menu when a menu item is clicked in mobile view
document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove("active");
        }
    });
});
