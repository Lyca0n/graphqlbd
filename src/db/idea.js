export default (sequelize, DataTypes) => {
    return sequelize.define('idea',{
        id: { 
            type: DataTypes.STRING,
            primaryKey: true,
        },
        datetime:{ type: DataTypes.STRING},
        likes: { type:DataTypes.INTEGER},
        title:{ type: DataTypes.STRING},
        description:{ type: DataTypes.STRING},
        proposer: { type:DataTypes.INTEGER},
        benefit: { type:DataTypes.STRING},
        outcome:{ type: DataTypes.STRING},
        status:{ type: DataTypes.STRING},
        files: { type:DataTypes.STRING}
    }, {
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
      })
}
