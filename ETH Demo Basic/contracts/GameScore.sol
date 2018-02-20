pragma solidity ^0.4.4;
contract IScoreStore {
    function getScore(string name) returns (int);
}
contract GameScore {
    function getGameScore(string name) returns (int) {
        IScoreStore scoreStore = IScoreStore(0xFB88dE099e13c3ED21F80a7a1E49f8CAEcF10df6);
        return scoreStore.getScore(name);
    }
}

//https://etherscan.io/address/0xCF5609B003B2776699EEA1233F7C82D5695CC9AA