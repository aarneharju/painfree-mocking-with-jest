const { moduleFileExtensions } = require("../jest.config")

const recipeList = [
    {
        "title": "Emerald Pea Pasta",
        "ingredients": "1 c Frozen green peas, defrosted|2 tb Chopped fresh mint|1 1/2 c All purpose flour|1 pn Salt|1 pn Pepper",
        "servings": "2 Servings",
        "instructions": "Place peas & mint in a food processor & puree. Add remaining ingredients & pulse until a ball of dough forms. Turn out onto a floured surface & knead until smooth & pliable like a firm bread dough. Place dough in a bowl, cover with plastic wrap & let rest for at least 30 minutes. Shape & cook dough as desired."
    }
]

const getRecipe = (recipe) => {
    return recipeList
}

module.exports = getRecipe