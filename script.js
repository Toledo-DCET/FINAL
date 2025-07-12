const recipes = [
    {
        title: "Chicken Adobo",
        emoji: "🍗",
        description: "The Philippines' unofficial national dish - tender chicken braised in soy sauce, vinegar, and garlic.",
        ingredients: [
            "2 lbs chicken (cut into pieces)",
            "1/2 cup soy sauce",
            "1/4 cup white vinegar",
            "6 cloves garlic (minced)",
            "2 bay leaves",
            "1 tsp black peppercorns",
            "1 medium onion (sliced)",
            "2 tbsp cooking oil"
        ],
        instructions: [
            "Heat oil in a large pot over medium heat",
            "Sauté garlic and onion until fragrant",
            "Add chicken pieces and brown on all sides",
            "Pour in soy sauce and vinegar, add bay leaves and peppercorns",
            "Bring to a boil, then reduce heat and simmer for 30-40 minutes",
            "Let the sauce reduce until thick and glossy",
            "Serve hot with steamed rice"
        ],
        cookTime: "45 mins",
        servings: "4-6",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Sinigang na Baboy",
        emoji: "🍲",
        description: "A comforting sour soup with pork and vegetables, perfect for rainy days.",
        ingredients: [
            "2 lbs pork ribs or belly",
            "1 packet tamarind soup base",
            "2 tomatoes (quartered)",
            "1 large onion (quartered)",
            "2 cups kangkong (water spinach)",
            "1 cup string beans",
            "2 pieces taro root",
            "3 green chili peppers",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Boil pork in water for 1 hour until tender",
            "Add tomatoes and onion, cook for 10 minutes",
            "Add tamarind soup base and mix well",
            "Add taro root and string beans, cook for 15 minutes",
            "Add kangkong and chili peppers",
            "Season with salt and pepper",
            "Simmer for 5 more minutes and serve hot"
        ],
        cookTime: "1.5 hours",
        servings: "6-8",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Pancit Canton",
        emoji: "🍜",
        description: "Stir-fried wheat noodles with vegetables and meat - a party favorite!",
        ingredients: [
            "1 lb pancit canton noodles",
            "1/2 lb pork (sliced thin)",
            "1/2 lb shrimp (peeled)",
            "2 cups cabbage (shredded)",
            "1 cup carrots (julienned)",
            "1 cup snow peas",
            "4 cloves garlic (minced)",
            "3 tbsp soy sauce",
            "2 tbsp oyster sauce",
            "Cooking oil for frying"
        ],
        instructions: [
            "Soak noodles in warm water until soft, drain",
            "Heat oil in a large wok or pan",
            "Stir-fry pork until cooked, add shrimp",
            "Add garlic and cook until fragrant",
            "Add vegetables and stir-fry for 3 minutes",
            "Add noodles, soy sauce, and oyster sauce",
            "Toss everything together for 5 minutes",
            "Serve immediately with lemon wedges"
        ],
        cookTime: "30 mins",
        servings: "4-6",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Lechon Kawali",
        emoji: "🥓",
        description: "Crispy deep-fried pork belly that's crunchy outside and tender inside.",
        ingredients: [
            "3 lbs pork belly (skin on)",
            "1 tbsp salt",
            "1 tsp black pepper",
            "3 bay leaves",
            "1 tbsp peppercorns",
            "Oil for deep frying",
            "Lechon sauce for serving"
        ],
        instructions: [
            "Boil pork belly with salt, pepper, bay leaves, and peppercorns for 1 hour",
            "Remove from water and let cool completely",
            "Pat dry with paper towels thoroughly",
            "Heat oil to 350°F in a deep fryer or large pot",
            "Carefully deep fry pork belly until golden and crispy",
            "Remove and drain on paper towels",
            "Chop into serving pieces and serve with lechon sauce"
        ],
        cookTime: "2 hours",
        servings: "6-8",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Halo-Halo",
        emoji: "🍧",
        description: "The ultimate Filipino dessert - a colorful mix of sweet beans, fruits, and ice cream.",
        ingredients: [
            "Shaved ice",
            "1/4 cup sweetened red beans",
            "1/4 cup sweetened white beans",
            "2 tbsp sweetened banana",
            "2 tbsp jackfruit strips",
            "2 tbsp coconut strips",
            "1 scoop ube ice cream",
            "1 slice leche flan",
            "Evaporated milk",
            "Toasted rice flakes (pinipig)"
        ],
        instructions: [
            "In a tall glass, layer the sweetened beans at the bottom",
            "Add banana, jackfruit, and coconut strips",
            "Fill glass with shaved ice",
            "Top with ube ice cream and leche flan",
            "Drizzle with evaporated milk",
            "Sprinkle toasted rice flakes on top",
            "Serve with a long spoon and mix before eating"
        ],
        cookTime: "15 mins",
        servings: "1",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Beef Kare-Kare",
        emoji: "🥩",
        description: "Rich peanut stew with tender beef and vegetables, served with shrimp paste.",
        ingredients: [
            "3 lbs beef oxtail (cut into pieces)",
            "1 lb beef tripe (optional)",
            "1 cup ground peanuts",
            "3 tbsp rice flour",
            "2 tbsp annatto oil",
            "1 bunch bok choy",
            "1 eggplant (sliced)",
            "1 bundle string beans",
            "Shrimp paste (bagoong) for serving"
        ],
        instructions: [
            "Boil oxtail and tripe in water for 2-3 hours until tender",
            "Reserve the broth and set meat aside",
            "In a pot, mix ground peanuts and rice flour with some broth",
            "Add annatto oil and simmer until thick",
            "Add the cooked meat and more broth as needed",
            "Add vegetables and cook until tender",
            "Serve hot with shrimp paste on the side"
        ],
        cookTime: "3 hours",
        servings: "6-8",
        rating: "⭐⭐⭐⭐⭐"
    }
];

function createRecipeCard(recipe) {
    return `
        <div class="recipe-card" onclick="toggleRecipe(this)">
            <div class="recipe-title">
                <span class="recipe-emoji">${recipe.emoji}</span>
                ${recipe.title}
            </div>
            <div class="recipe-description">${recipe.description}</div>
            
            <div class="recipe-meta">
                <span><strong>⏱️ Cook Time:</strong> ${recipe.cookTime}</span>
                <span><strong>🍽️ Servings:</strong> ${recipe.servings}</span>
                <span class="rating">${recipe.rating}</span>
            </div>
            
            <button class="show-more-btn">Show Recipe</button>
            
            <div class="recipe-details hidden">
                <div class="ingredients-section">
                    <div class="section-title">📝 Ingredients</div>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="instructions-section">
                    <div class="section-title">👩‍🍳 Instructions</div>
                    <ol class="instructions-list">
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>
    `;
}

function toggleRecipe(card) {
    const details = card.querySelector('.recipe-details');
    const button = card.querySelector('.show-more-btn');
    
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        button.textContent = 'Hide Recipe';
        card.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        details.classList.add('hidden');
        button.textContent = 'Show Recipe';
        card.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}

function displayRecipes(recipesToShow) {
    const container = document.getElementById('recipesContainer');
    container.innerHTML = recipesToShow.map(recipe => createRecipeCard(recipe)).join('');
}

function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );
    displayRecipes(filteredRecipes);
}

document.getElementById('searchInput').addEventListener('input', searchRecipes);

document.addEventListener('DOMContentLoaded', function() {
    displayRecipes(recipes);
    
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    alert(`🎲 Random Recipe Suggestion: ${randomRecipe.title}\n\n${randomRecipe.description}`);
}

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        getRandomRecipe();
    }
});

let isLoginMode = true;

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById("authTitle").innerText = isLoginMode ? "Login" : "Sign Up";
    document.getElementById("authToggleText").innerHTML = isLoginMode
        ? `Don't have an account? <a href="#" onclick="toggleAuthMode()">Sign up here</a>`
        : `Already have an account? <a href="#" onclick="toggleAuthMode()">Login here</a>`;
    document.getElementById("authError").innerText = '';
}

function handleAuth() {
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value.trim();
    const errorDiv = document.getElementById("authError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
        errorDiv.innerText = "Please fill in all fields.";
        return;
    }
    if (!emailRegex.test(email)) {
        errorDiv.innerText = "Invalid email format.";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (isLoginMode) {
        if (!users[email] || users[email] !== password) {
            errorDiv.innerText = "Incorrect email or password.";
            return;
        }
    } else {
        if (users[email]) {
            errorDiv.innerText = "Email is already registered.";
            return;
        }
        users[email] = password;
        localStorage.setItem("users", JSON.stringify(users));
    }

    localStorage.setItem("loggedInUser", email);

    document.getElementById("authModal").style.display = "none";
    document.querySelector(".container").style.display = "block";
    document.getElementById("userInfo").classList.remove("hidden");
    document.getElementById("logoutBtn").style.display = "inline-block";
    document.getElementById("userEmail").innerText = email;

    displayRecipes(recipes);
}

document.addEventListener("DOMContentLoaded", function () {
    const userInfo = document.getElementById("userInfo");
    const logoutBtn = document.getElementById("logoutBtn");
    const userEmail = document.getElementById("userEmail");
    const user = localStorage.getItem("loggedInUser");

    userInfo.classList.remove("hidden");

    if (!user) {
        document.getElementById("authModal").style.display = "flex";
        document.querySelector(".container").style.display = "none";
        userEmail.innerText = "";
        logoutBtn.style.display = "none";
    } else {
        document.getElementById("authModal").style.display = "none";
        document.querySelector(".container").style.display = "block";
        userEmail.innerText = user;
        logoutBtn.style.display = "inline-block";
        displayRecipes(recipes);
    }
});

function confirmLogout() {
    document.getElementById("logoutConfirmModal").classList.remove("hidden");
}

function closeLogoutConfirm() {
    document.getElementById("logoutConfirmModal").classList.add("hidden");
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    document.getElementById("logoutConfirmModal").classList.add("hidden");
    document.getElementById("authModal").style.display = "flex";
    document.querySelector(".container").style.display = "none";
    document.getElementById("userEmail").innerText = "";
    document.getElementById("logoutBtn").style.display = "none";
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");

    document.getElementById("logoutConfirmModal").classList.add("hidden");

    document.getElementById("authModal").style.display = "flex";
    document.querySelector(".container").style.display = "none";

    document.getElementById("userEmail").innerText = "";

    document.getElementById("logoutBtn").style.display = "none";

    document.getElementById("authEmail").value = "";
    document.getElementById("authPassword").value = "";

    document.getElementById("authError").innerText = "";
}


