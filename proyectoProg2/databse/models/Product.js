module.exports = function(sequelize, dataTypes){
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        producto: {
            type: dataTypes.STRING,
        },
        descripcion: {
            type: dataTypes.STRING(600),
        },
        usuarioId: {
            type: dataTypes.INTEGER,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        }
    };

    let config = {
        tableName: "products",
        timestamps: false,
        underscored: false,
    };

    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models){
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "usuarioId",
        });
    };
    return Product;
};