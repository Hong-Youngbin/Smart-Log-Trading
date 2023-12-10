//SPDX-License-Identifier : MIT

pragma solidity ^0.8.0;

import "./clientinfostatus.sol";

contract SetContract is ClientInfoStatus {
    struct BuyerContractCondition {
        address walletAddress;
        string species;
        uint quantity;
        string grade;
    }
    struct SellerContractCondition {
        address walletAddress;
        string species;
        uint quantity;
        string grade;
    }

    //구매 조건 담는 매핑 생성
    mapping(address => BuyerContractCondition) internal PurchaseCondition;

    //구매 조건 담는 배열 생성
    BuyerContractCondition[] public BuyerConditionArray;

    //구매 조건 설정
    function makeBuyerContract(string memory _species, uint _quantity, string memory _grade) payable public {
        clientProcess[msg.sender] = ClientStatus.MakeContract;
        emit Information("Input Speices, Quantity, Grade you want to purchase");
        PurchaseCondition[msg.sender] = BuyerContractCondition ({
            walletAddress : msg.sender,
            species : _species,
            quantity : _quantity,
            grade : _grade
        });
        BuyerConditionArray.push(PurchaseCondition[msg.sender]);
    }

    //구매 조건 배열 특정 값 확인
    function getBuyerConditionArray(uint _index) public view returns(BuyerContractCondition memory) {
        return BuyerConditionArray[_index];
    }

    //구매조건 매핑 확인
    function getBuyerCondition(address _key) public view returns(BuyerContractCondition memory) {
        return PurchaseCondition[_key];
    }

    //매핑에서 구매조건 삭제
    function deleteBuyerCondition(address _key) payable public {
        delete(PurchaseCondition[_key]);
    }

    //구매자 구매희망 수종 변경
    function changeBuyerSpecies(string memory _species) payable public {
        PurchaseCondition[msg.sender].species = _species;
    }
    //구매자 구매희망 수량 변경
    function changeBuyerQuantity(uint _quantity) payable public {
        PurchaseCondition[msg.sender].quantity = _quantity;
    }
    //구매자 구매희망 등급 변경
    function changeBuyerGrade(string memory _grade) payable public {
        PurchaseCondition[msg.sender].grade = _grade;
    }

    //판매 조건 담는 매핑 생성
    mapping(address => SellerContractCondition) internal SellingCondition;

    //판매 조건 담는 배열 생성
    SellerContractCondition[] public SellerConditionArray;

    //판매 조건 설정
    function makeSellerContract(string memory _species, uint _quantity, string memory _grade) payable public {
        clientProcess[msg.sender] = ClientStatus.MakeContract;
        emit Information("Input Speices, Quantity, Grade you want to sell");
        SellingCondition[msg.sender] = SellerContractCondition ({
            walletAddress : msg.sender,
            species : _species,
            quantity : _quantity,
            grade : _grade
        });
        SellerConditionArray.push(SellingCondition[msg.sender]);
    }

    //판매 조건 배열 특정 값 확인
    function getSellerConditionArray(uint _index) public view returns(SellerContractCondition memory) {
        return SellerConditionArray[_index];
    }

    //판매조건 매핑 확인
    function getSellerCondition(address _key) public view returns(SellerContractCondition memory) {
        return SellingCondition[_key];
    }

    //매핑에서 판매조건 삭제
    function deleteSellerCondition(address _key) payable public {
        delete(SellingCondition[_key]);
    }

    //판매자 판매희망 수종 변경
    function changeSellerSpecies(string memory _species) payable public {
        SellingCondition[msg.sender].species = _species;
    }
    //판매자 판매희망 수량 변경
    function changeSellerQuantity(uint _quantity) payable public {
        SellingCondition[msg.sender].quantity = _quantity;
    }
    //판매자 판매희망 등급 변경
    function changeSellerGrade(string memory _grade) payable public {
        SellingCondition[msg.sender].grade = _grade;
    }
}