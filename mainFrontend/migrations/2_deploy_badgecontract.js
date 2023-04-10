const GoldenBadge = artifacts.require("GoldenBadge");
const SilverBadge = artifacts.require("SilverBadge");
const BronzeBadge = artifacts.require("BronzeBadge");
const BadgeDelivery = artifacts.require("BadgeDelivery");

module.exports = async (deployer)=>{
    await deployer.deploy(GoldenBadge,1000,"GoldenBadge","GOLD");
    await deployer.deploy(SilverBadge,1000,"SilverBadge","SILVER");
    await deployer.deploy(BronzeBadge,1000,"BronzeBadge","BRONZE");
    await deployer.deploy(BadgeDelivery);

    let GoldInstance = await GoldenBadge.deployed();
    let SilverInstance = await SilverBadge.deployed();
    let BronzeInstance = await BronzeBadge.deployed();
    
    await GoldInstance.approve(BadgeDelivery.address,1000);
    await SilverInstance.approve(BadgeDelivery.address,1000);
    await BronzeInstance.approve(BadgeDelivery.address,1000);

}