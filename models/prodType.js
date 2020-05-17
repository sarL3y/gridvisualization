module.exports = function(sequelize, DataTypes) {
  const ProdType = sequelize.define("ProdType", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]  
    }
  });

  ProdType.associate = function(models){
    ProdType.hasMany(models.GenerationData);
  };

  return ProdType;
}