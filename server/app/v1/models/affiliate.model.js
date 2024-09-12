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
const { toDefaultValue } = require('sequelize/lib/utils');

module.exports = (sequelize, Sequelize) => {
    /**
     * @type {Model}
     */
    const Affiliate = sequelize.define("affiliate", {
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: "users",
                key: 'id',
            },
        },
        name: {
            type: Sequelize.STRING,
        },
        shortId: {
            type: Sequelize.STRING
        },
        shortUrl: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        },
        dropboxLink: {
            type: Sequelize.STRING
        },
        clickCount: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        purchases: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        url: {
            type: Sequelize.STRING
        }
    });


    return Affiliate;
};


