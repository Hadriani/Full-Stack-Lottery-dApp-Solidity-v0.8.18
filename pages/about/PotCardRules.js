import style from '../../styles/PotCard.module.css';

const PotCard = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.wrapperimage2}>
                <h2 className={style.instructions}>INSTRUCTIONS</h2>
                <p className={style.pdescr}>Welcome to our decentralized lottery! Every month we host our game for players who are willing to join.</p>
                <p className={style.pdescr}>Each player can enter the lottery with a small or big amount to increase the final pot. 
                Once all players have entered with their sum, a random player will be selected and win the whole pot. Our game is like a roulette between players.
                </p>
                <p className={style.pdescr}>
                    Once every player enters the lottery through their Metamask address, The Owner will be tasked to Pick The Winner. Our smart contract in the blockchain will receive a command from The Owner of the lottery, and a random player from those who participated will be selected a WINNER!
                    Have fun on our Lottery!
                </p>
                <p className={style.pdescr}>
                    Once you connect your account a pop-up message will be seen if the action is successful, and your address will be shown under the last winners. Once you press Enter, it will pop-up your metamask wallet for transaction confirmation. 
                    After its confirmation you have to wait some seconds before the action is completed and the Pot will be updated with your chosen ETH sum, and your address with your sum will be shown on the Table.
                    After that, when the Owner uses Pick Winner button, metamask wallet will appear, then he needs to confirm the transaction. 
                    A pop-up message will appear when the winner is picked, this action will last some seconds after the Owner confirms transaction. After the winner pop-up, wait for a few seconds more for the Last Winner to be updated with the address that won the whole pot. Lottery closes instanstly after this.
                </p>
            </div>
        </div>
    );
};

export default PotCard;