import Sequelize, { DATE } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './meetings.db'
})
var today = new Date()
const Meeting = sequelize.define('meeting',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    descriere:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{min:3}
    },
    url:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{isUrl:true}
    },
    data:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, 
        allowNull: true
    }
});

const Participant = sequelize.define('participant',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nume:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{min:3}
    }
});

Meeting.hasMany(Participant, {
    foreignKey: 'meetingId'
})

Participant.belongsTo(Meeting, {
    foreignKey: 'meetingId'
})

async function initialize(){
    await sequelize.authenticate()
    // await sequelize.sync({
    //     alter: true
    // })
}

export{
    initialize,
    Meeting,
    Participant
}