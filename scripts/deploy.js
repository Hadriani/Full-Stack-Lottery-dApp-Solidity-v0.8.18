async function main() {
    const Lottery = await ethers.getContractFactory("Lottery");

    const myLottery = await Lottery.deploy();
    console.log("Contract deployed to address:", myLottery.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });