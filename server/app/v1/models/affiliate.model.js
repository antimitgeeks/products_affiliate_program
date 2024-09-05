/**
 * @typedef {import('sequelize').Sequelize} Sequelize
 * @typedef {import('sequelize').DataTypes} DataTypes
 * @typedef {import('sequelize').Model} Model
 */

/**
 * @param {Sequelize} sequelize
 * @param {typeof import('sequelize').DataTypes} DataTypes
 * @returns {Model}
 */

const bcrypt = require('bcrypt');
const { ENUM } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    /**
     * @type {Model}
     */
    const Affiliate = sequelize.define("affiliate", {
        name: {
            type: Sequelize.STRING,
            unique: true
        },
        shortId: {
            type: Sequelize.STRING
        },
        shortUrl:{
            type:Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        },
        dropboxLink: {
            type: Sequelize.STRING
        },
        clickCount: {
            type: Sequelize.STRING
        },
        purchases: {
            type: Sequelize.STRING
        },
    });


    return Affiliate;
};


