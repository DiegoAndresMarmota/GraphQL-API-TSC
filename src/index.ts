//https://www.bbcgoodfood.com/recipes/collection/dessert-recipes

import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone";

const desserts = [
    {
        "name": "Fruit Vacherin",
        "photoUrl": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-chocolate-molten-cakes-37a25eb.jpg?quality=90&webp=true&resize=300,272",
        "ingredients": [
            {
                "first_ingredient": "100g butter, plus extra to grease",
                "second_ingredient": "100g dark chocolate, chopped",
                "third_ingredient": "150g light brown soft sugar",
                "fourth_ingredient": "3 large eggs",
                "fifth_ingredient": "1/2 tsp vanilla extract",
                "sixth_ingredient": "100g sugar",
                "seventh_ingredient": "50g plain flour",
                "eighth_ingredient": "single cream, to serve"
            }
        ],
        "nutrition": [
            {
                "kcal": 391,
                "fat": "24g",
                "saturates": "14g",
                "carbs": "36g",
                "sugars": "28g",
                "fibre": "2g",
                "protein": "6g",
                "salt": "0.5g"
            }

        ],
        "method": [
            {
                "step_1": "Heat oven to 200C/180C fan/gas 6. Butter 6 dariole moulds or basins well and place on a baking tray.",
                "step_2": "Put 100g butter and 100g chopped dark chocolate in a heatproof bowl and set over a pan of hot water (or alternatively put in the microwave and melt in 30 second bursts on a low setting) and stir until smooth. Set aside to cool slightly for 15 mins.",
                "step_3": "Using an electric hand whisk, mix in 150g light brown soft sugar, then 3 large eggs, one at a time, followed by ½ tsp vanilla extract and finally 50g plain flour. Divide the mixture among the darioles or basins.",
                "step_4": "You can now either put the mixture in the fridge, or freezer until youre ready to bake them. Can be cooked straight from frozen for 16 mins, or bake now for 10-12 mins until the tops are firm to the touch but the middles still feel squidgy.",
                "step_5": "Carefully run a knife around the edge of each pudding, then turn out onto serving plates and serve with single cream."
            }
        ]
    },
    {
        "name": "Salted chocolate & hazelnut brownies",
        "photoUrl": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salted-chocolate-hazelnut-brownies-250693d.jpg?quality=90&webp=true&resize=300,272",
        "ingredients": [
            {
                "first_ingredient": "100g slightly salted butter, cut into small pieces, plus extra for the tin",
                "second_ingredient": "200g 70% dark chocolate, broken into chunks",
                "third_ingredient": "150g chocolate and hazelnut spread",
                "fourth_ingredient": "3 eggs, beaten",
                "fifth_ingredient": "200g golden caster sugar",
                "sixth_ingredient": "150g plain flour",
                "seventh_ingredient": "100g toasted pecan nuts, roughly chopped",
                "eighth_ingredient": "ice cream and caramel sauce, to serve"
            }
        ],
        "nutrition": [
            {
                "kcal": 418,
                "fat": "25g",
                "saturates": "10g",
                "carbs": "40g",
                "sugars": "28g",
                "fibre": "3g",
                "protein": "6g",
                "salt": "0.2g"
            }

        ],
        "method": [
            {
                "step_1": "Heat oven to 180C/160C fan/ gas 4. Butter and line the base and sides of a 20cm square tin. Put the butter, chocolate and chocolate spread in a heatproof bowl and melt over a pan of lightly simmering water. Once melted, stir and set aside to cool a little.",
                "step_2": "In another bowl, use an electric whisk to beat the eggs and sugar together for 5 mins until light and fluffy. Pour in the chocolate mixture and whisk briefly to combine. Sift in the flour and gently fold through the mixture, then add most of the pecans. Scrape the mixture into the tin and spread out with a spatula. Scatter over the last of the pecans and a good sprinkling of sea salt.",
                "step_3": "Bake for 30-35 mins until set but a little gooey in the middle. Cool, then cut into squares and serve with ice cream and caramel sauce."
            }
        ]
    },
    {
        "name": "No-bake PB&J cheesecake squares",
        "photoUrl": "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Cheesecake-squares-fc55a0b.jpg?quality=90&webp=true&resize=300,272",
        "ingredients": [
            {
                "first_ingredient": "100g butter",
                "second_ingredient": "250g digestive biscuits, crushed into fine crumbs",
                "third_ingredient": "500g full-fat soft cheese",
                "fourth_ingredient": "100g icing sugar",
                "fifth_ingredient": "237g crunchy peanut butter",
                "sixth_ingredient": "1 tsp vanilla extract",
                "seventh_ingredient": "300ml double cream",
                "eighth_ingredient": "4 cubes raspberry jelly, chopped into smaller chunks",
                "ninth_ingredient": "200g frozen raspberries, defrosted",
                "tenth_ingredient": "1 tbsp caster sugar",
            }
        ],
        "nutrition": [
            {
                "kcal": 797,
                "fat": "61g",
                "saturates": "30g",
                "carbs": "47g",
                "sugars": "31g",
                "fibre": "4g",
                "protein": "14g",
                "salt": "0.3g"
            }

        ],
        "method": [
            {
                "step_1": "Line an 18-20cm square baking tin with a strip of baking parchment, leaving the ends overhanging, this will help you lift the cheesecake out later. Put the butter in a large heatproof bowl that has a wide lip and set over a smaller heatproof bowl filled with boiling water from the kettle. Leave to stand for a minute, then stir until completely smooth. Stir in the crushed biscuits, then spoon the mixture into the prepared tin, pressing it down using the back of a spoon.",
                "step_2": "Beat the soft cheese, icing sugar, peanut butter and vanilla together in a bowl until well combined. Whisk the double cream in a separate bowl until it’s just holding its shape. Gently fold this into the peanut butter mixture, then spread over the biscuit base and smooth the surface using the back of a spoon. Chill for at least 1 hr to set. Will keep chilled for up to one day.",
                "step_3": "Meanwhile, tip the jelly cubes into a heatproof bowl and pour over 100ml boiling water. Stir to dissolve, then add the raspberries and sugar and stir, crushing the berries with the spoon. Push through a sieve into a jug, then pour this over the set cheesecake. Chill for at least 4hrs. Will keep chilled for up to two days. Run a knife around the sides, then use the overhanging parchment to lift the cheesecake onto a board. Cut into squares.",
            }
        ]
    },
]

const typeDefs = `
    type Query {
        desserts: [Dessert]
    },

    type Dessert {
        name: String,
        photoUrl: String,
        ingredients: [Ingredients],
        nutrition: [Nutrition],
        method: [Method]
    },

    type Method {
        step_1: String,
        step_2: String,
        step_3: String,
        step_4: String,
        step_5: String
    },

    type Nutrition {
        kcal: Int,
        fat: String,
        saturates: String,
        carbs: String,
        sugars: String,
        fibre: String,
        protein: String,
        salt: String
    },

    type Ingredients {
        first_ingredient: String,
        second_ingredient: String,
        third_ingredient: String,
        fourth_ingredient: String,
        fifth_ingredient: String,
        sixth_ingredient: String,
        seventh_ingredient: String,
        eighth_ingredient: String
    },

`;

const resolvers = {
    Query: {
        desserts: () => desserts
    }
}

const server = new ApolloServer({
    typeDefs, resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);