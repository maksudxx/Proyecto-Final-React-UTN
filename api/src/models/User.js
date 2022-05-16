const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('user', {
        user_id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        user_name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_email:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_password:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
}