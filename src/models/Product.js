import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(

            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                price: {
                    type: Sequelize.DECIMAL,
                    allowNull: false
                },
                amount: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
            },

            { sequelize })
    }
}

export default Product