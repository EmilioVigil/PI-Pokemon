const { DataTypes } = require('sequelize');


module.exports = (sequelize)=>{
	sequelize.define('Tipo',{
		id : {
			type: DataTypes.INTEGER,
			primaryKey : true,
			autoIncrement : true,
			unique : true
		},
		name : {
			type : DataTypes.STRING,
			allowNull : false
		}
	},
  {
    timestamps : false, 
    freezeTableName : true
  })
}