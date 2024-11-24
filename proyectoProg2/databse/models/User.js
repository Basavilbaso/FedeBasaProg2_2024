module.exports = function(sequelize, dataTypes){
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: dataTypes.STRING,
        },
        usuario: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        }
    };

    let config = {
        tableName: "users",
        timestamps: false,
        underscored: false,
    };

    const User = sequelize.define(alias, cols, config);
    User.associate = function(models){
        User.hasMany(models.Product, {
            as: "product",
            foreignKey: "usuarioId"
        });
    };
    return User;
};